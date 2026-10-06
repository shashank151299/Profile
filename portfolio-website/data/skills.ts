import { SkillCategory } from '@/types';

export const skills: SkillCategory[] = [
  {
    category: 'Backend & APIs',
    icon: 'Server',
    skills: ['Java', 'Spring Boot', 'Python', 'Node.js', 'REST APIs', 'SQL'],
  },
  {
    category: 'Data & Integration',
    icon: 'Layout',
    skills: ['Apache NiFi', 'Apache Kafka', 'PostgreSQL', 'Elasticsearch', 'Logstash', 'Kibana'],
  },
  {
    category: 'Reliability & Platforms',
    icon: 'Database',
    skills: ['Dynatrace', 'MoogSoft', 'OpenShift / Kubernetes', 'Docker', 'GitHub Actions', 'UrbanCode Deploy'],
  },
  {
    category: 'Web & Testing',
    icon: 'Wrench',
    skills: ['React', 'Next.js', 'TypeScript', 'Jest', 'pytest', 'Postman'],
  },
];
