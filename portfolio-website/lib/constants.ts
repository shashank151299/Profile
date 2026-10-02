export const SITE_URL = 'https://shashankpatel.dev';

export const COLORS = {
  background: '#0A0D12',
  card: '#121721',
  cardHover: '#1A2130',
  accentPrimary: '#00F0FF',
  accentSecondary: '#10B981',
  accentPurple: '#8B5CF6',
  textPrimary: '#F3F4F6',
  textMuted: '#9CA3AF',
  textCode: '#6B7280',
  error: '#EF4444',
  success: '#10B981',
  warning: '#F59E0B',
} as const;

export const TERMINAL_COMMANDS = {
  help: 'help',
  skills: 'cat skills.json',
  projects: 'cat projects.json',
  contact: 'contact',
  clear: 'clear',
  about: 'cat about.md',
  resume: 'download --resume',
} as const;

export const SOCIAL_LINKS = {
  linkedin: 'https://linkedin.com/in/shashankpatel',
  github: 'https://github.com/shashankpatel',
  twitter: 'https://twitter.com/shashankpatel',
  email: 'shashank@example.com',
} as const;
