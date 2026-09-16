"use client"

import EnvelopeIcon from "@iconify-react/bi/envelope"
import GithubIcon from "@iconify-react/bi/github"
import LinkedinIcon from "@iconify-react/bi/linkedin"
import TwitterXIcon from "@iconify-react/bi/twitter-x"
import WhatsappIcon from "@iconify-react/bi/whatsapp"
import { easeOut, motion, useReducedMotion } from "motion/react";

const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
}

const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.38, ease: easeOut } }
}

const socialLinks = [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/temiloluwa-awaye/", icon: LinkedinIcon },
    { label: "X", href: "", icon: TwitterXIcon },
    { label: "GitHub", href: "https://github.com/Temiawaye", icon: GithubIcon },
    { label: "WhatsApp", href: "https://wa.me/2349161417695", icon: WhatsappIcon },
]

export default function Contact() {
    const prefersReducedMotion = useReducedMotion()

    return (
        <motion.section
            id="contact"
            variants={container}
            initial={prefersReducedMotion ? false : "hidden"}
            whileInView={prefersReducedMotion ? undefined : "visible"}
            viewport={{ once: true, amount: 0.2 }}
            className="py-15 px-5 md:px-10 lg:px-20 bg-bg-primary text-text-primary"
        >
            <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
                {/* Left Side: Info */}
                <motion.div variants={item} className="space-y-8">
                    <div>
                        <h2 className="mb-5 flex flex-wrap text-base font-semibold tracking-tight" aria-label="Contact me">
                            <span className="mr-2 text-electric-lavender" aria-hidden="true">{">"}</span>
                            <span className="text-text-primary">contact me</span>
                        </h2>
                        <h3 className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl">LET&apos;S WORK <br /> TOGETHER</h3>
                    </div>
                    <p className="text-lg text-text-secondary max-w-md">
                        Have a project in mind? I&apos;m always looking for new challenges and collaborations.
                    </p>

                    <div className="space-y-4 pt-4">
                        <a href="mailto:awayetemiloluwa@gmail.com" className="flex min-w-0 items-center gap-3 break-all text-base font-medium text-link underline transition-colors hover:text-link-hover active:text-link-active sm:text-lg">
                            <EnvelopeIcon width="24" height="24" aria-hidden="true" /> awayetemiloluwa@gmail.com
                        </a>
                        <div className="flex gap-4 pt-4">
                            {socialLinks.map(({ label, href, icon: Icon }) => (
                                <a
                                    key={label}
                                    href={href || undefined}
                                    target={href ? "_blank" : undefined}
                                    rel={href ? "noopener noreferrer" : undefined}
                                    aria-label={href ? `Visit my ${label} profile` : `${label} link not configured`}
                                    aria-disabled={!href}
                                    className={`rounded-full border border-border-default bg-bg-secondary p-3 no-underline transition-colors ${
                                        href
                                            ? "text-text-primary hover:border-accent hover:text-link-hover active:text-link-active"
                                            : "cursor-default text-text-muted"
                                    }`}
                                >
                                    <Icon width="20" height="20" aria-hidden="true" />
                                </a>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Right Side: Minimal Form */}
                <motion.div variants={item} className="bg-bg-secondary p-8 md:p-12 rounded-3xl shadow-xl shadow-accent/10">
                    <form className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="contact-name" className="text-sm font-medium uppercase tracking-wider text-text-muted">Name</label>
                                <input id="contact-name" type="text" className="w-full bg-transparent text-text-primary placeholder:text-text-muted border-b border-border-control py-3 transition-colors outline-none" placeholder="Your name" />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="contact-email" className="text-sm font-medium uppercase tracking-wider text-text-muted">Email</label>
                                <input id="contact-email" type="email" className="w-full bg-transparent text-text-primary placeholder:text-text-muted border-b border-border-control py-3 transition-colors outline-none" placeholder="temi@example.com" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="contact-message" className="text-sm font-medium uppercase tracking-wider text-text-muted">Message</label>
                            <textarea id="contact-message" rows={4} className="w-full bg-transparent text-text-primary placeholder:text-text-muted border-b border-border-control py-3 transition-colors outline-none" placeholder="Tell me about your project..."></textarea>
                        </div>
                        <button type="submit" className="w-full bg-button text-button-text py-4 rounded-xl font-medium text-lg hover:bg-button-hover active:bg-button-active transition-colors mt-4">
                            Send message
                        </button>
                    </form>
                </motion.div>
            </div>
        </motion.section>
    )
}

