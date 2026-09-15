"use client"
import FramerIcon from "@iconify-react/logos/framer"
import NextjsIcon from "@iconify-react/devicon/nextjs"
import ReactIcon from "@iconify-react/devicon/react"
import TypescriptIcon from "@iconify-react/devicon/typescript"
import { useRef } from "react"
import { easeOut, motion, useReducedMotion, useScroll, useTransform } from "motion/react"

const container = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.,
            delayChildren: 0.5,
        }
    }
}

const item = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: easeOut } }
}

const itema = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } }
}

const itemb = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } }
}

const developerIcons = [
    { icon: ReactIcon, label: "React", position: "-left-7 top-4 sm:-left-12" },
    { icon: NextjsIcon, label: "Next.js", position: "-right-7 top-7 sm:-right-12" },
    { icon: TypescriptIcon, label: "TypeScript", position: "-left-6 bottom-7 sm:-left-11" },
    { icon: FramerIcon, label: "Motion", position: "-right-6 bottom-5 sm:-right-11" },
]

export default function HeroSection() {
    const heroRef = useRef<HTMLElement>(null)
    const prefersReducedMotion = useReducedMotion()
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"],
    })
    const scrollLineScale = useTransform(scrollYProgress, [0, 1], [0, 1])

    return (
        <motion.section
            ref={heroRef}
            id="home"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            // initial={{opacity: 0, y: 40 }} 
            // animate={{opacity: 1, y: 0 }} 
            // transition={{duration: 1, ease: "easeOut"}}
            className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden bg-bg-primary px-5 py-28 text-center text-text-primary"
        >
            <div
                className="pointer-events-none absolute inset-0 opacity-50"
                style={{
                    backgroundImage: "linear-gradient(rgba(26, 16, 51, 0.42) 1px, transparent 1px), linear-gradient(90deg, rgba(26, 16, 51, 0.42) 1px, transparent 1px)",
                    backgroundSize: "42px 42px",
                    maskImage: "radial-gradient(circle at center, black 12%, transparent 72%)",
                }}
                aria-hidden="true"
            />

            <motion.div
                variants={itema}
                className="relative z-10 mb-7 md:mb-9"
            >
                <div
                    className="w-40 h-40 md:w-50 md:h-50 lg:w-60 lg:h-60 rounded-full border-4 border-border-default cursor-pointer overflow-hidden hover:scale-120 transition-all duration-300 ease-in-out shadow-xl shadow-accent/25"
                >
                    <img
                        src="/profile.png"
                        alt="Profile Picture"
                        className="w-full h-full object-cover"
                    />
                </div>

                {developerIcons.map(({ icon: Icon, label, position }, index) => (
                    <motion.div
                        key={label}
                        title={label}
                        aria-label={label}
                        animate={prefersReducedMotion ? undefined : {
                            y: [0, -6, 0],
                            rotate: [-2, 2, -2],
                        }}
                        transition={{
                            duration: 5.5 + index * 0.7,
                            delay: index * 0.45,
                            ease: "easeInOut",
                            repeat: Infinity,
                        }}
                        className={`absolute ${position} flex size-11 items-center justify-center rounded-xl border border-electric-lavender/25 bg-midnight-purple/85 shadow-[0_0_18px_rgba(179,136,255,0.18)] backdrop-blur-sm`}
                    >
                        <Icon width="24" height="24" aria-hidden="true" />
                    </motion.div>
                ))}

                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-sm font-semibold text-electric-lavender" aria-hidden="true">
                    {"{ }"}
                </span>
            </motion.div>

            <motion.h1
                variants={itema} 
                className="relative z-10 mb-5 text-5xl font-bold leading-[0.95] md:text-7xl lg:text-8xl"
            >
                AWAYE <br className="md:hidden" /> TEMILOLUWA
            </motion.h1>

            <motion.p
                variants={item}
                aria-label="Frontend Engineer and UI Developer"
                className="relative z-10 mb-5 flex w-full max-w-2xl flex-wrap items-center justify-center text-sm font-medium sm:text-base md:text-lg"
            >
                <span className="text-electric-lavender" aria-hidden="true">const&nbsp;</span>
                <span className="text-text-primary" aria-hidden="true">role</span>
                <span className="mx-2 text-electric-lavender" aria-hidden="true">=</span>
                <span className="text-text-muted" aria-hidden="true">&quot;</span>
                <span className="text-text-secondary">Frontend Engineer</span>
                <span className="mx-2 text-electric-lavender" aria-hidden="true">·</span>
                <span className="text-text-secondary">UI Developer</span>
                <span className="text-text-muted" aria-hidden="true">&quot;;</span>
            </motion.p>

            <motion.p 
                variants={item} 
                className="relative z-10 mx-auto mb-5 w-full max-w-2xl text-center text-base leading-relaxed text-text-secondary md:text-lg"
            >
                Bringing ideas to life through performant code and thoughtful design. Specializing in frontend architecture, full-stack applications, and interactive user interfaces.
            </motion.p>

            <motion.div
                variants={item}
                className="relative z-10 mb-7 flex w-full max-w-2xl flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm font-medium text-text-muted"
                aria-label="Core technologies: React, Next.js, TypeScript, and Motion"
            >
                {['React', 'Next.js', 'TypeScript', 'Motion'].map((technology, index) => (
                    <span key={technology} className="flex items-center gap-2" aria-hidden="true">
                        {index > 0 && <span className="text-electric-lavender">·</span>}
                        <span>{technology}</span>
                    </span>
                ))}
            </motion.div>

            <motion.div 
                variants={itemb} 
                className="relative z-10 flex w-full flex-wrap justify-center gap-4"
            >
                <button
                    onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                    className="rounded-2xl bg-button px-6 py-3 font-medium text-button-text transition-colors hover:bg-button-hover active:bg-button-active sm:px-8"
                >
                    View projects
                </button>
                <button
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="rounded-2xl border-2 border-border-control bg-transparent px-6 py-3 text-text-primary transition-colors hover:border-accent-hover hover:bg-bg-secondary active:border-accent-active sm:px-8"
                >
                    Contact me
                </button>
            </motion.div>

            <div className="absolute bottom-6 right-6 z-10 flex flex-col items-center gap-2 md:right-10" aria-hidden="true">
                <span className="text-[0.625rem] font-medium uppercase tracking-[0.2em] text-text-muted [writing-mode:vertical-rl]">scroll</span>
                <span className="relative h-14 w-px overflow-hidden bg-border-default">
                    <motion.span
                        className="absolute inset-0 origin-top bg-electric-lavender"
                        style={{ scaleY: scrollLineScale }}
                    />
                </span>
            </div>

        </motion.section>
    );
}

