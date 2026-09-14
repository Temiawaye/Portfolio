"use client"

import { Mail, Linkedin, Twitter, Instagram } from "lucide-react"
import { easeOut, motion } from "motion/react";
import { FaWhatsappSquare } from "react-icons/fa";

const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
}

const item = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, easeOut } }
}

export default function Contact() {
    return (
        <motion.section
            id="contact"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="py-24 px-5 md:px-10 lg:px-20 bg-bg-primary text-text-primary"
        >
            <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
                {/* Left Side: Info */}
                <motion.div variants={item} className="space-y-8">
                    <h2 className="text-4xl md:text-5xl font-black tracking-tight">LET&apos;S WORK <br /> TOGETHER</h2>
                    <p className="text-xl text-text-secondary max-w-md">
                        Have a project in mind? I&apos;m always looking for new challenges and collaborations.
                    </p>

                    <div className="space-y-4 pt-4">
                        <a href="mailto:awayetemiloluwa@gmail.com" className="flex items-center gap-4 text-xl font-medium text-link underline hover:text-link-hover active:text-link-active transition-colors">
                            <Mail /> awayetemiloluwa@gmail.com
                        </a>
                        <div className="flex gap-4 pt-4">
                            {[Linkedin, Twitter, Instagram, FaWhatsappSquare].map((Icon, i) => (
                                <a aria-label={`Social link ${i + 1}`} key={i} href="#" className="no-underline p-3 bg-bg-secondary text-text-primary border border-border-default rounded-full hover:text-link-hover hover:border-accent active:text-link-active transition-colors">
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Right Side: Minimal Form */}
                <motion.div variants={item} className="bg-bg-secondary border border-border-default p-8 md:p-12 rounded-3xl">
                    <form className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="contact-name" className="text-sm font-semibold uppercase tracking-wider text-text-muted">Name</label>
                                <input id="contact-name" type="text" className="w-full bg-transparent text-text-primary placeholder:text-text-muted border-b border-border-control py-3 focus:border-accent transition-colors" placeholder="Your name" />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="contact-email" className="text-sm font-semibold uppercase tracking-wider text-text-muted">Email</label>
                                <input id="contact-email" type="email" className="w-full bg-transparent text-text-primary placeholder:text-text-muted border-b border-border-control py-3 focus:border-accent transition-colors" placeholder="temi@example.com" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="contact-message" className="text-sm font-semibold uppercase tracking-wider text-text-muted">Message</label>
                            <textarea id="contact-message" rows={4} className="w-full bg-transparent text-text-primary placeholder:text-text-muted border-b border-border-control py-3 focus:border-accent transition-colors" placeholder="Tell me about your project..."></textarea>
                        </div>
                        <button type="submit" className="w-full bg-button text-button-text py-4 rounded-xl font-bold text-lg hover:bg-button-hover active:bg-button-active transition-colors mt-4">
                            Send Message
                        </button>
                    </form>
                </motion.div>
            </div>
        </motion.section>
    )
}

