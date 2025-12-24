"use client";

import { useState, useEffect } from "react";
import { Menu } from 'lucide-react';
import HeroSection from "./herosecton";

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
        element.scrollIntoView({ behavior: 'smooth' });
        setMenuOpen(false);
      }
    };

    return (
        <div className="flex justify-between items-center lg:px-20 lg:py-8 p-5 fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-sm border-b border-gray-300 ">
            <h1>LOGO</h1>
            <div className="hidden lg:flex lg:gap-10 gap-5">
                <a href="/">Home</a>
                <a href="" ><link href="@/components/about" />About Us</a>
                <a href="">Projects</a>
                <a href="/">Contact</a>
            </div>
            <Menu className="bx bx-menu lg:hidden block text-5xl cursor-pointer" onClick={() => setMenuOpen(!menuOpen)} />
            <div className={`absolute min-h-dvh lg:hidden top-16 right-0 w-3/5 rounded-b-md bg-white/70 border-l border-gray-300 flex flex-col items-center gap-6 font-semibold px-3 text-lg transform transition-transform ${menuOpen ? "opacity-100" : "opacity-0"}`} style={{transition: "transform 0.3s ease, opacity 0.3s ease"}}>
              <a href="/"><li className="list-none w-full text-center p-4 transition-all cursor-pointer border-b border-gray-500">Home</li></a>
              <a href="/"><li className="list-none w-full text-center p-4 transition-all cursor-pointer border-b  border-gray-500">About</li></a>
              <a href="/"><li className="list-none w-full text-center p-4 transition-all cursor-pointer border-b  border-gray-500">Work</li></a>
              <a href="/"><li className="list-none w-full text-center p-4 transition-all cursor-pointer border-b  border-gray-500">Contact Me</li></a>
            </div>
        </div>
    )
}