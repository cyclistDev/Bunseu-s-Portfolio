import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { RouteLine } from "@/components/ui/RouteLine";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <RouteLine />
        <Projects />
        <RouteLine />
        <Skills />
        <RouteLine />
        <About />
        <RouteLine />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
