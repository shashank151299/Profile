import { projects } from '@/data/projects';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

export default function ProjectCard() {
  return (
    <section id="projects" className="py-20 scroll-mt-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-3xl font-bold text-[#F3F4F6] md:text-4xl">
          Featured Projects
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="border-[#1A2130] bg-[#121721] transition-all hover:border-[#10B981] hover:shadow-lg hover:shadow-[#10B981]/10"
            >
              <CardHeader>
                <CardTitle className="text-xl text-[#F3F4F6]">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-[#00F0FF]">
                  {project.tagline}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-[#9CA3AF]">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-[#1A2130] bg-[#0A0D12] px-2 py-1 text-xs text-[#9CA3AF]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <ul className="space-y-1 text-sm text-[#9CA3AF]">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#10B981]">▹</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
                <div className="flex gap-2 pt-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} on GitHub`}
                      className="flex-1"
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full"
                      >
                        <Github className="mr-2 h-4 w-4 flex-shrink-0" aria-hidden="true" />
                        <span>Code</span>
                      </Button>
                    </a>
                  )}
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View live demo of ${project.title}`}
                      className="flex-1"
                    >
                      <Button
                        variant="default"
                        size="sm"
                        className="w-full"
                      >
                        <ExternalLink className="mr-2 h-4 w-4 flex-shrink-0" aria-hidden="true" />
                        <span>Live Demo</span>
                      </Button>
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
