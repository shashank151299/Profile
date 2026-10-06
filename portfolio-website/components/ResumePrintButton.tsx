'use client';

import { Printer } from 'lucide-react';

export default function ResumePrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="inline-flex items-center gap-2 rounded-md bg-[#10B981] px-4 py-2 font-semibold text-[#07110D] transition-colors hover:bg-[#34D399]"
    >
      <Printer className="h-4 w-4" aria-hidden="true" />
      Print / save as PDF
    </button>
  );
}
