import { Github, Linkedin, Mail } from 'lucide-react';
import { SOCIAL_LINKS } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="border-t border-[#1A2130] bg-[#0A0D12] py-8">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 sm:flex-row">
        <p className="text-sm text-[#9CA3AF]">
          © {new Date().getFullYear()} Shashank Patel
        </p>
        <nav aria-label="Social links" className="flex items-center gap-5">
          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-[#B0B8C3] transition-colors hover:text-[#34D399]"
          >
            <Github className="h-4 w-4" aria-hidden="true" />
            GitHub
          </a>
          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-[#B0B8C3] transition-colors hover:text-[#34D399]"
          >
            <Linkedin className="h-4 w-4" aria-hidden="true" />
            LinkedIn
          </a>
          <a
            href={`mailto:${SOCIAL_LINKS.email}`}
            className="inline-flex items-center gap-2 text-sm text-[#B0B8C3] transition-colors hover:text-[#34D399]"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            Email
          </a>
        </nav>
      </div>
    </footer>
  );
}
