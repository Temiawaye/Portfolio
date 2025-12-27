"use client";

import { useState, useEffect } from "react";
import { Menu } from 'lucide-react';
import HeroSection from "./herosecton";
import { motion } from "motion/react";

export default function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);
  
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
        <motion.div
        initial = {{opacity: 0, y: -30}} 
        animate = {{opacity: 1, y: 0 }}
        transition={{duration: 0.3, ease: "easeIn"}}
        className="flex justify-between items-center lg:px-20 lg:py-8 p-5 fixed top-0 left-0 right-0 z-50 bg-white/60 backdrop-blur-sm  border-gray-300 ">
            <h1>LOGO</h1>
            <div className="hidden lg:flex lg:gap-10 gap-5">
                <button onClick={() => scrollToSection('home')} className="hover:text-blue-500 cursor-pointer">Home</button>
                <button onClick={() => scrollToSection('about')} className="hover:text-blue-500 cursor-pointer">About Us</button>
                <button onClick={() => scrollToSection('projects')} className="hover:text-blue-500 cursor-pointer">Projects</button>
                <button onClick={() => scrollToSection('contact')} className="hover:text-blue-500 cursor-pointer">Contact</button>
            </div>
            <Menu className="bx bx-menu lg:hidden block text-5xl cursor-pointer" onClick={() => setMenuOpen(!menuOpen)} />
            <motion.div 
            className={`absolute min-h-dvh lg:hidden top-16 right-0 w-3/5 bg-white/80  flex flex-col items-center gap-6 font-semibold px-3 text-lg transform transition-transform `} 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: menuOpen ? 1 : 0, x: 0 }}
            transition={{duration: 0.3, ease: "easeIn"}}
            // style={{ transition: "transform 0.3s ease, opacity 0.3s ease" }}
            
            >
              <button onClick={() => scrollToSection('home')} className="w-full text-center p-4 border-b border-gray-500 cursor-pointer">Home</button>
              <button onClick={() => scrollToSection('about')} className="w-full text-center p-4 border-b border-gray-500 cursor-pointer">About</button>
              <button onClick={() => scrollToSection('projects')} className="w-full text-center p-4 border-b border-gray-500 cursor-pointer">Work</button>
              <button onClick={() => scrollToSection('contact')} className="w-full text-center p-4 border-b border-gray-500 cursor-pointer">Contact Me</button>
            </motion.div>
        </motion.div>
    )
}