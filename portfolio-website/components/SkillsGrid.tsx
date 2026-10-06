import { skills } from '@/data/skills';
import { Card, CardContent } from '@/components/ui/card';

export default function SkillsGrid() {
  return (
    <section id="skills" className="py-20 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="mb-8 max-w-2xl">
          <h2 className="text-3xl font-bold text-[#F3F4F6] md:text-4xl">
            Technical toolkit
          </h2>
          <p className="mt-3 text-[#9CA3AF]">
            The tools I use to build, integrate, and operate production
            software.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {skills.map((category) => (
            <Card
              key={category.category}
              className="border-[#1A2130] bg-[#121721]"
            >
              <CardContent className="p-6">
                <h3 className="mb-4 text-lg font-semibold text-[#F3F4F6]">
                  {category.category}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full border border-[#263142] bg-[#0A0D12] px-3 py-1.5 text-sm text-[#C7CDD5]"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
