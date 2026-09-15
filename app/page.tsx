import About from "@/components/about";
import Contact from "@/components/contact";
import DevelopmentTools from "@/components/developmentTools";
import Footer from "@/components/footer";
import HeroSection from "@/components/herosecton";
import Experience from "@/components/experince";
import { Work } from "@/components/work";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-primary text-text-primary">
      <HeroSection />
      <About />
      <Experience />
      <Work />
      <DevelopmentTools />
      <Contact />
      <Footer />
    </main>
  );
}
