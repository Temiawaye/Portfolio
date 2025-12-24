import About from "@/components/about";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import HeroSection from "@/components/herosecton";
import Projects from "@/components/project";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen">
      <HeroSection />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
