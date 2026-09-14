"use client"

import { useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from 'react';
import { easeOut, motion, useMotionValue, useReducedMotion, useSpring } from 'motion/react';
import {
    SiReact,
    SiNextdotjs,
    SiTailwindcss,
    SiTypescript,
    SiSupabase,
    SiFigma,
    SiFirebase,
    SiJavascript,
    SiGit,
    SiGithub,
    SiPostgresql,
    SiFramer,
    SiVercel,
    SiNodedotjs,
    SiExpo,
    SiHuggingface
} from "react-icons/si";

const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
}

const item = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } }
}

const stats = [
    { value: "3+", label: "Years of Experience" },
    { value: "5+", label: "Projects Completed and counting" },
    { value: "99%", label: "Client Satisfaction" }
]


const devTools = [
    { icon: SiReact, color: "#61DAFB", name: "React" },
    { icon: SiExpo, color: "var(--text-primary)", name: "React Expo" },
    { icon: SiNextdotjs, color: "var(--text-primary)", name: "Next.js" },
    { icon: SiTypescript, color: "#3178C6", name: "TypeScript" },
    { icon: SiJavascript, color: "#FF9A00", name: "JavaScript" },
    { icon: SiTailwindcss, color: "#06B6D4", name: "Tailwind" },
    { icon: SiNodedotjs, color: "#3ECF8E", name: "Node.js" },
    { icon: SiPostgresql, color: "#3ECF8E", name: "PostgreSql" },
    { icon: SiSupabase, color: "#3ECF8E", name: "Supabase" },
    { icon: SiFirebase, color: "#F24E1E", name: "Firebase" },
    { icon: SiVercel, color: "", name: "Vercel" },
    { icon: SiHuggingface, color: "#f8b859ff", name: "HuggingFace" },
    { icon: SiFigma, color: "#F24E1E", name: "Figma" },
    { icon: SiFramer, color: "", name: "Framer" },
    { icon: SiGit, color: "#F24E1E", name: "Git" },
    { icon: SiGithub, color: "", name: "Github" },

]

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

const toolRelations: Record<string, string[]> = {
    React: ["Next.js", "React Expo", "TypeScript"],
    "React Expo": ["React", "TypeScript", "Firebase"],
    "Next.js": ["React", "TypeScript", "Vercel"],
    TypeScript: ["JavaScript", "React", "Node.js"],
    JavaScript: ["TypeScript", "Node.js", "React"],
    Tailwind: ["React", "Next.js"],
    "Node.js": ["JavaScript", "TypeScript", "PostgreSql"],
    PostgreSql: ["Node.js", "Supabase"],
    Supabase: ["PostgreSql", "Next.js"],
    Firebase: ["React Expo", "React"],
    Vercel: ["Next.js", "Git", "Github"],
    HuggingFace: ["Python", "Next.js"],
    Figma: ["Framer", "React"],
    Framer: ["Figma", "React"],
    Git: ["Github", "Vercel"],
    Github: ["Git", "Vercel"],
}

type ToolConnection = { x1: number; y1: number; x2: number; y2: number }

