"use client"

import { Linkedin, Twitter, Instagram } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"

const socials = [
    { icon: Linkedin, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: FaWhatsapp, href: "#" },
]

export default function Footer() {
    return (
        <footer className="w-full bg-bg-secondary text-text-secondary border-t border-border-default py-8 px-5 lg:px-20">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between items-center gap-4">
                <p className="font-black text-text-primary text-lg tracking-tighter">TEMI<span className="text-accent">.</span></p>
                <p className="text-sm text-text-muted">© 2025 Awaye Temiloluwa. All rights reserved.</p>
                <div className="flex gap-4">
                    {socials.map(({ icon: Icon, href }, i) => (
                        <a
                            key={i}
                            href={href}
                            aria-label={`Social link ${i + 1}`}
                            className="no-underline text-text-muted hover:text-link-hover active:text-link-active transition-colors"
                        >
                            <Icon size={18} />
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    )
}
