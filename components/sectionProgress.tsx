"use client"

import { useEffect, useState } from "react"

const sections = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Development tools" },
    { id: "contact", label: "Contact" },
]

export default function SectionProgress() {
    const [activeIndex, setActiveIndex] = useState(0)
    const [pageProgress, setPageProgress] = useState(0)

    useEffect(() => {
        let animationFrame = 0

        const updateProgress = () => {
            const activationLine = Math.min(window.innerHeight * 0.2, 160)
            const isAtPageEnd = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2
            const scrollableDistance = document.documentElement.scrollHeight - window.innerHeight
            const nextActiveIndex = isAtPageEnd ? sections.length - 1 : sections.reduce((currentIndex, section, index) => {
                const element = document.getElementById(section.id)
                return element && element.getBoundingClientRect().top <= activationLine ? index : currentIndex
            }, 0)

            setActiveIndex(nextActiveIndex)
            setPageProgress(scrollableDistance > 0 ? Math.max(0, Math.min(window.scrollY / scrollableDistance, 1)) : 0)
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
        const nextIndex = sections.findIndex((section) => section.id === id)
        if (nextIndex >= 0) setActiveIndex(nextIndex)
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
    }

    const sectionProgress = activeIndex / Math.max(sections.length - 1, 1)
    const pageProgressPercent = Math.round(pageProgress * 100)

    return (
        <nav aria-label="Page progress">
            <div
                role="progressbar"
                aria-label="Page scroll progress"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={pageProgressPercent}
                className="fixed inset-x-0 top-0 z-[100] h-[3px] bg-border-control sm:hidden"
            >
                <span
                    className="block h-full bg-accent shadow-[0_0_8px_var(--accent)] transition-[width] duration-100 ease-linear motion-reduce:transition-none motion-reduce:shadow-none"
                    style={{ width: `${pageProgress * 100}%` }}
                    aria-hidden="true"
                />
            </div>

            <div
                style={{ left: "clamp(6rem, 8vw, 8rem)" }}
                className="fixed top-1/2 z-[70] hidden -translate-y-1/2 sm:block"
            >
                <div className="relative flex h-[min(72vh,42rem)] min-h-80 w-8 shrink-0 flex-col items-center justify-between py-2">
                    <span className="absolute inset-y-5 left-1/2 w-px -translate-x-1/2 bg-border-default" aria-hidden="true" />
                    <span
                        className="absolute left-1/2 top-5 w-px -translate-x-1/2 bg-accent transition-[height] duration-300"
                        style={{ height: `calc((100% - 2.5rem) * ${sectionProgress})` }}
                        aria-hidden="true"
                    />

                    {sections.map((section, index) => (
                        <button
                            key={section.id}
                            type="button"
                            onClick={() => goToSection(section.id)}
                            aria-label={`Go to ${section.label} section`}
                            aria-current={activeIndex === index ? "location" : undefined}
                            className="group relative z-10 flex h-10 w-8 items-center justify-center rounded-full"
                        >
                            <span
                                className={`block h-3 w-3 rounded-full border transition-all duration-200 ${
                                    activeIndex === index
                                        ? "scale-125 border-accent bg-accent"
                                        : "border-border-control bg-bg-primary group-hover:border-accent-hover"
                                }`}
                                aria-hidden="true"
                            />
                        </button>
                    ))}
                </div>
            </div>
        </nav>
    )
}
