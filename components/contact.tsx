"use client"

import { Mail, Linkedin, Twitter, Instagram } from "lucide-react"
import { easeOut, motion } from "motion/react";
import { FaWhatsappSquare } from "react-icons/fa";

const container = {
  hidden : {opacity: 0},
  visible: {opacity: 1, transition: {staggerChildren: 0.2 }}
}

const item = {
  hidden: {opacity: 0, y: 30},
  visible: {opacity: 1, y: 0, transition: { duration: 0.6, easeOut } }
}

export default function Contact() {
    return(
        <motion.section
            id="contact"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="py-24 px-5 md:px-10 lg:px-20 max-w-7xl mx-auto"
        >
            <div className="grid lg:grid-cols-2 gap-16">
                {/* Left Side: Info */}
                <motion.div variants={item} className="space-y-8">
                    <h2 className="text-4xl md:text-5xl font-black tracking-tight">LET'S WORK <br/> TOGETHER</h2>
                    <p className="text-xl text-gray-600 max-w-md">
                        Have a project in mind? I'm always looking for new challenges and collaborations.
                    </p>
                    
                    <div className="space-y-4 pt-4">
                        <a href="mailto:hello@alexrivera.design" className="flex items-center gap-4 text-xl font-medium hover:text-gray-600 transition-colors">
                            <Mail /> hello@temiawaye.design
                        </a>
                        <div className="flex gap-4 pt-4">
                            {[Linkedin, Twitter, Instagram, FaWhatsappSquare ].map((Icon, i) => (
                                <a key={i} href="#" className="p-3 bg-gray-100 rounded-full hover:bg-black hover:text-white transition-all">
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Right Side: Minimal Form */}
                <motion.div variants={item} className="bg-gray-50 p-8 md:p-12 rounded-3xl">
                    <form className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-semibold uppercase tracking-wider text-gray-500">Name</label>
                                <input type="text" className="w-full bg-transparent border-b border-gray-300 py-3 focus:outline-none focus:border-black transition-colors" placeholder="Your name" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold uppercase tracking-wider text-gray-500">Email</label>
                                <input type="email" className="w-full bg-transparent border-b border-gray-300 py-3 focus:outline-none focus:border-black transition-colors" placeholder="temi@example.com" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-semibold uppercase tracking-wider text-gray-500">Message</label>
                            <textarea rows={4} className="w-full bg-transparent border-b border-gray-300 py-3 focus:outline-none focus:border-black transition-colors" placeholder="Tell me about your project..."></textarea>
                        </div>
                        <button type="submit" className="w-full bg-black text-white py-4 rounded-xl font-bold text-lg hover:bg-gray-800 transition-all mt-4">
                            Send Message
                        </button>
                    </form>
                </motion.div>
            </div>
        </motion.section>
    )
}

