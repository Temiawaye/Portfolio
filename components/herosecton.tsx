"use client"
import { ArrowDown } from "lucide-react"
import { easeIn, easeOut, motion } from "motion/react"

const container = {
    hidden: {opacity: 0},
    visible: {
        opacity: 1, 
        transition: {
            staggerChildren: 0.,
            delayChildren: 0.5, 
        }
    }
}

const item = {
    hidden: {opacity: 0, x: -30},
    visible: {opacity: 1, x:0, transition: { duration: 0.8, ease: easeOut } }
}

const itema = {
    hidden: {opacity: 0, y: -30},
    visible: {opacity: 1, y:0, transition: { duration: 0.8, ease: easeOut } }
}

const itemb = {
    hidden: {opacity: 0, y: 30},
    visible: {opacity: 1, y:0, transition: { duration: 0.8, ease: easeOut } }
}

export default function HeroSection() {
    return (
        <motion.div 
        id="home"
        variants = {container}
        initial = "hidden"
        animate = "visible"
        // initial={{opacity: 0, y: 40 }} 
        // animate={{opacity: 1, y: 0 }} 
        // transition={{duration: 1, ease: "easeOut"}}
        className="flex flex-col justify-center items-center text-center h-screen px-5 relative overflow-hidden"
        >
            <motion.p variants={itema} className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-6 leading-[0.9]">AWAYE <br className="md:hidden" /> TEMILOLUWA</motion.p>
            <motion.p variants={item} className="text-center text-lg md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb:6 md:mb-10  "> A Graphics Designer & Visual Artist</motion.p>
            <motion.p variants={item} className=" text-center text-md md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-10">Bringing ideas to life through compelling visuals and thoughtful design. Specializing in branding, illustration, print design, and visual identity systems.</motion.p>

            <motion.div variants={itemb} className="flex gap-4 justify-center">
                <button 
                    onClick={() => document.getElementById('pojects')?.scrollIntoView({ behavior: 'smooth' })}
                    className="bg-gray-900 text-white px-8 py-3 rounded-2xl hover:bg-gray-800 transition-colors cursor-pointer"
                >
                    View My Work
                </button>
                <button 
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-2xl hover:bg-gray-900 hover:text-white transition-colors cursor-pointer"
                >
                    Get In Touch
                </button>
            </motion.div>

            <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 2, duration: 1 }}
            className="absolute bottom-10 animate-bounce"
            >
                <ArrowDown className="text-gray-400" />
            </motion.div>

        </motion.div>
    );
}

