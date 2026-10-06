import { ArrowDown, Download, Github, Linkedin, MapPin } from 'lucide-react';
import { profile } from '@/data/profile';

const navigation = [
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

export default function Hero() {
  return (
    <section id="top" className="hero-section relative overflow-hidden">
      <header className="relative z-10 border-b border-[#1A2130]">
        <nav
          aria-label="Main navigation"
          className="container mx-auto flex flex-wrap items-center justify-between gap-4 px-4 py-5"
        >
          <a
            href="#top"
            className="text-lg font-semibold tracking-tight text-[#F3F4F6]"
          >
            Shashank Patel
          </a>
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-[#B0B8C3]">
            {navigation.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="transition-colors hover:text-[#34D399]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <div className="container relative z-10 mx-auto grid min-h-[590px] items-center gap-12 px-4 py-20 lg:grid-cols-[1.3fr_0.7fr] lg:py-28">
        <div className="max-w-3xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.16em] text-[#34D399]">
            Software Developer · Halifax, Nova Scotia
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-[#F3F4F6] sm:text-5xl lg:text-6xl">
            Reliable software for complex, high-stakes workflows.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#B0B8C3]">
            I build backend services, data pipelines, and observability tools.
            At RBC, my work helped reduce pipeline processing time by 40% and
            bring issue detection from hours to minutes.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md bg-[#10B981] px-5 py-3 font-semibold text-[#07110D] transition-colors hover:bg-[#34D399]"
            >
              Explore selected work
              <ArrowDown className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-md border border-[#344052] px-5 py-3 font-semibold text-[#F3F4F6] transition-colors hover:border-[#10B981] hover:text-[#34D399]"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Download résumé
            </a>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-[#9CA3AF]">
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-[#34D399]" aria-hidden="true" />
              {profile.location}
            </span>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-[#34D399]"
            >
              <Linkedin className="h-4 w-4" aria-hidden="true" />
              LinkedIn
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-[#34D399]"
            >
              <Github className="h-4 w-4" aria-hidden="true" />
              GitHub
            </a>
          </div>
        </div>

        <aside
          aria-label="Selected engineering impact"
          className="rounded-xl border border-[#263142] bg-[#111720] p-6 sm:p-8"
        >
          <p className="text-sm font-semibold uppercase tracking-wide text-[#9CA3AF]">
            Selected impact
          </p>
          <div className="mt-6 space-y-6">
            <div>
              <p className="text-3xl font-bold text-[#34D399]">40%</p>
              <p className="mt-1 text-sm text-[#D1D5DB]">
                less pipeline processing time
              </p>
            </div>
            <div className="border-t border-[#263142] pt-5">
              <p className="text-3xl font-bold text-[#34D399]">60%</p>
              <p className="mt-1 text-sm text-[#D1D5DB]">
                lower data latency
              </p>
            </div>
            <div className="border-t border-[#263142] pt-5">
              <p className="text-3xl font-bold text-[#34D399]">15+</p>
              <p className="mt-1 text-sm text-[#D1D5DB]">
                operational dashboards, reducing issue detection from hours to
                minutes
              </p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
