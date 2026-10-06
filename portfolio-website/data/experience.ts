import { Experience } from '@/types';

export const experience: Experience[] = [
  {
    id: 'rbc-fulltime',
    company: 'Royal Bank of Canada (RBC)',
    position: 'Software Developer',
    location: 'Halifax, Nova Scotia',
    startDate: 'May 2023',
    endDate: 'October 2026',
    type: 'full-time',
    description: [
      'Designed reusable Apache NiFi workflows for compliance reporting and cross-system reconciliation, reducing processing time by 40% and data latency by 60%; the patterns were adopted across the department.',
      'Built 15+ Elasticsearch and Kibana monitoring dashboards that gave operations teams real-time visibility and cut issue detection from hours to minutes.',
      'Created Python, Shell, and Node.js automation for ticket generation, alerting, and compliance triggers; production support teams adopted the tools for daily use.',
      'Traced a recurring logic defect across three production systems to its root cause and shipped a fix that eliminated the false-positive incident cycle.',
      'Partnered with compliance, trading operations, and treasury teams to shape requirements, deliver production changes, and improve the reliability of critical workflows.',
    ],
  },
  {
    id: 'rbc-coop',
    company: 'Royal Bank of Canada (RBC)',
    position: 'Software Developer Co-op',
    location: 'Toronto, Canada',
    startDate: 'Sept 2022',
    endDate: 'Dec 2022',
    type: 'co-op',
    description: [
      'Processed and reconciled 100,000+ records for internal audit, using Python validation controls to identify cross-system discrepancies.',
      'Built reconciliation reports and data-extraction scripts in collaboration with engineering, finance, and operations stakeholders.',
    ],
  },
];
