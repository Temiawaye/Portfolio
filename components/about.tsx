"use client"

import { easeOut, motion } from "motion/react"

const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
}

const item = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } }
}

const specializations = [
    { label: "Frontend Architecture", desc: "Building scalable, maintainable component systems using React and Next.js." },
    { label: "Interactive UI", desc: "Crafting fluid animations and engaging user experiences with Framer Motion." },
    { label: "Performance Focus", desc: "Ensuring lightning-fast load times and accessible interfaces for all users." },
]

export default function About() {
    return (
        <motion.section
            id="about"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="py-28 px-5 md:px-10 lg:px-20 bg-neutral-900 text-white"
        >
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <motion.div variants={item} className="mb-16">
                    <p className="text-xs font-semibold tracking-[0.3em] uppercase text-neutral-400 mb-4">About</p>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.05] max-w-2xl">
                        Code with intention.{" "}
                        <span className="text-neutral-500">Scale with precision.</span>
                    </h2>
                </motion.div>

                {/* Content grid */}
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Left: main copy */}
                    <motion.div variants={item} className="space-y-6 text-neutral-300 text-lg leading-relaxed">
                        <p>
                            I am a specialized frontend engineer focused on bridging the gap between design and engineering. I build robust digital products that look stunning and perform flawlessly.
                        </p>
                        <p>
                            My work centers on writing clean, accessible code and creating modern architectures that scale. Whether it's a dynamic SaaS dashboard or an interactive marketing site, I bring ideas to life on the web.
                        </p>
                        <p>
                            I partner with businesses and startups who value pixel-perfect implementations, seamless user experiences, and maintainable codebases.
                        </p>
                    </motion.div>

                    {/* Right: pillar cards */}
                    <motion.div variants={item} className="grid gap-6">
                        {specializations.map((spec, i) => (
                            <div
                                key={i}
                                className="border border-neutral-700 rounded-2xl p-6 hover:border-neutral-400 transition-colors"
                            >
                                <p className="font-black text-xl mb-1">{spec.label}</p>
                                <p className="text-neutral-400 text-sm leading-relaxed">{spec.desc}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </motion.section>
    )
}