function ToolCard({ tool, index, isAutoActive, onInteractionChange, cardRef }: {
    tool: (typeof devTools)[number]
    index: number
    isAutoActive: boolean
    onInteractionChange: (isInteracting: boolean) => void
    cardRef: (element: HTMLDivElement | null) => void
}) {
    const prefersReducedMotion = useReducedMotion()
    const [isHovered, setIsHovered] = useState(false)
    const rotateX = useMotionValue(0)
    const rotateY = useMotionValue(0)
    const smoothRotateX = useSpring(rotateX, { stiffness: 220, damping: 22 })
    const smoothRotateY = useSpring(rotateY, { stiffness: 220, damping: 22 })

    const followPointer = (event: ReactPointerEvent<HTMLDivElement>) => {
        if (prefersReducedMotion) return

        const card = event.currentTarget
        const bounds = card.getBoundingClientRect()
        const pointerX = event.clientX - bounds.left
        const pointerY = event.clientY - bounds.top

        card.style.setProperty("--spotlight-x", `${pointerX}px`)
        card.style.setProperty("--spotlight-y", `${pointerY}px`)

        rotateX.set(-((pointerY / bounds.height) - 0.5) * 5)
        rotateY.set(((pointerX / bounds.width) - 0.5) * 5)
    }

    const resetCard = () => {
        setIsHovered(false)
        onInteractionChange(false)
        rotateX.set(0)
        rotateY.set(0)
    }

    return (
        <motion.div
            ref={cardRef}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
            whileInView={prefersReducedMotion ? undefined : {
                opacity: 1,
                y: 0,
                transition: { type: "spring", stiffness: 210, damping: 19, delay: (index % 8) * 0.055 },
            }}
            viewport={{ once: true, amount: 0.35 }}
            whileHover={prefersReducedMotion ? undefined : {
                y: -6,
                transition: { type: "spring", stiffness: 260, damping: 18 },
            }}
            whileTap={prefersReducedMotion ? undefined : { scale: 0.97 }}
            onPointerMove={followPointer}
            onPointerEnter={() => {
                setIsHovered(true)
                onInteractionChange(true)
            }}
            onPointerLeave={resetCard}
            style={{ rotateX: smoothRotateX, rotateY: smoothRotateY, transformPerspective: 800 }}
            className="group relative z-10 flex min-w-0 cursor-default items-center gap-4 overflow-hidden rounded-2xl border border-border-default bg-bg-secondary p-5"
        >
            <motion.span
                animate={{ opacity: isHovered || isAutoActive ? 1 : 0 }}
                transition={{ duration: isHovered ? 0.2 : 0.8, ease: "easeInOut" }}
                className="pointer-events-none absolute inset-0 rounded-[inherit] border border-accent"
                aria-hidden="true"
            />
            <motion.span
                animate={{
                    opacity: prefersReducedMotion
                        ? 0
                        : isHovered
                            ? 0.85
                            : isAutoActive
                                ? [0, 0.65, 0.22]
                                : 0,
                }}
                transition={{ duration: isHovered ? 0.25 : 3.2, ease: "easeOut" }}
                className="pointer-events-none absolute inset-0"
                style={{ background: "radial-gradient(140px circle at var(--spotlight-x, 50%) var(--spotlight-y, 50%), rgba(191, 95, 255, 0.16), transparent 70%)" }}
                aria-hidden="true"
            />
            <motion.span
                animate={
                    prefersReducedMotion
                        ? { scale: 1, rotate: 0, y: 0 }
                        : isHovered
                            ? { scale: 1.1, rotate: 4, y: -4 }
                            : isAutoActive
                                ? { scale: [1, 1.08, 1.03], rotate: [0, 4, 1], y: [0, -4, 0] }
                                : { scale: 1, rotate: 0, y: 0 }
                }
                transition={isHovered
                    ? { type: "spring", stiffness: 300, damping: 18 }
                    : { duration: 2.8, ease: "easeInOut" }
                }
                className="relative z-10 flex"
            >
                <tool.icon size={32} style={{ color: tool.color }} />
            </motion.span>
            <span className="relative z-10 font-semibold text-text-secondary">{tool.name}</span>
        </motion.div>
    )
}

