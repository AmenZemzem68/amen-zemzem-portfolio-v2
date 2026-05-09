import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { ContactForm } from "@/sections/ContactForm";
import { DesignsSection } from "@/sections/DesignsSection";
import { ExperienceSection } from "@/sections/ExperienceSection";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { Projects } from "@/sections/ProjectsSection";
import { TapeSection } from "@/sections/Tape";
import { TestimonialsSection } from "@/sections/Testimonials";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <ExperienceSection />
      <ProjectsSection />
      <DesignsSection />
      <TapeSection />
      <TestimonialsSection />
      <AboutSection />
      <ContactForm />
      <ContactSection />
      <Footer />
    </div>
  );
}
