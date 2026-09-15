"use client"

import { Component, type ReactNode, useCallback, useEffect, useRef, useState } from "react"
import dynamic from "next/dynamic"
import { useReducedMotion } from "motion/react"

const IntroLogoCanvas = dynamic(() => import("./IntroLogoCanvas"), {
    ssr: false,
    loading: () => null,
})

const EXIT_DURATION_MS = 500
const MIN_INTRO_DURATION_MS = 4_500
const MAX_INTRO_DURATION_MS = 4_500

type IntroPhase = "visible" | "leaving" | "hidden"

type IntroErrorBoundaryProps = {
    children: ReactNode
    onError: () => void
}

class IntroErrorBoundary extends Component<IntroErrorBoundaryProps, { hasError: boolean }> {
    state = { hasError: false }

    static getDerivedStateFromError() {
        return { hasError: true }
    }

    componentDidCatch() {
        this.props.onError()
    }

    render() {
        return this.state.hasError ? null : this.props.children
    }
}

function waitForEssentialImage(image: HTMLImageElement) {
    if (image.complete) {
        return image.decode?.().catch(() => undefined) ?? Promise.resolve()
    }

    return new Promise<void>((resolve) => {
        const settle = () => {
            image.removeEventListener("load", settle)
            image.removeEventListener("error", settle)
            resolve()
        }
        image.addEventListener("load", settle, { once: true })
        image.addEventListener("error", settle, { once: true })
    })
}

function waitForHomepage() {
    const images = Array.from(document.querySelectorAll<HTMLImageElement>("[data-intro-essential]"))
    const fontsReady = document.fonts?.ready.catch(() => undefined) ?? Promise.resolve()

    return Promise.all([
        fontsReady,
        ...images.map(waitForEssentialImage),
    ]).then(() => new Promise<void>((resolve) => {
        requestAnimationFrame(() => requestAnimationFrame(() => resolve()))
    }))
}

function supportsWebGL2() {
    try {
        const canvas = document.createElement("canvas")
        const context = window.WebGL2RenderingContext ? canvas.getContext("webgl2") : null
        const supported = Boolean(context)
        context?.getExtension("WEBGL_lose_context")?.loseContext()
        return supported
    } catch {
        return false
    }
}

export default function IntroGate({ children }: { children: ReactNode }) {
    const prefersReducedMotion = Boolean(useReducedMotion())
    const [phase, setPhase] = useState<IntroPhase>("visible")
    const [webglAvailable, setWebglAvailable] = useState(false)
    const homepageReadyRef = useRef(false)
    const modelReadyRef = useRef(false)
    const minimumDurationElapsedRef = useRef(false)
    const introActive = phase !== "hidden"

    const dismiss = useCallback(() => {
        setPhase((currentPhase) => currentPhase === "visible" ? "leaving" : currentPhase)
    }, [])

    const markHomepageReady = useCallback(() => {
        homepageReadyRef.current = true
        if (modelReadyRef.current && minimumDurationElapsedRef.current) dismiss()
    }, [dismiss])

    const markModelReady = useCallback(() => {
        modelReadyRef.current = true
        if (homepageReadyRef.current && minimumDurationElapsedRef.current) dismiss()
    }, [dismiss])

    useEffect(() => {
        const timeout = window.setTimeout(() => {
            minimumDurationElapsedRef.current = true
            if (homepageReadyRef.current && modelReadyRef.current) dismiss()
        }, MIN_INTRO_DURATION_MS)

        return () => window.clearTimeout(timeout)
    }, [dismiss])

    useEffect(() => {
        let cancelled = false

        waitForHomepage().then(() => {
            if (!cancelled) markHomepageReady()
        })

        return () => {
            cancelled = true
        }
    }, [markHomepageReady])

    useEffect(() => {
        const checkFrame = requestAnimationFrame(() => {
            if (supportsWebGL2()) {
                setWebglAvailable(true)
            } else {
                dismiss()
            }
        })
        return () => cancelAnimationFrame(checkFrame)
    }, [dismiss])

    useEffect(() => {
        if (!introActive) return

        const timeout = window.setTimeout(dismiss, MAX_INTRO_DURATION_MS)
        return () => window.clearTimeout(timeout)
    }, [dismiss, introActive])

    useEffect(() => {
        if (phase !== "leaving") return

        const timeout = window.setTimeout(() => setPhase("hidden"), EXIT_DURATION_MS)
        return () => window.clearTimeout(timeout)
    }, [phase])

    useEffect(() => {
        if (!introActive) return

        const previousOverflow = document.body.style.overflow
        const previousOverscrollBehavior = document.body.style.overscrollBehavior
        document.body.style.overflow = "hidden"
        document.body.style.overscrollBehavior = "none"

        return () => {
            document.body.style.overflow = previousOverflow
            document.body.style.overscrollBehavior = previousOverscrollBehavior
        }
    }, [introActive])

    return (
        <>
            <div
                inert={introActive ? true : undefined}
                aria-hidden={introActive ? true : undefined}
                style={{ visibility: phase === "visible" ? "hidden" : "visible" }}
                className={`transition-opacity duration-500 ease-out motion-reduce:transition-none ${
                    phase === "visible" ? "opacity-0" : "opacity-100"
                }`}
            >
                {children}
            </div>

            {introActive && (
                <div
                    role="status"
                    aria-live="polite"
                    aria-label="Loading portfolio"
                    className={`fixed inset-0 z-[1000] touch-none overflow-hidden bg-bg-primary transition-opacity duration-500 ease-out motion-reduce:transition-none ${
                        phase === "leaving" ? "opacity-0" : "opacity-100"
                    }`}
                >
                    <span className="sr-only">Loading portfolio</span>
                    {webglAvailable && (
                        <div
                            className={`size-full transition-[transform,opacity] duration-500 ease-in motion-reduce:transition-none ${
                                phase === "leaving" ? "scale-50 opacity-0" : "scale-100 opacity-100"
                            }`}
                        >
                            <IntroErrorBoundary onError={dismiss}>
                                <IntroLogoCanvas
                                    reducedMotion={prefersReducedMotion}
                                    onReady={markModelReady}
                                    onError={dismiss}
                                />
                            </IntroErrorBoundary>
                        </div>
                    )}
                </div>
            )}
        </>
    )
}
