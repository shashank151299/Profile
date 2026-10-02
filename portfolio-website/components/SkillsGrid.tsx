'use client';

import { useState } from 'react';
import { skills } from '@/data/skills';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Server, Layout, Database, Wrench } from 'lucide-react';

const iconMap = {
  Server,
  Layout,
  Database,
  Wrench,
};

export default function SkillsGrid() {
  const [activeTab, setActiveTab] = useState('0');

  return (
    <section id="skills" className="py-20 scroll-mt-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-3xl font-bold text-[#F3F4F6] md:text-4xl">
          Technical Skills
        </h2>
        <Card className="border-[#1A2130] bg-[#121721]">
          <CardContent className="p-6">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList
                role="tablist"
                aria-label="Technical skills categories"
                className="mb-6 flex flex-wrap gap-2 bg-[#0A0D12] p-2"
              >
                {skills.map((category, index) => {
                  const Icon = iconMap[category.icon as keyof typeof iconMap];
                  return (
                    <TabsTrigger
                      key={category.category}
                      value={index.toString()}
                      role="tab"
                      aria-selected={activeTab === index.toString()}
                      aria-controls={`panel-${index}`}
                      id={`tab-${index}`}
                      className="flex items-center gap-2 rounded-md px-4 py-2 text-sm transition-colors data-[state=active]:bg-[#1A2130] data-[state=active]:text-[#10B981]"
                    >
                      <Icon className="h-4 w-4" aria-hidden="true" />
                      {category.category}
                    </TabsTrigger>
                  );
                })}
              </TabsList>

              {skills.map((category, index) => (
                <TabsContent
                  key={category.category}
                  value={index.toString()}
                  role="tabpanel"
                  id={`panel-${index}`}
                  aria-labelledby={`tab-${index}`}
                  className="mt-4"
                >
                  <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
                    {category.skills.map((skill) => (
                      <div
                        key={skill}
                        className="flex items-center gap-2 rounded-md border border-[#1A2130] bg-[#0A0D12] px-4 py-3 transition-colors hover:border-[#10B981] hover:bg-[#1A2130]"
                      >
                        <span className="h-2 w-2 rounded-full bg-[#10B981]" />
                        <span className="text-sm text-[#F3F4F6]">{skill}</span>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
