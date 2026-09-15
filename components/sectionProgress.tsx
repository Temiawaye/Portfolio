"use client"

import { useEffect, useState } from "react"

const sections = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
]

export default function SectionProgress() {
    const [activeIndex, setActiveIndex] = useState(0)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        let animationFrame = 0

        const updateProgress = () => {
            const viewportMarker = window.scrollY + window.innerHeight * 0.4
            const nextActiveIndex = sections.reduce((currentIndex, section, index) => {
                const element = document.getElementById(section.id)
                return element && element.offsetTop <= viewportMarker ? index : currentIndex
            }, 0)

            setActiveIndex(nextActiveIndex)
            setIsVisible(window.scrollY >= window.innerHeight * 0.6)
        }

        const handleScroll = () => {
            cancelAnimationFrame(animationFrame)
            animationFrame = requestAnimationFrame(updateProgress)
        }

        updateProgress()
        window.addEventListener("scroll", handleScroll, { passive: true })
        window.addEventListener("resize", handleScroll)

        return () => {
            cancelAnimationFrame(animationFrame)
            window.removeEventListener("scroll", handleScroll)
            window.removeEventListener("resize", handleScroll)
        }
    }, [])

    const goToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
    }

    const progress = activeIndex / Math.max(sections.length - 1, 1)

    return (
        <nav
            aria-label="Page section progress"
            className={`fixed bottom-5 left-1/2 z-40 -translate-x-1/2 transition-all duration-300 md:bottom-auto md:left-8 md:top-1/2 md:translate-x-0 md:-translate-y-1/2 lg:left-12 ${
                isVisible
                    ? "pointer-events-auto translate-y-0 opacity-100 md:translate-x-0"
                    : "pointer-events-none translate-y-3 opacity-0 md:-translate-x-3 md:translate-y-0"
            }`}
        >
            <div className="relative flex h-10 w-[min(calc(100vw_-_2.5rem),24rem)] items-center justify-between px-1 md:h-[min(72vh,42rem)] md:min-h-80 md:w-8 md:flex-col md:px-0 md:py-2">
                <span className="absolute inset-x-5 top-1/2 h-px -translate-y-1/2 bg-border-default md:inset-x-auto md:inset-y-5 md:left-1/2 md:top-auto md:h-auto md:w-px md:-translate-x-1/2 md:translate-y-0" aria-hidden="true" />
                <span
                    className="absolute left-5 top-1/2 h-px -translate-y-1/2 bg-accent transition-[width] duration-300 md:hidden"
                    style={{ width: `calc((100% - 2.5rem) * ${progress})` }}
                    aria-hidden="true"
                />
                <span
                    className="absolute left-1/2 top-5 hidden w-px -translate-x-1/2 bg-accent transition-[height] duration-300 md:block"
                    style={{ height: `calc((100% - 2.5rem) * ${progress})` }}
                    aria-hidden="true"
                />

                {sections.map((section, index) => (
                    <button
                        key={section.id}
                        type="button"
                        onClick={() => goToSection(section.id)}
                        aria-label={`Go to ${section.label} section`}
                        aria-current={activeIndex === index ? "location" : undefined}
                        className="group relative z-10 flex size-10 items-center justify-center rounded-full md:h-10 md:w-8"
                    >
                        <span
                            className={`block rounded-full border transition-all duration-200 ${
                                activeIndex === index
                                    ? "h-3 w-3 scale-110 border-accent bg-accent"
                                    : "h-2.5 w-2.5 border-border-control bg-bg-primary group-hover:border-accent-hover"
                            }`}
                            aria-hidden="true"
                        />
                    </button>
                ))}
            </div>
        </nav>
    )
}
