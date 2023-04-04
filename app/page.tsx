import AboutSection from "./components/AboutSection";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";

export default function Home() {
  return (
    <main className="text-1xl">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
    </main>
  )
}
