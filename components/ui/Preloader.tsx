'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

interface PreloaderProps {
  onComplete?: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  const shouldReduceMotion = useReducedMotion();

  // Always play preloader on every page mount / full browser refresh
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Main progress animation sequence (~6.0s total duration)
  useEffect(() => {
    if (!isVisible) return;

    if (shouldReduceMotion) {
      // Reduced motion fast-track (800ms)
      const t1 = setTimeout(() => setProgress(100), 300);
      const t2 = setTimeout(() => handleComplete(), 800);
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
      };
    }

    // Timer progress loop (0% -> 100% over 6000ms)
    const startTime = performance.now();
    const duration = 6000;

    const interval = setInterval(() => {
      const elapsed = performance.now() - startTime;
      const pct = Math.min(Math.floor((elapsed / duration) * 100), 100);
      
      setProgress(pct);

      if (pct >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          handleComplete();
        }, 200);
      }
    }, 40);

    return () => clearInterval(interval);
  }, [isVisible, shouldReduceMotion]);

  const handleComplete = () => {
    setIsExiting(true);
    
    // Smooth transition to homepage (450ms)
    setTimeout(() => {
      setIsVisible(false);
      onComplete?.();
    }, 450);
  };

  const handleSkip = () => {
    handleComplete();
  };

  if (!isVisible) return null;

  // Compute progress-driven stage parameters over 6-second timeline
  const isStage1 = progress >= 0;    // 0-20%: Identity appears (0-1.2s)
  const isStage2 = progress >= 20;   // 20-40%: Typography shifts & separates (1.2-2.4s)
  const isStage3 = progress >= 40;   // 40-60%: Data graph line emerges (2.4-3.6s)
  const isStage4 = progress >= 60;   // 60-85%: Graph transforms into waveform (3.6-5.1s)
  const isStage5 = progress >= 85;   // 85-100%: Waveform expands into homepage divider (5.1-6.0s)

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            y: -12,
            transition: { duration: 0.45, ease: [0.25, 0.1, 0.25, 1.0] } 
          }}
          className="fixed inset-0 z-50 flex flex-col justify-between p-6 sm:p-12 sm:py-16 bg-theme-main text-theme-main select-none overflow-hidden"
          suppressHydrationWarning
        >
          {/* Top Identifier & Subtle Skip Button */}
          <div className="flex items-center justify-between text-xs font-mono tracking-widest text-theme-secondary">
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-theme-sage animate-pulse" />
              <span className="text-theme-sage font-bold">001</span>
              <span className="text-theme-secondary/40">/</span>
              <span className="uppercase">PORTFOLIO INITIALIZATION</span>
            </motion.div>

            <motion.button
              onClick={handleSkip}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              whileHover={{ opacity: 1, x: 2 }}
              transition={{ duration: 0.3 }}
              className="hover:text-theme-sage transition-all duration-200 focus:outline-none uppercase text-[11px] font-mono tracking-wider flex items-center gap-1.5 cursor-pointer"
            >
              <span>SKIP</span>
              <span>→</span>
            </motion.button>
          </div>

          {/* Central Typographic Composition & Data Waveform Morph */}
          <div className="my-auto space-y-6 sm:space-y-8 max-w-4xl mx-auto w-full text-center sm:text-left">
            {/* Category / Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: isStage1 ? 1 : 0, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xs font-mono font-bold tracking-widest text-theme-sage uppercase flex items-center justify-center sm:justify-start gap-2"
            >
              <span className="w-6 sm:w-8 h-[1px] bg-theme-sage" />
              <span>DATA ANALYST · FRONTEND DEVELOPER</span>
            </motion.div>

            {/* Art-Directed Typography: ANSH KANSARA */}
            <div className="relative space-y-1 sm:space-y-2 overflow-hidden py-2">
              <motion.div
                initial={{ opacity: 0, y: 32 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  x: isStage2 ? -10 : 0
                }}
                transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] }}
                className="text-4xl sm:text-7xl md:text-8xl font-bold tracking-tight uppercase text-theme-main"
              >
                ANSH
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 32 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  x: isStage2 ? 10 : 0
                }}
                transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.1, 0.25, 1.0] }}
                className="text-4xl sm:text-7xl md:text-8xl font-bold tracking-tight uppercase text-theme-main"
              >
                KANSARA
              </motion.div>

              {/* Emerging Underline → Data Graph Line */}
              {isStage3 && (
                <motion.div
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: 0.85 }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                  className="absolute bottom-2 left-0 right-0 h-[1.5px] bg-theme-sage origin-left"
                />
              )}
            </div>

            {/* Transformative Abstract SVG Data Graph Waveform */}
            <div className="h-10 w-full flex items-center justify-center sm:justify-start overflow-hidden pt-2">
              {isStage4 && (
                <motion.svg
                  initial={{ opacity: 0, scaleY: 0 }}
                  animate={{ 
                    opacity: 1, 
                    scaleY: 1,
                    scaleX: isStage5 ? 1.25 : 1
                  }}
                  transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] }}
                  className="w-full max-w-2xl h-8 text-theme-sage"
                  viewBox="0 0 600 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <motion.path
                    d="M 0 20 Q 75 5, 150 20 T 300 20 T 450 20 T 600 20"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                  />
                  <motion.path
                    d="M 0 20 L 80 20 L 120 6 L 160 34 L 200 20 L 300 20 L 340 4 L 380 36 L 420 20 L 600 20"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.8, delay: 0.15, ease: 'easeInOut' }}
                  />
                </motion.svg>
              )}
            </div>
          </div>

          {/* Bottom Progress Bar & Percentage Readout */}
          <div className="space-y-3 max-w-4xl mx-auto w-full">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-theme-secondary tracking-wider uppercase text-[10px] sm:text-xs">
                {progress < 20 && 'IDENTITY // INITIALIZING'}
                {progress >= 20 && progress < 40 && 'DATA // TRANSFORMING TYPOGRAPHY'}
                {progress >= 40 && progress < 60 && 'ANALYSIS // GENERATING WAVEFORM'}
                {progress >= 60 && progress < 85 && 'VISUALIZATION // STRUCTURING UI'}
                {progress >= 85 && 'INTERFACE // REVEALING PORTFOLIO'}
              </span>
              <span className="text-theme-sage font-bold font-mono text-sm sm:text-base">
                {progress.toString().padStart(2, '0')}%
              </span>
            </div>

            {/* Horizontal Progress Fill Line */}
            <div className="w-full h-[2px] bg-theme-muted/50 relative rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-theme-sage rounded-full"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'linear', duration: 0.05 }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
