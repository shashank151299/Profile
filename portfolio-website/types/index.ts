export interface Profile {
  name: string;
  title: string;
  bio: string;
  email: string;
  location: string;
  linkedin: string;
  github: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tagline: string;
  tech: string[];
  highlights: string[];
  github?: string;
  liveDemo?: string;
  image?: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate?: string;
  description: string[];
  type: 'full-time' | 'co-op' | 'contract';
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: string[];
}

export interface TerminalCommand {
  command: string;
  description: string;
  action?: () => void;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
