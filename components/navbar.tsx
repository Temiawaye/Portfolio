"use client";

import { useState, useEffect } from "react";
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from "motion/react";

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
    <><motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`flex max-w-6xl mx-auto rounded rounded-full mt-3 justify-between items-center lg:px-20 lg:py-5 p-5 fixed top-0 left-0 right-0 z-50 bg-white/60 backdrop-blur-sm  border-gray-300 
          ${scrolled ? "bg-background backdrop-blur-md border-b border-gray-100 py-2" : "bg-transparent py-6"} `
      }
    >
      {/* Logo */}
      <button
        onClick={() => scrollToSection('home')}
        className="font-black text-lg tracking-tighter text-neutral-900 hover:opacity-70 transition-opacity cursor-pointer"
      >
        TEMI<span className="text-neutral-400">.</span>
      </button>

      <div className="hidden lg:flex gap-8 items-center font-medium text-md tracking-wide">
        {['Home', 'About', 'Projects'].map((item) => (
          <button

            onClick={() => scrollToSection(item.toLowerCase())}
            className="text-gray-600 hover:text-black transition-colors relative group"
          >
            {item}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all group-hover:w-full"></span>
          </button>
        ))}
        <button
          onClick={() => scrollToSection('contact')}
          className="bg-black text-white px-5 py-2 rounded-full text-sm hover:bg-gray-800 transition-all hover:scale-105"
        >
          Get in touch
        </button>
      </div>

      <button className="lg:hidden z-50" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

    </motion.div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.4 }}
            className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8"
          >
            {['Home', 'About', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-3xl font-bold hover:text-gray-500 transition-colors"
              >
                {item}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

