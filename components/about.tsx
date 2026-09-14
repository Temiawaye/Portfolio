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
        <section
            id="about"
            className="py-15 px-5 md:px-10 lg:px-20 bg-bg-secondary text-text-primary"
        >
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                className="max-w-6xl mx-auto"
            >
                {/* Header */}
                <motion.div variants={item} className="mb-16">
                    <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.05] max-w-2xl">
                        Code with intention.{" "}
                        <span className="text-text-secondary">Scale with precision.</span>
                    </h2>
                </motion.div>

                {/* Content grid */}
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Left: main copy */}
                    <motion.div variants={item} className="space-y-6 text-justify text-text-secondary text-lg leading-relaxed">
                        <p>
                            A specialized frontend engineer focused on bridging the gap between design and engineering. Building robust digital products that looks stunning and perform flawlessly giving businesses and users optimal experience.
                        </p>
                        <p>
                            My work centers around writing clean, accessible code and creating modern architectures that scale. Whether it&apos;s a dynamic SaaS dashboard or an interactive marketing site, I bring ideas to life on the web.
                        </p>
                        <p>
                            Collaborating with businesses and startups to deliver pixel-perfect implementations, seamless user experiences, and maintainable codebases.
                        </p>
                    </motion.div>

                    {/* Right: pillar cards */}
                    <motion.div variants={item} className="grid gap-6">
                        {specializations.map((spec, i) => (
                            <div
                                key={i}
                                className="border border-border-default bg-code-bg rounded-2xl p-6 hover:border-accent transition-colors"
                            >
                                <p className="font-black text-xl mb-1">{spec.label}</p>
                                <p className="text-text-muted text-sm leading-relaxed">{spec.desc}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}
