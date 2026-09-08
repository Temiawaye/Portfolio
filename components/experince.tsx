"use client"

import { easeOut, motion } from 'motion/react';
import {
    SiAdobeillustrator,
    SiAdobephotoshop,
    SiCoreldraw,
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
    { icon: SiNextdotjs, color: "#000000", name: "Next.js" },
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

export default function Experience() {
    return (
        <motion.section
            id="experience"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            className="py-28 px-5 md:px-10 lg:px-20 bg-neutral-50"
        >
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <motion.div variants={item} className="text-center mb-20">
                    <p className="text-xs font-semibold tracking-[0.3em] uppercase text-neutral-400 mb-4">Experience</p>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tight text-neutral-900">
                        Numbers that speak.
                    </h2>
                </motion.div>

                {/* Stats row */}
                <motion.div
                    variants={item}
                    className="grid grid-cols-1 md:grid-cols-3 gap-px bg-neutral-200 rounded-2xl overflow-hidden mb-20"
                >
                    {stats.map((s, i) => (
                        <div key={i} className="bg-white flex flex-col items-center justify-center py-10 px-6 text-center">
                            <p className="text-5xl font-black text-neutral-900 tracking-tight">{s.value}</p>
                            <p className="text-sm text-neutral-500 mt-2 font-medium">{s.label}</p>
                        </div>
                    ))}
                </motion.div>

                {/* Experience & Education */}
                <div className="grid md:grid-cols-2 gap-12 mb-20">
                    <motion.div variants={item} className="space-y-8">
                        <p className="text-xs font-semibold tracking-[0.3em] uppercase text-neutral-400 mb-6">Work Experience</p>
                        <div className="space-y-6">
                            {experiences.map((exp, i) => (
                                <div key={i} className="bg-white p-6 rounded-2xl border border-neutral-200 card-lift hover:shadow-md transition-shadow">
                                    <h3 className="font-bold text-xl text-neutral-900">{exp.role}</h3>
                                    <div className="flex items-center gap-2 text-sm text-neutral-500 mt-1 mb-3">
                                        <span className="font-semibold">{exp.company}</span>
                                        <span>•</span>
                                        <span>{exp.date}</span>
                                    </div>
                                    <p className="text-neutral-600 text-sm leading-relaxed">{exp.desc}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div variants={item} className="space-y-8">
                        <p className="text-xs font-semibold tracking-[0.3em] uppercase text-neutral-400 mb-6">Education</p>
                        <div className="space-y-6">
                            {education.map((edu, i) => (
                                <div key={i} className="bg-white p-6 rounded-2xl border border-neutral-200 card-lift hover:shadow-md transition-shadow">
                                    <h3 className="font-bold text-xl text-neutral-900">{edu.degree}</h3>
                                    <div className="flex items-center gap-2 text-sm text-neutral-500 mt-1 mb-3">
                                        <span className="font-semibold">{edu.school}</span>
                                        <span>•</span>
                                        <span>{edu.date}</span>
                                    </div>
                                    <p className="text-neutral-600 text-sm leading-relaxed">{edu.desc}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Tools grid */}
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Design Tools and collaboration tools*/}
                    <motion.div variants={item}>
                        <p className="text-xs font-semibold tracking-[0.3em] uppercase text-neutral-400 mb-6">Design Tools and Collaboration Tools</p>
                        <div className="grid grid-cols-2 gap-4">
                            {designTools.map((tool, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-4 p-5 rounded-2xl border border-neutral-200 bg-white hover:border-none hover:shadow-md transition-all card-lift group"
                                >
                                    <tool.icon
                                        size={32}
                                        style={{ color: tool.color }}
                                        className="transition-transform group-hover:scale-110 duration-300"
                                    />
                                    <span className="font-semibold text-neutral-700">{tool.name}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Dev Tools */}
                    <motion.div variants={item}>
                        <p className="text-xs font-semibold tracking-[0.3em] uppercase text-neutral-400 mb-6">Development Stack</p>
                        <div className="grid grid-cols-2 gap-4">
                            {devTools.map((tool, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-4 p-5 rounded-2xl border border-neutral-200 bg-white hover:border-none hover:shadow-md transition-all card-lift group"
                                >
                                    <tool.icon
                                        size={32}
                                        style={{ color: tool.color }}
                                        className="transition-transform group-hover:scale-110 duration-300"
                                    />
                                    <span className="font-semibold text-neutral-700">{tool.name}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    )
}