import { projects } from '@/data/projects';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Github, ExternalLink } from 'lucide-react';

export default function ProjectCard() {
  const featuredProjects = projects.filter((project) => project.featured);
  const additionalProjects = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="py-20 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="mb-8 max-w-2xl">
          <h2 className="text-3xl font-bold text-[#F3F4F6] md:text-4xl">
            Selected projects
          </h2>
          <p className="mt-3 text-[#9CA3AF]">
            A few examples of software I have designed, built, and deployed.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <Card
              key={project.id}
              className="flex flex-col border-[#1A2130] bg-[#121721] transition-colors hover:border-[#10B981]"
            >
              <CardHeader>
                <CardTitle className="text-xl text-[#F3F4F6]">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-[#10B981]">
                  {project.tagline}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col gap-4">
                <p className="text-sm leading-relaxed text-[#B0B8C3]">
                  {project.description}
                </p>
                <ul className="space-y-2 text-sm text-[#9CA3AF]">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2">
                      <span className="text-[#10B981]" aria-hidden="true">
                        ▹
                      </span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                <ul
                  className="flex flex-wrap gap-2"
                  aria-label={`${project.title} technologies`}
                >
                  {project.tech.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border border-[#263142] px-2.5 py-1 text-xs text-[#9CA3AF]"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
                {project.demoNote && (
                  <p className="text-xs text-[#9CA3AF]">{project.demoNote}</p>
                )}
                <div className="mt-auto flex flex-wrap gap-3 pt-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-md border border-[#334155] px-3 py-2 text-sm font-medium text-[#F3F4F6] transition-colors hover:border-[#10B981] hover:text-[#10B981]"
                    >
                      <Github className="h-4 w-4" aria-hidden="true" />
                      Source code
                    </a>
                  )}
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-md bg-[#10B981] px-3 py-2 text-sm font-medium text-[#07110D] transition-colors hover:bg-[#34D399]"
                    >
                      <ExternalLink className="h-4 w-4" aria-hidden="true" />
                      Live demo
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        {additionalProjects.length > 0 && (
          <div className="mt-10 border-t border-[#1A2130] pt-6">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-[#9CA3AF]">
              Also built
            </h3>
            <ul className="mt-3 flex flex-wrap gap-x-8 gap-y-3">
              {additionalProjects.map((project) => (
                <li key={project.id} className="text-sm text-[#B0B8C3]">
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-[#F3F4F6] hover:text-[#10B981]"
                    >
                      {project.title}
                    </a>
                  ) : (
                    <span className="font-medium text-[#F3F4F6]">
                      {project.title}
                    </span>
                  )}
                  <span> — {project.description}</span>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-2 inline-flex items-center gap-1 text-[#10B981] hover:underline"
                    >
                      <Github className="h-3.5 w-3.5" aria-hidden="true" />
                      GitHub repo
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
