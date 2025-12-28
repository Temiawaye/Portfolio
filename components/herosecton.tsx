"use client"
import { easeIn, easeOut, motion } from "motion/react"

const container = {
    hidden: {opacity: 0},
    visible: {
        opacity: 1, 
        transition: {
            staggerChildren: 0.3,
            delayChildren: 0.9, 
        }
    }
}

const item = {
    hidden: {opacity: 0, x: -30},
    visible: {opacity: 1, x:0, transition: { duration: 0.6, ease: easeOut } }
}

const itema = {
    hidden: {opacity: 0, y: -30},
    visible: {opacity: 1, y:0, transition: { duration: 0.6, ease: easeOut } }
}

const itemb = {
    hidden: {opacity: 0, y: 30},
    visible: {opacity: 1, y:0, transition: { duration: 0.6, ease: easeOut } }
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
        className="flex flex-col justify-center items-center text-center h-screen px-5"
        >
            <motion.p variants={itema} className="text-5xl font-bold mb-4">AWAYE TEMILOLUWA</motion.p>
            <motion.p variants={item} className="text-xl mb-6 text-gray-600  "> A Graphics Designer & Visual Artist</motion.p>
            <motion.p variants={item} className=" text-center mb-10 text- text-gray-600 ">I bring ideas to life through compelling visuals and thoughtful design. Specializing in <br/> branding, illustration, print design, and visual identity systems.</motion.p>

            <motion.div variants={itemb} className="flex gap-4 justify-center">
                <button 
                    onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
                    className="bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer"
                >
                    View My Work
                </button>
                <button 
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-900 hover:text-white transition-colors cursor-pointer"
                >
                    Get In Touch
                </button>
            </motion.div>
        </motion.div>
    );
}