import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { SOCIAL_LINKS } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="border-t border-[#1A2130] bg-[#0A0D12] py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          {/* System Status */}
          <div className="flex items-center gap-2 text-sm text-[#9CA3AF]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#10B981] opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#10B981]"></span>
            </span>
            <span>System Operational</span>
          </div>

          {/* Social Links */}
          <nav aria-label="Social links" className="flex items-center gap-4">
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="text-[#9CA3AF] transition-colors hover:text-[#10B981] focus:text-[#10B981]"
            >
              <Github className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="text-[#9CA3AF] transition-colors hover:text-[#10B981] focus:text-[#10B981]"
            >
              <Linkedin className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href={SOCIAL_LINKS.twitter}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter Profile"
              className="text-[#9CA3AF] transition-colors hover:text-[#10B981] focus:text-[#10B981]"
            >
              <Twitter className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href={SOCIAL_LINKS.email}
              aria-label="Send Email"
              className="text-[#9CA3AF] transition-colors hover:text-[#10B981] focus:text-[#10B981]"
            >
              <Mail className="h-5 w-5" aria-hidden="true" />
            </a>
          </nav>

          {/* Copyright */}
          <p className="text-sm text-[#6B7280]">
            © {new Date().getFullYear()} Shashank Patel. Built with{' '}
            <span className="text-[#10B981]">Next.js</span>,{' '}
            <span className="text-[#00F0FF]">TypeScript</span>, and{' '}
            <span className="text-[#8B5CF6]">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
