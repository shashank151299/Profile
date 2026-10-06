import Hero from '@/components/Hero';
import ImpactHighlights from '@/components/ImpactHighlights';
import About from '@/components/About';
import SkillsGrid from '@/components/SkillsGrid';
import ExperienceTree from '@/components/ExperienceTree';
import ProjectCard from '@/components/ProjectCard';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import EducationTraining from '@/components/EducationTraining';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <ImpactHighlights />
      <About />
      <ExperienceTree />
      <ProjectCard />
      <SkillsGrid />
      <EducationTraining />
      <Contact />
      <Footer />
    </div>
  );
}
