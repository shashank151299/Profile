import { Experience } from '@/types';

export const experience: Experience[] = [
  {
    id: 'rbc-fulltime',
    company: 'Royal Bank of Canada (RBC)',
    position: 'Software Developer — AML IT / Data Systems',
    location: 'Toronto, Canada',
    startDate: 'May 2023',
    endDate: 'Sept 2026',
    type: 'full-time',
    description: [
      'Engineered automated regulatory compliance tools and observability frameworks leveraging ELK Stack and Apache NiFi',
      'Designed end-to-end data pipelines for high-volume transactions and automated data reconciliation audits',
      'Utilized Python, Java, and Node.js to streamline system reporting and optimize enterprise reliability',
      'Implemented real-time monitoring and alerting systems for data integrity',
      'Collaborated with cross-functional teams to deliver scalable data solutions',
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
      'Automated data reconciliation workflows for regulatory reporting compliance',
      'Developed Python scripts to process and validate financial data',
      'Contributed to the improvement of existing data pipeline efficiency',
    ],
  },
  {
    id: 'asl-precision',
    company: 'ASL Precision',
    position: 'Operations & Logistics Assistant',
    location: 'Windsor, Canada',
    startDate: '2022',
    type: 'contract',
    description: [
      'Managed inventory and logistics operations',
      'Optimized supply chain processes',
      'Implemented data tracking systems for operational efficiency',
    ],
  },
];
