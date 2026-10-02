import { profile } from '@/data/profile';
import { Card, CardContent } from '@/components/ui/card';

export default function About() {
  return (
    <section id="about" className="py-20 scroll-mt-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-3xl font-bold text-[#F3F4F6] md:text-4xl">
          About Me
        </h2>
        <Card className="border-[#1A2130] bg-[#121721]">
          <CardContent className="p-6 md:p-8">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-[#F3F4F6]">
                  {profile.name}
                </h3>
                <p className="text-[#00F0FF] font-mono">{profile.title}</p>
                <p className="text-[#9CA3AF] leading-relaxed">
                  {profile.bio}
                </p>
                <div className="space-y-2">
                  <p className="flex items-center gap-2 text-[#9CA3AF]">
                    <span className="text-[#10B981]">📍</span>
                    {profile.location}
                  </p>
                  <p className="flex items-center gap-2 text-[#9CA3AF]">
                    <span className="text-[#10B981]">📧</span>
                    <a
                      href={`mailto:${profile.email}`}
                      className="text-[#00F0FF] hover:underline focus:underline"
                    >
                      {profile.email}
                    </a>
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-[#F3F4F6]">
                  Engineering Philosophy
                </h4>
                <p className="text-[#9CA3AF] leading-relaxed">
                  I believe in building systems that are not only functional but
                  also maintainable, scalable, and performant. My approach
                  combines deep technical expertise with a focus on user
                  experience and business value.
                </p>
                <h4 className="text-lg font-semibold text-[#F3F4F6]">
                  Key Focus Areas
                </h4>
                <ul className="space-y-2 text-[#9CA3AF]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#10B981] mt-1">▹</span>
                    <span>High-throughput data processing pipelines</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#10B981] mt-1">▹</span>
                    <span>Real-time observability and monitoring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#10B981] mt-1">▹</span>
                    <span>AI-powered audio signal processing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#10B981] mt-1">▹</span>
                    <span>Interactive web applications</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
