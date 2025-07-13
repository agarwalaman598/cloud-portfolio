import Navigation from "@/components/portfolio/navigation";
import HeroSection from "@/components/portfolio/hero-section";
import AboutSection from "@/components/portfolio/about-section";
import SkillsSection from "@/components/portfolio/skills-section";
import ProjectsSection from "@/components/portfolio/projects-section";
import ContactSection from "@/components/portfolio/contact-section";
import Footer from "@/components/portfolio/footer";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
