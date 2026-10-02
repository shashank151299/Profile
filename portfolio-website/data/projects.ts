import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'alterecho',
    title: 'AlterEcho',
    description: 'Real-time AI audio signal processing platform with low-latency digital audio processing capabilities.',
    tagline: 'Real-Time AI Audio Signal Processing Platform',
    tech: ['React.js', 'Node.js', 'Web Audio API', 'AI Models', 'WebSockets'],
    highlights: [
      'Low-latency digital audio processing',
      'Real-time waveform visualizers',
      'Dynamic filter modulations',
      'AI-powered audio analysis',
    ],
    github: 'https://github.com/shashankpatel/alterecho',
    liveDemo: 'https://alterecho.demo',
  },
  {
    id: 'mychatgpt',
    title: 'MyChatGPT',
    description: 'Conversational AI interface with custom API orchestration platform for building custom LLM workspaces.',
    tagline: 'Conversational AI Interface & API Orchestration Platform',
    tech: ['Next.js', 'OpenAI API', 'Gemini API', 'React', 'Tailwind CSS'],
    highlights: [
      'Context-aware prompt engine',
      'Markdown streaming rendering',
      'Customizable agent personas',
      'Multi-model API integration',
    ],
    github: 'https://github.com/shashankpatel/mychatgpt',
    liveDemo: 'https://mychatgpt.demo',
  },
  {
    id: 'rfid-attendance',
    title: 'RFID & Computer Vision Attendance System',
    description: 'Embedded hardware and biometric tracking system combining RFID tags with facial recognition.',
    tagline: 'Embedded Hardware & Biometric Tracking System',
    tech: ['Python', 'OpenCV', 'Facial Recognition', 'Hardware Integration', 'SQL'],
    highlights: [
      'Multi-factor hardware authentication',
      'RFID tag integration',
      'Real-time facial recognition',
      'Automated attendance logging',
    ],
    github: 'https://github.com/shashankpatel/rfid-attendance',
  },
];
