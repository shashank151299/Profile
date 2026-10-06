import type { Metadata } from 'next';
import { profile } from '@/data/profile';
import ResumePrintButton from '@/components/ResumePrintButton';

export const metadata: Metadata = {
  title: 'Résumé',
  description: 'Résumé for Shashank Patel, Software Developer in Halifax, Nova Scotia.',
  robots: {
    index: false,
    follow: false,
  },
};

const experience = [
  {
    role: 'Software Developer',
    company: 'Royal Bank of Canada (RBC)',
    location: 'Halifax, Nova Scotia',
    dates: 'May 2023 – October 2026',
    achievements: [
      'Designed reusable Apache NiFi workflows for compliance reporting and cross-system reconciliation, reducing processing time by 40% and data latency by 60%; the patterns were adopted across the department.',
      'Built 15+ Elasticsearch and Kibana monitoring dashboards that gave operations teams real-time visibility and cut issue detection from hours to minutes.',
      'Created Python, Shell, and Node.js automation for ticket generation, alerting, and compliance triggers; production support teams adopted the tools for daily use.',
      'Traced a recurring logic defect across three production systems to its root cause and shipped a fix that eliminated the false-positive incident cycle.',
      'Partnered with compliance, trading operations, and treasury teams to shape requirements and deliver reliable production workflows.',
    ],
  },
  {
    role: 'Software Developer Co-op',
    company: 'Royal Bank of Canada (RBC)',
    location: 'Toronto, Ontario',
    dates: 'September 2022 – December 2022',
    achievements: [
      'Processed and reconciled 100,000+ records for internal audit using Python validation controls to identify cross-system discrepancies.',
    ],
  },
];

const projects = [
  {
    name: 'Sports Restaurant Queue Management',
    detail:
      'Built and deployed a Java 17 / Spring Boot queue-management app in a three-hour interview time-box, using AI-assisted code generation. Implemented FIFO customer queues and shortest-queue employee assignment.',
  },
  {
    name: 'AlterEcho',
    detail:
      'Built an interactive audio-processing app with device routing, voice profiles, and real-time effects. The live demo reports approximately 3 ms processing at a 128-sample audio quantum.',
  },
  {
    name: 'MyChatGPT',
    detail:
      'Built a Next.js conversational AI app using TypeScript, OpenAI APIs, custom REST endpoints, and Firebase authentication.',
  },
];

const skillGroups = [
  {
    label: 'Backend & APIs',
    skills: 'Java, Spring Boot, Python, Node.js, REST APIs, SQL',
  },
  {
    label: 'Data & integration',
    skills: 'Apache NiFi, Apache Kafka, PostgreSQL, Elasticsearch, Logstash, Kibana',
  },
  {
    label: 'Reliability & platforms',
    skills:
      'Dynatrace, MoogSoft, OpenShift / Kubernetes, Docker, GitHub Actions, UrbanCode Deploy',
  },
  {
    label: 'Web & testing',
    skills: 'React, Next.js, TypeScript, Jest, pytest, Postman',
  },
];

export default function ResumePage() {
  return (
    <article className="resume-page mx-auto max-w-4xl rounded-xl bg-white px-5 py-8 text-[#1F2937] shadow-xl sm:px-10 sm:py-12">
      <div className="resume-actions mb-8 flex flex-wrap items-center justify-between gap-3">
        <a href="/" className="text-sm font-medium text-[#047857] hover:underline">
          ← Portfolio
        </a>
        <ResumePrintButton />
      </div>

      <header className="border-b border-gray-300 pb-5">
        <h1 className="text-4xl font-bold tracking-tight">Shashank Patel</h1>
        <p className="mt-2 text-lg font-semibold text-[#047857]">
          Software Developer · Backend Systems, Data Pipelines & Reliability
        </p>
        <p className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-600">
          <span>{profile.location}</span>
          <a href={`mailto:${profile.email}`} className="hover:underline">
            {profile.email}
          </a>
          <a href={profile.linkedin} className="hover:underline">
            LinkedIn
          </a>
          <a href={profile.github} className="hover:underline">
            GitHub
          </a>
        </p>
      </header>

      <section className="resume-section mt-6">
        <h2 className="text-sm font-bold uppercase tracking-wider text-gray-500">
          Profile
        </h2>
        <p className="mt-2 leading-relaxed">
          Software developer with 3+ years of experience building backend
          services, data pipelines, and observability tools for complex,
          regulated workflows. Delivered reusable automation that reduced
          processing time by 40%, cut data latency by 60%, and improved
          production issue detection from hours to minutes.
        </p>
      </section>

      <section className="resume-section mt-6">
        <h2 className="text-sm font-bold uppercase tracking-wider text-gray-500">
          Experience
        </h2>
        {experience.map((job) => (
          <div key={job.role} className="mt-4">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="font-bold">{job.role}</h3>
              <p className="text-sm text-gray-600">{job.dates}</p>
            </div>
            <p className="text-sm text-gray-700">
              {job.company} · {job.location}
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-relaxed">
              {job.achievements.map((achievement) => (
                <li key={achievement}>{achievement}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="resume-section mt-6">
        <h2 className="text-sm font-bold uppercase tracking-wider text-gray-500">
          Selected projects
        </h2>
        <div className="mt-3 space-y-3">
          {projects.map((project) => (
            <div key={project.name}>
              <h3 className="font-bold">{project.name}</h3>
              <p className="text-sm leading-relaxed">{project.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="resume-section mt-6">
        <h2 className="text-sm font-bold uppercase tracking-wider text-gray-500">
          Technical skills
        </h2>
        <dl className="mt-3 space-y-2 text-sm">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <dt className="inline font-bold">{group.label}: </dt>
              <dd className="inline">{group.skills}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="resume-section mt-6">
        <h2 className="text-sm font-bold uppercase tracking-wider text-gray-500">
          Education
        </h2>
        <div className="mt-3 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <p className="font-bold">Master of Applied Computing</p>
          <p className="text-sm text-gray-600">2021–2022</p>
        </div>
        <p className="text-sm text-gray-700">University of Windsor</p>
      </section>

      <section className="resume-section mt-6">
        <h2 className="text-sm font-bold uppercase tracking-wider text-gray-500">
          Professional development
        </h2>
        <p className="mt-2 text-sm leading-relaxed">
          Elasticsearch and Kibana Basics (RBC internal training) · Cloud
          Monitoring with Dynatrace · Functional Programming Principles in
          Scala (Coursera) · Enterprise Architecture Foundations (LinkedIn
          Learning)
        </p>
      </section>
    </article>
  );
}
