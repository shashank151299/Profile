import { Card, CardContent } from '@/components/ui/card';

const training = [
  'Elasticsearch and Kibana Basics — RBC internal training',
  'Cloud Monitoring with Dynatrace — professional development',
  'Functional Programming Principles in Scala — Coursera',
  'Enterprise Architecture Foundations — LinkedIn Learning',
];

export default function EducationTraining() {
  return (
    <section id="education" className="py-20 scroll-mt-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-3xl font-bold text-[#F3F4F6] md:text-4xl">
          Education & professional development
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="border-[#1A2130] bg-[#121721]">
            <CardContent className="p-6">
              <p className="text-sm font-medium uppercase tracking-wide text-[#10B981]">
                Master of Applied Computing
              </p>
              <h3 className="mt-2 text-xl font-semibold text-[#F3F4F6]">
                University of Windsor
              </h3>
              <p className="mt-1 text-sm text-[#9CA3AF]">2021–2022</p>
            </CardContent>
          </Card>
          <Card className="border-[#1A2130] bg-[#121721]">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-[#F3F4F6]">
                Selected training
              </h3>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-[#9CA3AF]">
                {training.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-[#10B981]" aria-hidden="true">
                      ▹
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
