import About from "@/components/about";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import HeroSection from "@/components/herosecton";
import Projects from "@/components/project";
import { ProjectCard } from "@/components/projectCard";
import { Work } from "@/components/work";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen bg-gray-50 text-gray-800">
      {/* Add IDs to these wrappers */}
      <section id="home">
        <HeroSection />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="projects">
        <Work />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </div>
  );
}

