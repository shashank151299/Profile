import { experience } from '@/data/experience';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, MapPin, Building2 } from 'lucide-react';

export default function ExperienceTree() {
  return (
    <section id="experience" className="py-20 scroll-mt-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-3xl font-bold text-[#F3F4F6] md:text-4xl">
          Experience
        </h2>
        <div className="space-y-6">
          {experience.map((exp, index) => (
            <Card
              key={exp.id}
              className="border-[#1A2130] bg-[#121721] transition-all hover:border-[#10B981]"
            >
              <CardContent className="p-6">
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div className="flex-1 space-y-3">
                    <div>
                      <h3 className="text-xl font-semibold text-[#F3F4F6]">
                        {exp.position}
                      </h3>
                      <div className="mt-1 flex flex-wrap items-center gap-3 text-sm text-[#9CA3AF]">
                        <span className="flex items-center gap-1">
                          <Building2 className="h-4 w-4" aria-hidden="true" />
                          {exp.company}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" aria-hidden="true" />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4 text-[#10B981]" aria-hidden="true" />
                      <span className="text-[#9CA3AF]">
                        {exp.startDate} — {exp.endDate || 'Present'}
                      </span>
                      <span className="rounded-full bg-[#1A2130] px-2 py-0.5 text-xs text-[#00F0FF]">
                        {exp.type}
                      </span>
                    </div>
                    <ul className="space-y-2">
                      {exp.description.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-sm text-[#9CA3AF]"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#10B981]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
