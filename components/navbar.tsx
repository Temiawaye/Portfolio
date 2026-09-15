"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from "motion/react";

const navigationItems = [
  { label: "About", text: "about", prefix: "~/", id: "about" },
  { label: "Projects", text: "projects", prefix: "~/", id: "projects" },
  { label: "Skills", text: "skills", prefix: "~/", id: "skills" },
  { label: "Contact", text: "contact me", prefix: ">", id: "contact" },
]

function NavigationLabel({ item }: { item: (typeof navigationItems)[number] }) {
  return (
    <>
      <span className={item.prefix === ">" ? "mr-2 text-electric-lavender" : "text-electric-lavender"} aria-hidden="true">
        {item.prefix}
      </span>
      <span>{item.text}</span>
    </>
  );
}

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Prevent scrolling when menu is open
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Offset calculation for fixed header (approx 80px)
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });

      setMenuOpen(false);
    }
  };

  return (
    <><motion.nav
      aria-label="Primary navigation"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`flex max-w-6xl mx-auto rounded-full mt-3 justify-between items-center lg:px-20 lg:py-5 p-5 fixed top-0 left-0 right-0 z-50 transition-colors duration-300
          ${scrolled ? "bg-bg-secondary/90 backdrop-blur-md py-2" : "bg-bg-primary/60 backdrop-blur-sm  py-6"} `
      }
    >
      {/* Logo */}
      <button
        type="button"
        aria-label="Go to home"
        onClick={() => scrollToSection('home')}
        className="flex shrink-0 cursor-pointer items-center rounded-lg transition-opacity hover:opacity-85 active:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-electric-lavender"
      >
        <Image
          src="/logo.svg"
          alt=""
          width={100}
          height={36}
          priority
          className="h-8 w-auto sm:h-9"
        />
      </button>

      <div className="hidden lg:flex gap-8 items-center font-medium text-xs tracking-wide">
        {navigationItems.map((item) => (
          <button
            key={item.id}
            aria-label={item.label}
            onClick={() => scrollToSection(item.id)}
            className="relative text-text-primary transition-colors group hover:text-link-hover active:text-link-active"
          >
            <NavigationLabel item={item} />
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full"></span>
          </button>
        ))}
      </div>

      <button aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"} className="lg:hidden z-50 text-text-primary" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

    </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.4 }}
            className="fixed inset-0 bg-bg-primary/70 backdrop-blur-md z-40 flex flex-col items-center justify-center gap-8"
          >
            {navigationItems.map((item) => (
              <button
                key={item.id}
                aria-label={item.label}
                onClick={() => scrollToSection(item.id)}
                className="text-3xl font-medium text-text-primary hover:text-link-hover active:text-link-active transition-colors"
              >
                <NavigationLabel item={item} />
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

