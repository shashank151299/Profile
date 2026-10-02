# Shashank Patel - Portfolio Website

A modern, high-performance portfolio website built with Next.js 14+, TypeScript, and Tailwind CSS.

## Features

- **Interactive Hero Section**: Canvas-based particle animation with respect for reduced motion preferences
- **Terminal CLI**: Keyboard-accessible command-line interface (press ` or Ctrl+K)
- **Tabbed Skills Display**: Organized technical skills with accessible tab navigation
- **Experience Timeline**: Semantic timeline of work experience
- **Project Showcase**: Interactive project cards with links to GitHub and live demos
- **Contact Form**: Accessible form with validation
- **Responsive Design**: Fully responsive across all devices
- **Accessibility**: WCAG 2.2 AA compliant with keyboard navigation, ARIA labels, and screen reader support
- **Performance**: Optimized for Core Web Vitals with image optimization and lazy loading
- **Security**: Content Security Policy, security headers, and input validation
- **SEO**: Comprehensive metadata, Open Graph tags, Twitter Cards, and JSON-LD structured data

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom Shadcn-style components
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter (sans-serif), JetBrains Mono (monospace)

## Getting Started

### Prerequisites

- Node.js 18.17.0+ (The project is configured for Node 18.14.1 but Next.js 13.4.19 recommends 18.17.0+)

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Project Structure

```
portfolio-website/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles
│   ├── robots.ts          # Robots.txt configuration
│   └── sitemap.ts         # Sitemap configuration
├── components/            # React components
│   ├── ui/               # UI primitives (Button, Card, etc.)
│   ├── Hero.tsx          # Hero section with canvas animation
│   ├── About.tsx         # About section
│   ├── TerminalDrawer.tsx # Interactive terminal
│   ├── SkillsGrid.tsx    # Skills display
│   ├── ExperienceTree.tsx # Experience timeline
│   ├── ProjectCard.tsx   # Project cards
│   ├── Contact.tsx       # Contact form
│   └── Footer.tsx        # Footer
├── data/                 # Data files
│   ├── profile.ts        # Profile information
│   ├── projects.ts       # Project data
│   ├── experience.ts     # Work experience
│   └── skills.ts         # Skills data
├── hooks/                # Custom React hooks
│   ├── useTerminal.ts   # Terminal state management
│   ├── useScrollProgress.ts # Scroll progress
│   └── useReducedMotion.ts # Reduced motion detection
├── lib/                  # Utility functions
│   ├── utils.ts          # Tailwind helpers
│   ├── constants.ts      # App constants
│   └── validations.ts    # Form validation
├── types/                # TypeScript types
│   └── index.ts          # Type definitions
├── middleware.ts         # Security middleware
├── next.config.ts        # Next.js configuration
├── tailwind.config.ts    # Tailwind configuration
└── tsconfig.json         # TypeScript configuration
```

## Accessibility Features

- Skip navigation link for keyboard users
- Proper ARIA labels and roles
- Keyboard navigation support (Tab, Enter, Space, Escape)
- Visible focus indicators with 3:1 contrast ratio
- Support for `prefers-reduced-motion`
- Semantic HTML with proper heading hierarchy
- Form labels and error announcements
- Alt text for all images

## Performance Optimizations

- Image optimization with Next.js Image component
- Lazy loading for off-screen content
- Critical CSS inlined
- Bundle size optimization
- Core Web Vitals targeting (LCP < 2.5s, FID < 100ms, CLS < 0.1)

## Security Features

- Content Security Policy with nonce-based inline scripts
- Security headers (HSTS, X-Frame-Options, X-Content-Type-Options)
- Input validation and sanitization
- No secrets in client-side code
- HTTPS enforcement

## SEO Features

- Comprehensive meta tags
- Open Graph tags
- Twitter Card tags
- JSON-LD structured data (Person, WebSite)
- XML sitemap
- robots.txt configuration
- Semantic HTML

## Terminal Commands

The interactive terminal supports the following commands:

- `help` - Show available commands
- `cat skills.json` - Display technical skills
- `cat projects.json` - Display featured projects
- `cat about.md` - Display about information
- `contact` - Jump to contact section
- `download --resume` - Download resume
- `clear` - Clear terminal

## Customization

### Updating Profile Information

Edit `data/profile.ts` to update your personal information.

### Adding Projects

Add new projects to the `projects` array in `data/projects.ts`.

### Updating Experience

Modify the `experience` array in `data/experience.ts`.

### Customizing Colors

Update color values in `tailwind.config.ts` and `lib/constants.ts`.

## Deployment

This project is optimized for deployment on Vercel:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## License

This project is licensed under the MIT License.

## Author

Shashank Patel - Software Engineer & Data Systems Specialist
