import { useState, useCallback, useRef, useEffect } from 'react';

interface TerminalOutput {
  type: 'command' | 'output' | 'error';
  content: string;
}

export function useTerminal() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [output, setOutput] = useState<TerminalOutput[]>([
    { type: 'output', content: 'Welcome to Shashank\'s terminal. Type "help" for available commands.' },
  ]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);

  const commands: Record<string, () => string> = {
    help: () => {
      return `Available commands:
  help          - Show this help message
  cat skills.json - Display technical skills
  cat projects.json - Display featured projects
  cat about.md   - Display about information
  contact        - Jump to contact section
  download --resume - Download resume
  clear          - Clear terminal`;
    },
    'cat skills.json': () => {
      return JSON.stringify({
        'Backend & Systems': ['Python', 'Java (Spring Boot)', 'Node.js', 'C++', 'Shell Scripting', 'SQL'],
        'Frontend & UI': ['Next.js', 'React.js', 'TypeScript', 'Tailwind CSS', 'HTML5/CSS3', 'Jest'],
        'Data Engineering': ['ELK Stack', 'Apache NiFi', 'PostgreSQL', 'Firebase'],
        'Tools & DevOps': ['Docker', 'Git', 'CI/CD pipelines', 'Cloud Automation'],
      }, null, 2);
    },
    'cat projects.json': () => {
      return JSON.stringify([
        { name: 'AlterEcho', tech: ['React.js', 'Node.js', 'Web Audio API'] },
        { name: 'MyChatGPT', tech: ['Next.js', 'OpenAI API', 'React'] },
        { name: 'RFID Attendance', tech: ['Python', 'OpenCV', 'Hardware Integration'] },
      ], null, 2);
    },
    'cat about.md': () => {
      return `Shashank Patel
Software Engineer & Data Systems Specialist

Specializing in ELK Stack observability, high-throughput data processing (Apache NiFi), 
real-time AI systems, and interactive web applications.

Currently working at Royal Bank of Canada (RBC) in AML IT / Data Systems.`;
    },
    contact: () => {
      setTimeout(() => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return 'Navigating to contact section...';
    },
    'download --resume': () => {
      window.open('/resume.pdf', '_blank');
      return 'Opening resume...';
    },
    clear: () => {
      setOutput([]);
      return '';
    },
  };

  const executeCommand = useCallback((cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    
    if (!trimmedCmd) return;

    setOutput(prev => [...prev, { type: 'command', content: `$ ${cmd}` }]);

    if (trimmedCmd === 'clear') {
      setOutput([]);
      setInput('');
      return;
    }

    const commandFunc = commands[trimmedCmd as keyof typeof commands] || commands[cmd as keyof typeof commands];
    
    if (commandFunc) {
      const result = commandFunc();
      if (result) {
        setOutput(prev => [...prev, { type: 'output', content: result }]);
      }
    } else {
      setOutput(prev => [...prev, { type: 'error', content: `Command not found: ${cmd}. Type "help" for available commands.` }]);
    }

    setCommandHistory(prev => [...prev, cmd]);
    setHistoryIndex(-1);
    setInput('');
  }, []);

  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      executeCommand(input);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = Math.min(commandHistory.length - 1, historyIndex + 1);
        setHistoryIndex(newIndex === commandHistory.length - 1 ? -1 : newIndex);
        setInput(newIndex === commandHistory.length - 1 ? '' : commandHistory[newIndex]);
      }
    } else if (e.key === 'Escape') {
      setIsOpen(false);
    }
  }, [input, commandHistory, historyIndex, executeCommand]);

  const toggle = useCallback(() => {
    setIsOpen(prev => {
      const newState = !prev;
      if (newState) {
        setTimeout(() => inputRef.current?.focus(), 100);
      }
      return newState;
    });
  }, []);

  return {
    isOpen,
    input,
    setInput,
    output,
    inputRef,
    handleKeyDown,
    toggle,
    executeCommand,
  };
}
