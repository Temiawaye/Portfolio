"use client"
import { ArrowDown } from "lucide-react"
import { easeOut, motion } from "motion/react"

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

export default function HeroSection() {
    return (
        <motion.div
            id="home"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            // initial={{opacity: 0, y: 40 }} 
            // animate={{opacity: 1, y: 0 }} 
            // transition={{duration: 1, ease: "easeOut"}}
            className="flex flex-col justify-center items-center text-center h-dvh px-5 relative overflow-hidden bg-bg-primary text-text-primary"
        >
            <motion.div
                variants={itema}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.1 }}
                className=" mb-6 md:mb-8"
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
            </motion.div>

            <motion.h1
                variants={itema} 
                className="text-5xl md:text-7xl lg:text-8xl font-bold mb-5 leading-[0.95]"
            >
                AWAYE <br className="md:hidden" /> TEMILOLUWA
            </motion.h1>
            <motion.p 
                variants={item} 
                className="text-center text-lg md:text-2xl text-text-secondary max-w-2xl mx-auto leading-relaxed mb-6 md:mb-7"
            >
                A Frontend Engineer & UI Developer
            </motion.p>
            <motion.p 
                variants={item} 
                className="text-center text-md md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed mb-7"
            >
                Bringing ideas to life through performant code and thoughtful design. Specializing in frontend architecture, full-stack applications, and interactive user interfaces.
            </motion.p>

            <motion.div 
                variants={itemb} 
                className="flex gap-4 justify-center"
            >
                <button
                    onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                    className="bg-button text-button-text px-8 py-3 rounded-2xl font-medium hover:bg-button-hover active:bg-button-active transition-colors cursor-pointer"
                >
                    View projects
                </button>
                <button
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="border-2 border-border-control bg-transparent text-text-primary px-8 py-3 rounded-2xl hover:bg-bg-secondary hover:border-accent-hover active:border-accent-active transition-colors cursor-pointer"
                >
                    Contact me
                </button>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                    delay: 1.5,
                    type: "spring",
                    stiffness: 180,
                    damping: 14,
                }}
                className="absolute bottom-10"
            >
                <motion.div
                    animate={{
                        y: [0, -12, 0],
                        scale: [1, 1.08, 1],
                    }}
                    transition={{
                        delay: 2,
                        duration: 1.15,
                        ease: "easeInOut",
                        repeat: Infinity,
                    }}
                >
                    <ArrowDown className="text-accent w-7 h-7" />
                </motion.div>
            </motion.div>

        </motion.div>
    );
}

