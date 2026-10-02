import Hero from '@/components/Hero';
import About from '@/components/About';
import SkillsGrid from '@/components/SkillsGrid';
import ExperienceTree from '@/components/ExperienceTree';
import ProjectCard from '@/components/ProjectCard';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import TerminalDrawer from '@/components/TerminalDrawer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <SkillsGrid />
      <ExperienceTree />
      <ProjectCard />
      <Contact />
      <Footer />
      <TerminalDrawer />
    </div>
  );
}
