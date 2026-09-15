"use client"

import EnvelopeIcon from "@iconify-react/bi/envelope"
import GithubIcon from "@iconify-react/bi/github"
import { motion, useReducedMotion } from "motion/react"

const footerLinks = [
    {
        label: "Email Awaye Temiloluwa",
        href: "mailto:awayetemiloluwa@gmail.com",
        icon: EnvelopeIcon,
        external: false,
    },
    {
        label: "Awaye Temiloluwa on GitHub",
        href: "https://github.com/Temiawaye",
        icon: GithubIcon,
        external: true,
    },
]

export default function Footer() {
    const prefersReducedMotion = useReducedMotion()

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" })
    }

    return (
        <motion.footer
            initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative w-full border-t border-border-default bg-bg-primary px-5 py-8 text-text-secondary lg:px-20"
        >
            <span className="absolute left-0 top-0 h-px w-24 bg-accent" aria-hidden="true" />

            <div className="mx-auto max-w-6xl">
                <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
                    <div className="flex flex-col items-center gap-2 md:items-start">
                        <button
                            type="button"
                            onClick={scrollToTop}
                            aria-label="Back to top"
                            className="cursor-pointer text-lg font-bold tracking-tighter text-text-primary transition-colors hover:text-link-hover active:text-link-active focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-electric-lavender"
                        >
                            TEMI<span className="text-accent">.</span>
                        </button>
                        <p className="flex items-center gap-2 text-xs text-text-muted">
                            <span className="size-2 rounded-full bg-accent" aria-hidden="true" />
                            Available for opportunities
                        </p>
                    </div>

                    <p className="text-center text-xs text-text-muted sm:text-sm">
                        Built with <span className="text-text-secondary">Next.js · TypeScript · Motion</span>
                    </p>

                    <div className="flex items-center gap-3">
                        {footerLinks.map(({ icon: Icon, href, label, external }) => (
                            <a
                                key={label}
                                href={href}
                                aria-label={label}
                                target={external ? "_blank" : undefined}
                                rel={external ? "noopener noreferrer" : undefined}
                                className="flex items-center justify-center text-text-secondary no-underline transition-[color,border-color,transform] hover:text-link-hover active:text-link-active focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-electric-lavender motion-safe:hover:-translate-y-0.5"
                            >
                                <Icon width="19" height="19" aria-hidden="true" />
                            </a>
                        ))}
                        <button
                            type="button"
                            onClick={scrollToTop}
                            className="ml-1 inline-flex min-h-10 items-center gap-2 rounded-xl border border-border-control px-3 text-xs font-medium text-text-primary transition-[color,border-color,transform] hover:border-accent-hover hover:text-link-hover active:border-accent-active active:text-link-active focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-electric-lavender motion-safe:hover:-translate-y-0.5"
                        >
                            <span aria-hidden="true">↑</span>
                            back to top
                        </button>
                    </div>
                </div>

                <div className="mt-6 border-t border-border-default pt-5 text-center md:text-left">
                    <p className="text-xs text-text-muted">© {new Date().getFullYear()} Awaye Temiloluwa. All rights reserved.</p>
                </div>
            </div>
        </motion.footer>
    )
}
