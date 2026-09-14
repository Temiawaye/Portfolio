"use client"

import { useRef, useState } from 'react';
import { easeOut, motion } from 'motion/react';
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
    { value: "50+", label: "Projects Completed" },
    { value: "99%", label: "Client Satisfaction" }
]

const designTools = [
    // { icon: SiAdobephotoshop, color: "#31A8FF", name: "Photoshop" },
    // { icon: SiAdobeillustrator, color: "#ecae4aff", name: "Illustrator" },
    // { icon: SiCoreldraw, color: "#009B48", name: "CorelDRAW" },
    { icon: SiFigma, color: "#F24E1E", name: "Figma" },
    { icon: SiFramer, color: "", name: "Framer" },
    { icon: SiGit, color: "#F24E1E", name: "Git" },
    { icon: SiGithub, color: "", name: "Github" },
    
]

const devTools = [
    { icon: SiReact, color: "#61DAFB", name: "React" },
    { icon: SiExpo, color: "#", name: "React Expo" },
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

export default function Experience() {
    const journeyRailRef = useRef<HTMLDivElement>(null)
    const [activeJourneyIndex, setActiveJourneyIndex] = useState(0)

    const updateJourneyProgress = () => {
        const rail = journeyRailRef.current
        if (!rail) return

        const cards = Array.from(rail.children) as HTMLElement[]
        const closestCardIndex = cards.reduce((closestIndex, card, index) => {
            const currentDistance = Math.abs(card.offsetLeft - rail.offsetLeft - rail.scrollLeft)
            const closestDistance = Math.abs(cards[closestIndex].offsetLeft - rail.offsetLeft - rail.scrollLeft)
            return currentDistance < closestDistance ? index : closestIndex
        }, 0)

        setActiveJourneyIndex(closestCardIndex)
    }

    const scrollToJourneyCard = (index: number) => {
        const rail = journeyRailRef.current
        const card = rail?.children[index] as HTMLElement | undefined
        if (!rail || !card) return

        rail.scrollTo({ left: card.offsetLeft - rail.offsetLeft, behavior: "smooth" })
    }

    return (
        <motion.section
            id="experience"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            className="py-28 px-5 md:px-10 lg:px-20 bg-bg-primary text-text-primary"
        >
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <motion.div variants={item} className="text-center mb-20">
                    <p className="text-xs font-semibold tracking-[0.3em] uppercase text-accent mb-4">Experience</p>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tight text-text-primary">
                        Numbers that speak.
                    </h2>
                </motion.div>

                {/* Stats row */}
                <motion.div
                    variants={item}
                    className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border-default border border-border-default rounded-2xl overflow-hidden mb-20"
                >
                    {stats.map((s, i) => (
                        <div key={i} className="bg-bg-secondary flex flex-col items-center justify-center py-10 px-6 text-center">
                            <p className="text-5xl font-black text-text-primary tracking-tight">{s.value}</p>
                            <p className="text-sm text-text-muted mt-2 font-medium">{s.label}</p>
                        </div>
                    ))}
                </motion.div>

                {/* Experience & Education */}
                <motion.div variants={item} className="mb-20">
                    <div className="mb-6 flex items-end justify-between gap-4">
                        <div>
                            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-text-muted">Journey</p>
                            <p className="mt-2 text-sm text-text-secondary">Scroll horizontally to explore each milestone.</p>
                        </div>
                        <p className="text-sm font-semibold tabular-nums text-text-muted" aria-hidden="true">
                            {String(activeJourneyIndex + 1).padStart(2, "0")} / {String(journey.length).padStart(2, "0")}
                        </p>
                    </div>

                    <div className="flex items-stretch gap-5 md:gap-8">
                        <div
                            ref={journeyRailRef}
                            onScroll={updateJourneyProgress}
                            tabIndex={0}
                            aria-label="Education and work experience. Scroll horizontally to view more."
                            className="flex min-w-0 flex-1 snap-x snap-mandatory gap-5 overflow-x-auto overscroll-x-contain rounded-2xl scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                        >
                            {journey.map((entry) => (
                                <article
                                    key={`${entry.category}-${entry.title}`}
                                    className="flex min-h-64 min-w-full snap-start snap-always flex-col justify-between rounded-2xl border border-border-default bg-bg-secondary p-7 transition-colors hover:border-accent md:min-h-72 md:p-10"
                                >
                                    <div>
                                        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-accent">{entry.category}</p>
                                        <h3 className="max-w-2xl text-2xl font-bold text-text-primary md:text-4xl">{entry.title}</h3>
                                        <div className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-text-muted">
                                            <span className="font-semibold text-text-secondary">{entry.organization}</span>
                                            <span aria-hidden="true">•</span>
                                            <span>{entry.date}</span>
                                        </div>
                                    </div>
                                    <p className="mt-8 max-w-2xl text-sm leading-relaxed text-text-secondary md:text-base">{entry.desc}</p>
                                </article>
                            ))}
                        </div>

                        <div
                            role="progressbar"
                            aria-label="Journey scroll progress"
                            aria-valuemin={1}
                            aria-valuemax={journey.length}
                            aria-valuenow={activeJourneyIndex + 1}
                            className="relative flex w-5 shrink-0 flex-col items-center justify-between py-3"
                        >
                            <span className="absolute inset-y-3 left-1/2 w-px -translate-x-1/2 bg-border-default" aria-hidden="true" />
                            <span
                                className="absolute left-1/2 top-3 w-px -translate-x-1/2 bg-accent transition-[height] duration-300"
                                style={{ height: `calc((100% - 1.5rem) * ${activeJourneyIndex / Math.max(journey.length - 1, 1)})` }}
                                aria-hidden="true"
                            />
                            {journey.map((entry, index) => (
                                <button
                                    key={`${entry.category}-tracker-${index}`}
                                    type="button"
                                    onClick={() => scrollToJourneyCard(index)}
                                    aria-label={`Show ${entry.title}`}
                                    aria-current={activeJourneyIndex === index ? "step" : undefined}
                                    className={`relative z-10 h-3 w-3 rounded-full border transition-all ${
                                        activeJourneyIndex === index
                                            ? "scale-125 border-accent bg-accent"
                                            : "border-border-control bg-bg-primary hover:border-accent-hover"
                                    }`}
                                />
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Tools grid */}
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Design Tools and collaboration tools*/}
                    <motion.div variants={item}>
                        <p className="text-xs font-semibold tracking-[0.3em] uppercase text-text-muted mb-6">Design Tools and Collaboration Tools</p>
                        <div className="grid grid-cols-2 gap-4">
                            {designTools.map((tool, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-4 p-5 rounded-2xl border border-border-default bg-bg-secondary hover:border-accent transition-all card-lift group"
                                >
                                    <tool.icon
                                        size={32}
                                        style={{ color: tool.color }}
                                        className="transition-transform group-hover:scale-110 duration-300"
                                    />
                                    <span className="font-semibold text-text-secondary">{tool.name}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Dev Tools */}
                    <motion.div variants={item}>
                        <p className="text-xs font-semibold tracking-[0.3em] uppercase text-text-muted mb-6">Development Stack</p>
                        <div className="grid grid-cols-2 gap-4">
                            {devTools.map((tool, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-4 p-5 rounded-2xl border border-border-default bg-bg-secondary hover:border-accent transition-all card-lift group"
                                >
                                    <tool.icon
                                        size={32}
                                        style={{ color: tool.color }}
                                        className="transition-transform group-hover:scale-110 duration-300"
                                    />
                                    <span className="font-semibold text-text-secondary">{tool.name}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    )
}
