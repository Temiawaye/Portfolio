"use client"

import { useEffect, useRef, useState } from 'react';
import { easeOut, motion, useReducedMotion } from 'motion/react';

const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
}

const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.38, ease: easeOut } }
}

const experiences = [
    {
        role: "Tech Support Engineer",
        company: "ECOBANK Nigeria",
        date: "2024",
        desc: "Assisted the thecnical and develpoment team in carry out their jobs by providing technical support."
    }
]

const education = [
    {
        degree: "BSc in Computer Science",
        school: "Federal Unviversity Oye-Ekiti",
        date: "2022 - 2026",
        desc: "Graduated with honors. Specialized in software engineering, algorithms, and web technologies."
    },

    {
        degree: "Advanced UI/UX Certification",
        school: "Udemy",
        date: "2023",
        desc: "Intensive practical program focusing on user-centered design, prototyping, and accessibility principles."
    }
]

const journey = [
    ...education.map((entry) => ({
        category: "Education",
        title: entry.degree,
        organization: entry.school,
        ...entry,
    })),
    ...experiences.map((entry) => ({
        category: "Work Experience",
        title: entry.role,
        organization: entry.company,
        ...entry,
    })),
]

export default function Experience() {
    const prefersReducedMotion = useReducedMotion()
    const journeyRailRef = useRef<HTMLDivElement>(null)
    const journeyAnimationFrameRef = useRef(0)
    const [activeJourneyIndex, setActiveJourneyIndex] = useState(0)

    const updateJourneyProgress = () => {
        cancelAnimationFrame(journeyAnimationFrameRef.current)
        journeyAnimationFrameRef.current = requestAnimationFrame(() => {
            const rail = journeyRailRef.current
            if (!rail) return

            const cards = Array.from(rail.children) as HTMLElement[]
            const closestCardIndex = cards.reduce((closestIndex, card, index) => {
                const currentDistance = Math.abs(card.offsetTop - rail.offsetTop - rail.scrollTop)
                const closestDistance = Math.abs(cards[closestIndex].offsetTop - rail.offsetTop - rail.scrollTop)
                return currentDistance < closestDistance ? index : closestIndex
            }, 0)

            setActiveJourneyIndex(closestCardIndex)
        })
    }

    useEffect(() => () => cancelAnimationFrame(journeyAnimationFrameRef.current), [])

    const scrollToJourneyCard = (index: number) => {
        const rail = journeyRailRef.current
        const card = rail?.children[index] as HTMLElement | undefined
        if (!rail || !card) return

        rail.scrollTo({
            top: card.offsetTop - rail.offsetTop,
            behavior: prefersReducedMotion ? "auto" : "smooth",
        })
    }

    return (
        <motion.section
            id="experience"
            variants={container}
            initial={prefersReducedMotion ? false : "hidden"}
            whileInView={prefersReducedMotion ? undefined : "visible"}
            viewport={{ once: true, amount: 0.1 }}
            className="py-15 px-5 md:px-10 lg:px-20 bg-bg-primary text-text-primary"
        >
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <motion.div variants={item} className=" mb-5">
                    <h2 className="mb-4 flex flex-wrap text-base font-semibold tracking-tight" aria-label="Experience">
                        <span className="text-electric-lavender" aria-hidden="true">~/</span>
                        <span className="text-text-primary">experience</span>
                    </h2>
                </motion.div>

                {/* Experience & Education */}
                <motion.div variants={item} className="mb-20">
                    <div className="mb-5 flex items-end justify-between gap-3 md:mb-6 md:gap-4">
                        <div>
                            <h3 className="flex max-w-full flex-wrap text-sm font-semibold leading-relaxed" aria-label="Education and work experience">
                                <span className="text-electric-lavender" aria-hidden="true">{"<"}</span>
                                <span className="text-text-primary">education and work experience</span>
                                <span className="ml-1 text-electric-lavender" aria-hidden="true">{"/>"}</span>
                            </h3>
                            <p className="mt-2 text-sm text-text-secondary">Scroll vertically to explore each milestone.</p>
                        </div>
                        <p className="shrink-0 rounded-full border border-border-default bg-bg-secondary px-3 py-1 text-xs font-medium tabular-nums text-text-muted md:text-sm" aria-hidden="true">
                            {String(activeJourneyIndex + 1).padStart(2, "0")} / {String(journey.length).padStart(2, "0")}
                        </p>
                    </div>

                    <div className="flex items-stretch gap-3 md:gap-8 ">
                        <div
                            ref={journeyRailRef}
                            onScroll={updateJourneyProgress}
                            tabIndex={0}
                            aria-label="Education and work experience. Scroll vertically to view more."
                            className="flex h-[22rem] min-w-0 flex-1 snap-y snap-mandatory flex-col gap-4 overflow-y-auto overscroll-y-contain rounded-2xl scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:h-80 md:gap-5 shadow-xl shadow-accent/10"
                        >
                            {journey.map((entry) => (
                                <article
                                    key={`${entry.category}-${entry.title}`}
                                    className="flex min-h-full min-w-full snap-start snap-always flex-col justify-between rounded-2xl bg-bg-secondary p-5 transition-colors hover:border-accent sm:p-7 md:p-10"
                                >
                                    <div>
                                        <p className="mb-4 text-[0.65rem] font-medium uppercase tracking-[0.25em] text-accent sm:text-xs md:mb-5 md:tracking-[0.3em]">{entry.category}</p>
                                        <h4 className="max-w-2xl text-xl font-semibold leading-tight text-text-primary sm:text-2xl md:text-4xl">{entry.title}</h4>
                                        <div className="mt-3 flex flex-col items-start gap-1 text-xs text-text-muted sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-2 sm:text-sm">
                                            <span className="font-medium text-text-secondary">{entry.organization}</span>
                                            <span className="hidden sm:inline" aria-hidden="true">•</span>
                                            <span>{entry.date}</span>
                                        </div>
                                    </div>
                                    <p className="mt-6 max-w-2xl text-sm leading-relaxed text-text-secondary md:mt-8 md:text-base">{entry.desc}</p>
                                </article>
                            ))}
                        </div>

                        <div className="relative order-first flex w-7 shrink-0 flex-col items-center justify-between py-1 md:w-8 md:py-2">
                            <span
                                role="progressbar"
                                aria-label="Journey scroll progress"
                                aria-valuemin={1}
                                aria-valuemax={journey.length}
                                aria-valuenow={activeJourneyIndex + 1}
                                className="sr-only"
                            />
                            <span className="absolute inset-y-5 left-1/2 w-px -translate-x-1/2 bg-border-default" aria-hidden="true" />
                            <span
                                className="absolute left-1/2 top-5 w-px -translate-x-1/2 bg-accent transition-[height] duration-250 ease-out"
                                style={{ height: `calc((100% - 2.5rem) * ${activeJourneyIndex / Math.max(journey.length - 1, 1)})` }}
                                aria-hidden="true"
                            />
                            {journey.map((entry, index) => (
                                <button
                                    key={`${entry.category}-tracker-${index}`}
                                    type="button"
                                    onClick={() => scrollToJourneyCard(index)}
                                    aria-label={`Show ${entry.title}`}
                                    aria-current={activeJourneyIndex === index ? "step" : undefined}
                                    className="group relative z-10 flex h-10 w-7 items-center justify-center rounded-full md:w-8"
                                >
                                    <span
                                        className={`block h-3 w-3 rounded-full border transition-[transform,border-color,background-color] duration-150 ease-out ${
                                            activeJourneyIndex === index
                                                ? "scale-125 border-accent bg-accent"
                                                : "border-border-control bg-bg-primary group-hover:border-accent-hover"
                                        }`}
                                        aria-hidden="true"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>
                </motion.div>

            </div>
        </motion.section>
    )
}
