import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { SITE_URL } from '@/lib/constants';
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
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Shashank Patel | Software Developer, Backend Systems & Reliability',
    template: '%s | Shashank Patel',
  },
  description: 'Software Developer in Halifax, Nova Scotia, building backend services, reliable data pipelines, and observability tools. At RBC, improved processing time by 40% and reduced issue detection from hours to minutes.',
  keywords: ['Software Developer', 'Backend Engineering', 'Data Pipelines', 'Reliability Engineering', 'Apache NiFi', 'Java', 'Spring Boot', 'Python'],
  authors: [{ name: 'Shashank Patel' }],
  creator: 'Shashank Patel',
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'Shashank Patel - Portfolio',
    title: 'Shashank Patel | Software Developer, Backend Systems & Reliability',
    description: 'Backend services, reliable data pipelines, and observability tools with measurable production impact.',
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
              jobTitle: 'Software Developer',
              url: SITE_URL,
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Halifax',
                addressRegion: 'Nova Scotia',
                addressCountry: 'CA',
              },
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
