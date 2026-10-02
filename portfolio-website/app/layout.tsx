import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Shashank Patel | Software Engineer & Data Systems Specialist',
    template: '%s | Shashank Patel',
  },
  description: 'Software Engineer specializing in ELK Stack observability, high-throughput data processing (Apache NiFi), real-time AI systems, and interactive web applications.',
  keywords: ['Software Engineer', 'Data Engineer', 'ELK Stack', 'Apache NiFi', 'Next.js', 'React', 'Python', 'Java'],
  authors: [{ name: 'Shashank Patel' }],
  creator: 'Shashank Patel',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://shashank151299.github.io/Profile',
    siteName: 'Shashank Patel - Portfolio',
    title: 'Shashank Patel | Software Engineer & Data Systems Specialist',
    description: 'Software Engineer specializing in ELK Stack observability, high-throughput data processing, and real-time AI systems.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Shashank Patel Portfolio',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body className="min-h-screen font-sans antialiased">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <main id="main-content">{children}</main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Shashank Patel',
              jobTitle: 'Software Engineer & Data Systems Specialist',
              url: 'https://shashank151299.github.io/Profile',
              sameAs: [
                'https://www.linkedin.com/in/shashankpatel15/',
                'https://github.com/shashank151299',
              ],
              knowsAbout: [
                'Software Engineering',
                'Data Engineering',
                'ELK Stack',
                'Apache NiFi',
                'Next.js',
                'React',
                'Python',
                'Java',
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