export default function Experience() {
    const prefersReducedMotion = useReducedMotion()
    const journeyRailRef = useRef<HTMLDivElement>(null)
    const toolGridRef = useRef<HTMLDivElement>(null)
    const toolCardRefs = useRef<Array<HTMLDivElement | null>>([])
    const [activeJourneyIndex, setActiveJourneyIndex] = useState(0)
    const [activeToolIndex, setActiveToolIndex] = useState(0)
    const [isToolCyclePaused, setIsToolCyclePaused] = useState(false)
    const [toolConnections, setToolConnections] = useState<ToolConnection[]>([])

    useEffect(() => {
        if (isToolCyclePaused) return

        const cycle = window.setInterval(() => {
            setActiveToolIndex((currentIndex) => (currentIndex + 1) % devTools.length)
        }, 4200)

        return () => window.clearInterval(cycle)
    }, [isToolCyclePaused])

    useEffect(() => {
        const updateConnections = () => {
            if (prefersReducedMotion || isToolCyclePaused) {
                setToolConnections([])
                return
            }

            const grid = toolGridRef.current
            const sourceCard = toolCardRefs.current[activeToolIndex]
            if (!grid || !sourceCard) return

            const gridBounds = grid.getBoundingClientRect()
            const sourceBounds = sourceCard.getBoundingClientRect()
            const relatedTools = toolRelations[devTools[activeToolIndex].name] ?? []
            const source = {
                x: sourceBounds.left - gridBounds.left + sourceBounds.width / 2,
                y: sourceBounds.top - gridBounds.top + sourceBounds.height / 2,
            }

            setToolConnections(relatedTools.flatMap((relatedName) => {
                const relatedIndex = devTools.findIndex((tool) => tool.name === relatedName)
                const targetCard = toolCardRefs.current[relatedIndex]
                if (!targetCard) return []

                const targetBounds = targetCard.getBoundingClientRect()
                return [{
                    x1: source.x,
                    y1: source.y,
                    x2: targetBounds.left - gridBounds.left + targetBounds.width / 2,
                    y2: targetBounds.top - gridBounds.top + targetBounds.height / 2,
                }]
            }))
        }

        const animationFrame = requestAnimationFrame(updateConnections)
        window.addEventListener("resize", updateConnections)

        return () => {
            cancelAnimationFrame(animationFrame)
            window.removeEventListener("resize", updateConnections)
        }
    }, [activeToolIndex, isToolCyclePaused, prefersReducedMotion])

    const updateJourneyProgress = () => {
        const rail = journeyRailRef.current
        if (!rail) return

        const cards = Array.from(rail.children) as HTMLElement[]
        const closestCardIndex = cards.reduce((closestIndex, card, index) => {
            const currentDistance = Math.abs(card.offsetTop - rail.offsetTop - rail.scrollTop)
            const closestDistance = Math.abs(cards[closestIndex].offsetTop - rail.offsetTop - rail.scrollTop)
            return currentDistance < closestDistance ? index : closestIndex
        }, 0)

        setActiveJourneyIndex(closestCardIndex)
    }

    const scrollToJourneyCard = (index: number) => {
        const rail = journeyRailRef.current
        const card = rail?.children[index] as HTMLElement | undefined
        if (!rail || !card) return

        rail.scrollTo({ top: card.offsetTop - rail.offsetTop, behavior: "smooth" })
    }

    return (
        <motion.section
            id="experience"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            className="py-15 px-5 md:px-10 lg:px-20 bg-bg-primary text-text-primary"
        >
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <motion.div variants={item} className=" mb-5">
                    <p className="text-xs font-semibold tracking-[0.3em] uppercase text-accent mb-4">Experience</p>
                </motion.div>

                {/* Experience & Education */}
                <motion.div variants={item} className="mb-20">
                    <div className="mb-5 flex items-end justify-between gap-3 md:mb-6 md:gap-4">
                        <div>
                            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-text-muted">Journey</p>
                            <p className="mt-2 text-sm text-text-secondary">Scroll vertically to explore each milestone.</p>
                        </div>
                        <p className="shrink-0 rounded-full border border-border-default bg-bg-secondary px-3 py-1 text-xs font-semibold tabular-nums text-text-muted md:text-sm" aria-hidden="true">
                            {String(activeJourneyIndex + 1).padStart(2, "0")} / {String(journey.length).padStart(2, "0")}
                        </p>
                    </div>

                    <div className="flex items-stretch gap-3 md:gap-8">
                        <div
                            ref={journeyRailRef}
                            onScroll={updateJourneyProgress}
                            tabIndex={0}
                            aria-label="Education and work experience. Scroll vertically to view more."
                            className="flex h-[22rem] min-w-0 flex-1 snap-y snap-mandatory flex-col gap-4 overflow-y-auto overscroll-y-contain rounded-2xl scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:h-80 md:gap-5"
                        >
                            {journey.map((entry) => (
                                <article
                                    key={`${entry.category}-${entry.title}`}
                                    className="flex min-h-full min-w-full snap-start snap-always flex-col justify-between rounded-2xl border border-border-default bg-bg-secondary p-5 transition-colors hover:border-accent sm:p-7 md:p-10"
                                >
                                    <div>
                                        <p className="mb-4 text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-accent sm:text-xs md:mb-5 md:tracking-[0.3em]">{entry.category}</p>
                                        <h3 className="max-w-2xl text-xl font-bold leading-tight text-text-primary sm:text-2xl md:text-4xl">{entry.title}</h3>
                                        <div className="mt-3 flex flex-col items-start gap-1 text-xs text-text-muted sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-2 sm:text-sm">
                                            <span className="font-semibold text-text-secondary">{entry.organization}</span>
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
                                className="absolute left-1/2 top-5 w-px -translate-x-1/2 bg-accent transition-[height] duration-300"
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
                                        className={`block h-3 w-3 rounded-full border transition-all ${
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

                {/* Stats row */}
                <motion.div
                    variants={item}
                    className="grid grid-cols-3 gap-px bg-border-default border border-border-default rounded-2xl overflow-hidden mb-20"
                >
                    {stats.map((s, i) => (
                        <div key={i} className="bg-bg-secondary flex flex-col items-center justify-center py-10 px-6 text-center">
                            <p className="text-3xl md:text-5xl font-black text-text-primary tracking-tight">{s.value}</p>
                            <p className="text-xs md:text-sm text-text-muted mt-2 font-medium">{s.label}</p>
                        </div>
                    ))}
                </motion.div>

                {/* Development tools grid */}
                <div>
                    <motion.div variants={item}>
                        <p className="text-xs font-semibold tracking-[0.3em] uppercase text-text-muted mb-6">Development Tools</p>
                        <div ref={toolGridRef} className="relative grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                            {!prefersReducedMotion && (
                                <svg className="pointer-events-none absolute inset-0 z-0 h-full w-full overflow-visible" aria-hidden="true">
                                    {toolConnections.map((connection, index) => (
                                        <motion.line
                                            key={`${activeToolIndex}-${index}`}
                                            x1={connection.x1}
                                            y1={connection.y1}
                                            x2={connection.x2}
                                            y2={connection.y2}
                                            stroke="var(--accent)"
                                            strokeWidth="1"
                                            strokeDasharray="4 7"
                                            initial={{ pathLength: 0, opacity: 0 }}
                                            animate={{ pathLength: 1, opacity: [0, 0.5, 0.16] }}
                                            transition={{ duration: 3.2, ease: "easeInOut" }}
                                        />
                                    ))}
                                </svg>
                            )}
                            {devTools.map((tool, index) => (
                                <ToolCard
                                    key={tool.name}
                                    tool={tool}
                                    index={index}
                                    isAutoActive={!isToolCyclePaused && activeToolIndex === index}
                                    onInteractionChange={setIsToolCyclePaused}
                                    cardRef={(element) => {
                                        toolCardRefs.current[index] = element
                                    }}
                                />
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    )
}
