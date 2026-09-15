"use client"

import { useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from "react"
import { easeOut, motion, useMotionValue, useReducedMotion, useSpring } from "motion/react"
import {
    SiExpo,
    SiFramer,
    SiJavascript,
    SiNextdotjs,
    SiReact,
    SiSupabase,
    SiTailwindcss,
    SiTypescript,
    SiVercel,
} from "react-icons/si"
import GithubIcon from "@iconify-react/bi/github"
import FigmaIcon from "@iconify-react/devicon/figma"
import GitIcon from "@iconify-react/devicon/git"
import HuggingfaceIcon from "@iconify-react/devicon/huggingface"
import NodejsIcon from "@iconify-react/devicon/nodejs"
import FirebaseIcon from "@iconify-react/logos/firebase-icon"
import PostgresqlIcon from "@iconify-react/logos/postgresql"

const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
}

const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.38, ease: easeOut } },
}

const devTools = [
    { icon: SiReact, color: "#61DAFB", name: "React" },
    { icon: SiExpo, color: "var(--text-primary)", name: "React Expo" },
    { icon: SiNextdotjs, color: "var(--text-primary)", name: "Next.js" },
    { icon: SiTypescript, color: "#3178C6", name: "TypeScript" },
    { icon: SiJavascript, color: "#FF9A00", name: "JavaScript" },
    { icon: SiTailwindcss, color: "#06B6D4", name: "Tailwind" },
    { icon: NodejsIcon, color: "#3ECF8E", name: "Node.js" },
    { icon: PostgresqlIcon, color: "#3ECF8E", name: "PostgreSql" },
    { icon: SiSupabase, color: "#3ECF8E", name: "Supabase" },
    { icon: FirebaseIcon, color: "#F24E1E", name: "Firebase" },
    { icon: SiVercel, color: "", name: "Vercel" },
    { icon: HuggingfaceIcon, color: "#f8b859ff", name: "HuggingFace" },
    { icon: FigmaIcon, color: "#F24E1E", name: "Figma" },
    { icon: SiFramer, color: "", name: "Framer" },
    { icon: GitIcon, color: "#F24E1E", name: "Git" },
    { icon: GithubIcon, color: "", name: "Github" },
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
                transition: { duration: 0.36, ease: easeOut, delay: (index % 4) * 0.04 },
            }}
            viewport={{ once: true, amount: 0.35 }}
            whileHover={prefersReducedMotion ? undefined : {
                y: -4,
                transition: { type: "spring", stiffness: 360, damping: 28 },
            }}
            whileTap={prefersReducedMotion ? undefined : { scale: 0.97 }}
            onPointerMove={followPointer}
            onPointerEnter={() => {
                setIsHovered(true)
                onInteractionChange(true)
            }}
            onPointerLeave={resetCard}
            style={{ rotateX: smoothRotateX, rotateY: smoothRotateY, transformPerspective: 800 }}
            className="group relative z-10 flex min-w-0 cursor-default items-center gap-4 overflow-hidden rounded-2xl bg-bg-secondary p-5 shadow-xl shadow-accent/8"
        >
            <motion.span
                animate={{ opacity: isHovered || isAutoActive ? 1 : 0 }}
                transition={{ duration: 0.18, ease: "easeOut" }}
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
                transition={{ duration: isHovered ? 0.18 : 0.65, ease: "easeOut" }}
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
                    : { duration: 0.7, ease: "easeOut" }
                }
                className="relative z-10 flex size-8 shrink-0 items-center justify-center"
            >
                <tool.icon
                    width="32"
                    height="32"
                    className="size-8"
                    style={{ color: tool.color }}
                    aria-hidden="true"
                />
            </motion.span>
            <span className="relative z-10 font-medium text-text-secondary">{tool.name}</span>
        </motion.div>
    )
}

export default function DevelopmentTools() {
    const prefersReducedMotion = useReducedMotion()
    const toolGridRef = useRef<HTMLDivElement>(null)
    const toolCardRefs = useRef<Array<HTMLDivElement | null>>([])
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

    return (
        <motion.section
            id="skills"
            variants={container}
            initial={prefersReducedMotion ? false : "hidden"}
            whileInView={prefersReducedMotion ? undefined : "visible"}
            viewport={{ once: true, amount: 0.1 }}
            className="bg-bg-primary px-5 py-15 text-text-primary md:px-10 lg:px-20"
        >
            <motion.div variants={item} className="mx-auto max-w-6xl">
                <h2 className="mb-6 flex flex-wrap text-sm font-semibold leading-relaxed" aria-label="Development tools">
                    <span className="text-electric-lavender" aria-hidden="true">{"<"}</span>
                    <span className="text-text-primary">development tools</span>
                    <span className="ml-1 text-electric-lavender" aria-hidden="true">{"/>"}</span>
                </h2>
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
        </motion.section>
    )
}
