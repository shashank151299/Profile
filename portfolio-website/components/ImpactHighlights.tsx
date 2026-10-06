const highlights = [
  {
    value: '40%',
    label: 'faster pipeline processing',
    detail: 'from reusable NiFi workflow patterns',
  },
  {
    value: '60%',
    label: 'lower data latency',
    detail: 'across compliance reporting pipelines',
  },
  {
    value: '15+',
    label: 'monitoring dashboards',
    detail: 'with issue detection reduced from hours to minutes',
  },
  {
    value: '100K+',
    label: 'records reconciled',
    detail: 'during internal audit data work',
  },
];

export default function ImpactHighlights() {
  return (
    <section
      aria-label="Selected impact"
      className="border-y border-[#1A2130] bg-[#0D1118] py-8"
    >
      <div className="container mx-auto grid grid-cols-2 gap-6 px-4 md:grid-cols-4">
        {highlights.map((highlight) => (
          <div key={highlight.value} className="space-y-1">
            <p className="text-3xl font-bold tracking-tight text-[#10B981]">
              {highlight.value}
            </p>
            <p className="font-medium text-[#F3F4F6]">{highlight.label}</p>
            <p className="text-sm leading-relaxed text-[#9CA3AF]">
              {highlight.detail}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
