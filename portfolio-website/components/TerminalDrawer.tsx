'use client';

import { useEffect, useRef } from 'react';
import { useTerminal } from '@/hooks/useTerminal';
import { X, Terminal as TerminalIcon } from 'lucide-react';

export default function TerminalDrawer() {
  const {
    isOpen,
    input,
    setInput,
    output,
    inputRef,
    handleKeyDown,
    toggle,
  } = useTerminal();

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if ((e.key === '`' || (e.ctrlKey && e.key === 'k')) && !e.shiftKey) {
        e.preventDefault();
        toggle();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [toggle]);

  if (!isOpen) {
    return (
      <button
        onClick={toggle}
        className="fixed bottom-4 right-4 z-50 flex items-center gap-2 rounded-lg bg-[#121721] px-4 py-2 text-[#10B981] shadow-lg transition-colors hover:bg-[#1A2130] focus:outline-none focus:ring-2 focus:ring-[#10B981]"
        aria-label="Open terminal (Press ` or Ctrl+K)"
      >
        <TerminalIcon className="h-5 w-5" aria-hidden="true" />
        <span className="font-mono text-sm">Terminal</span>
      </button>
    );
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center p-4 md:items-center md:p-8"
      role="dialog"
      aria-modal="true"
      aria-label="Terminal"
    >
      <div
        className="w-full max-w-4xl rounded-lg border border-[#1A2130] bg-[#0A0D12] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal Header */}
        <div className="flex items-center justify-between border-b border-[#1A2130] bg-[#121721] px-4 py-3">
          <div className="flex items-center gap-2">
            <TerminalIcon className="h-5 w-5 text-[#10B981]" aria-hidden="true" />
            <span className="font-mono text-sm text-[#9CA3AF]">
              shashank@portfolio:~
            </span>
          </div>
          <button
            onClick={toggle}
            className="rounded-md p-1 text-[#9CA3AF] transition-colors hover:text-[#F3F4F6] focus:outline-none focus:ring-2 focus:ring-[#10B981]"
            aria-label="Close terminal"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        {/* Terminal Body */}
        <div className="max-h-[60vh] overflow-y-auto p-4 md:max-h-[70vh]">
          <div
            className="space-y-2 font-mono text-sm"
            role="log"
            aria-live="polite"
            aria-atomic="false"
          >
            {output.map((line, index) => (
              <div
                key={index}
                className={
                  line.type === 'error'
                    ? 'text-[#EF4444]'
                    : line.type === 'command'
                    ? 'text-[#10B981]'
                    : 'text-[#F3F4F6]'
                }
              >
                {line.content}
              </div>
            ))}
          </div>

          {/* Input Line */}
          <div className="mt-4 flex items-center gap-2 font-mono text-sm">
            <span className="text-[#10B981]">$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent text-[#F3F4F6] outline-none"
              placeholder="Type a command..."
              aria-label="Terminal input"
              autoComplete="off"
            />
          </div>
        </div>

        {/* Terminal Footer */}
        <div className="border-t border-[#1A2130] bg-[#121721] px-4 py-2">
          <p className="font-mono text-xs text-[#6B7280]">
            Press ` or Ctrl+K to toggle • Type <span className="text-[#10B981]">help</span> for commands
          </p>
        </div>
      </div>
    </div>
  );
}
