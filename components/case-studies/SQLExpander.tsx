'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Code2, Copy, Check } from 'lucide-react';

interface SQLExpanderProps {
  sqlQuery: string;
}

export default function SQLExpander({ sqlQuery }: SQLExpanderProps) {
  const [expanded, setExpanded] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(sqlQuery);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="border border-theme-muted rounded-sm bg-theme-surface overflow-hidden transition-colors duration-200">
      <div className="flex items-center justify-between px-4 py-3 border-b border-theme-muted bg-theme-muted/40">
        <div className="flex items-center gap-2 text-xs font-mono font-semibold text-theme-main">
          <Code2 className="w-4 h-4 text-theme-sage" />
          <span>PostgreSQL Analytical Query</span>
        </div>
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1.5 text-xs font-mono font-medium text-theme-sage hover:text-theme-main transition-all duration-200 border border-theme-muted px-2.5 py-1 rounded-sm bg-theme-surface hover:-translate-y-0.5"
        >
          <span>{expanded ? 'Hide SQL' : 'View SQL →'}</span>
          {expanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
        </button>
      </div>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1.0] }}
            className="overflow-hidden"
          >
            <div className="relative p-4 bg-theme-main text-theme-secondary font-mono text-xs overflow-x-auto leading-relaxed border-t border-theme-muted">
              <button
                onClick={handleCopy}
                className="absolute top-3 right-3 p-1.5 text-theme-secondary hover:text-theme-sage bg-theme-surface border border-theme-muted rounded-sm transition-all duration-200 hover:-translate-y-0.5"
                title="Copy SQL Query"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-theme-sage" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
              <pre className="text-theme-primary">
                <code>{sqlQuery}</code>
              </pre>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
