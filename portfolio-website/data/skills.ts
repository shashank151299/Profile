import { SkillCategory } from '@/types';

export const skills: SkillCategory[] = [
  {
    category: 'Backend & Systems',
    icon: 'Server',
    skills: ['Python', 'Java (Spring Boot)', 'Node.js', 'C++', 'Shell Scripting', 'SQL'],
  },
  {
    category: 'Frontend & UI',
    icon: 'Layout',
    skills: ['Next.js', 'React.js', 'TypeScript', 'Tailwind CSS', 'HTML5/CSS3', 'Jest', 'Figma', 'Adobe XD'],
  },
  {
    category: 'Data Engineering',
    icon: 'Database',
    skills: ['ELK Stack (Elasticsearch, Logstash, Kibana)', 'Apache NiFi', 'PostgreSQL', 'Firebase'],
  },
  {
    category: 'Tools & DevOps',
    icon: 'Wrench',
    skills: ['Docker', 'Git', 'CI/CD pipelines', 'Cloud Automation'],
  },
];
