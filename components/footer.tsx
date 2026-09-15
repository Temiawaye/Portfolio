"use client"

import GithubIcon from "@iconify-react/bi/github"
import LinkedinIcon from "@iconify-react/bi/linkedin"
import TwitterXIcon from '@iconify-react/bi/twitter-x';
import WhatsappIcon from "@iconify-react/bi/whatsapp"

const socials = [
    { icon: LinkedinIcon, href: "#" },
    { icon: TwitterXIcon, href: "#" },
    { icon: GithubIcon, href: "#" },
    { icon: WhatsappIcon, href: "#" },
]

export default function Footer() {
    return (
        <footer className="w-full bg-bg-secondary text-text-secondary border-t border-border-default py-8 px-5 lg:px-20">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between items-center gap-4">
                <p className="font-bold text-text-primary text-lg tracking-tighter">TEMI<span className="text-accent">.</span></p>
                <p className="text-sm text-text-muted">© 2025 Awaye Temiloluwa. All rights reserved.</p>
                <div className="flex gap-4">
                    {socials.map(({ icon: Icon, href }, i) => (
                        <a
                            key={i}
                            href={href}
                            aria-label={`Social link ${i + 1}`}
                            className="no-underline text-text-muted hover:text-link-hover active:text-link-active transition-colors"
                        >
                            <Icon width="18" height="18" aria-hidden="true" />
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    )
}
