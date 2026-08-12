'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from '@/lib/themeContext';
import { Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      className="group relative p-2 text-theme-secondary hover:text-theme-main transition-colors duration-200 focus:outline-none flex items-center justify-center min-w-[44px] min-h-[44px] rounded-sm hover:bg-theme-muted/50 border-0"
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      suppressHydrationWarning
    >
      {!mounted ? (
        <div className="w-5 h-5 flex items-center justify-center text-theme-sage">
          <Moon className="w-4 h-4" />
        </div>
      ) : (
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={theme}
            initial={{ rotate: -90, scale: 0.5, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            exit={{ rotate: 90, scale: 0.5, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1.0] }}
            className="w-5 h-5 flex items-center justify-center text-theme-sage"
          >
            {theme === 'light' ? (
              <Moon className="w-4 h-4 transition-transform duration-200 group-hover:scale-110" />
            ) : (
              <Sun className="w-4 h-4 transition-transform duration-200 group-hover:scale-110" />
            )}
          </motion.div>
        </AnimatePresence>
      )}
    </button>
  );
}
