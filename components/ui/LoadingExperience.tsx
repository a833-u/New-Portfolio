'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

const checklistItems = [
  'DATA PROFILE',
  'WORK EXPERIENCE',
  'PROJECTS',
  'ANALYTICS',
  'VISUALIZATION',
];

interface LoadingExperienceProps {
  onComplete?: () => void;
}

export default function LoadingExperience({ onComplete }: LoadingExperienceProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const [checkIndex, setCheckIndex] = useState(-1);
  const [isMorphing, setIsMorphing] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  const shouldReduceMotion = useReducedMotion();

  // Show loading experience on every page mount / full page refresh
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Extended animation timer sequence (~4.5s total duration)
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

    // Step 1: Smooth progress increments over ~3.8s (0 -> 100%)
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        if (prev < 25) return prev + 3;
        if (prev < 65) return prev + 4;
        if (prev < 90) return prev + 5;
        return 100;
      });
    }, 120);

    // Step 2: Sequential checklist reveals spaced evenly between 1.2s and 3.2s
    const c1 = setTimeout(() => setCheckIndex(0), 1200);
    const c2 = setTimeout(() => setCheckIndex(1), 1700);
    const c3 = setTimeout(() => setCheckIndex(2), 2200);
    const c4 = setTimeout(() => setCheckIndex(3), 2700);
    const c5 = setTimeout(() => setCheckIndex(4), 3200);

    // Step 3: Waveform morphing trigger at 3.5s
    const m1 = setTimeout(() => setIsMorphing(true), 3500);

    // Step 4: Completion and exit sequence at 4.5s
    const e1 = setTimeout(() => {
      handleComplete();
    }, 4500);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(c1);
      clearTimeout(c2);
      clearTimeout(c3);
      clearTimeout(c4);
      clearTimeout(c5);
      clearTimeout(m1);
      clearTimeout(e1);
    };
  }, [isVisible, shouldReduceMotion]);

  const handleComplete = () => {
    setIsExiting(true);
    setTimeout(() => {
      setIsVisible(false);
      onComplete?.();
    }, 500);
  };

  const handleSkip = () => {
    handleComplete();
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          key="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -16, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] } }}
          className="fixed inset-0 z-50 flex flex-col justify-between p-6 sm:p-12 bg-theme-main text-theme-main select-none overflow-hidden"
          suppressHydrationWarning
        >
          {/* Top Identifier & Header */}
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
              <span className="uppercase">INITIALIZATION</span>
            </motion.div>

            <motion.button
              onClick={handleSkip}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="hover:text-theme-sage transition-colors duration-200 focus:outline-none uppercase text-[11px] font-mono tracking-wider flex items-center gap-1.5 cursor-pointer"
            >
              <span>SKIP INTRO</span>
              <span>→</span>
            </motion.button>
          </div>

          {/* Central Editorial Typography & Name Sequence */}
          <div className="my-auto space-y-8 max-w-3xl mx-auto w-full">
            {/* Title Badge */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xs font-mono font-bold tracking-widest text-theme-sage uppercase flex items-center gap-2"
            >
              <span className="w-8 h-[1px] bg-theme-sage" />
              <span>DATA ANALYST · FRONTEND DEVELOPER</span>
            </motion.div>

            {/* Large Editorial Name */}
            <div className="relative space-y-1 sm:space-y-2 overflow-hidden py-2">
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.1, 0.25, 1.0] }}
                className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight uppercase text-theme-main"
              >
                ANSH
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6, ease: [0.25, 0.1, 0.25, 1.0] }}
                className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight uppercase text-theme-main"
              >
                KANSARA
              </motion.div>

              {/* Thin Accent Sweep Line */}
              <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 0.8 }}
                transition={{ duration: 0.8, delay: 0.8, ease: 'easeInOut' }}
                className="absolute top-1/2 left-0 right-0 h-[1px] bg-theme-sage origin-left"
              />
            </div>

            {/* Sequential Data Initialization Checklist */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-4 border-t border-theme-muted/50 text-[11px] font-mono">
              {checklistItems.map((item, idx) => {
                const isChecked = checkIndex >= idx;
                return (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: idx <= checkIndex + 1 ? 1 : 0.2, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center justify-between p-2 bg-theme-surface/60 border border-theme-muted/40 rounded-sm"
                  >
                    <span className={isChecked ? 'text-theme-main font-medium' : 'text-theme-secondary/60'}>
                      {item}
                    </span>
                    <span className={`text-xs font-bold transition-colors ${isChecked ? 'text-theme-sage' : 'text-theme-secondary/20'}`}>
                      {isChecked ? '✓' : '·'}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Bottom Progress Bar & Data Visualization Transformation */}
          <div className="space-y-4 max-w-3xl mx-auto w-full">
            {/* Progress percentage & status */}
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-theme-secondary tracking-wider uppercase">
                {progress < 100 ? 'INITIALIZING ANALYTICAL PROFILE...' : 'PROFILE READY — REVEALING INTERFACE'}
              </span>
              <span className="text-theme-sage font-bold">
                {progress.toString().padStart(2, '0')}%
              </span>
            </div>

            {/* Signature Progress Line → Data Chart Transformation */}
            <div className="relative h-6 w-full flex items-center justify-center overflow-hidden">
              {!isMorphing ? (
                // Standard Filling Progress Line
                <div className="w-full h-[2px] bg-theme-muted relative rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-theme-sage rounded-full"
                    initial={{ width: '0%' }}
                    animate={{ width: `${progress}%` }}
                    transition={{ ease: 'easeOut', duration: 0.15 }}
                  />
                </div>
              ) : (
                // Transformed Minimal SVG Analytical Waveform Chart
                <motion.svg
                  initial={{ opacity: 0, scaleY: 0.2 }}
                  animate={{ opacity: 1, scaleY: 1 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  className="w-full h-6 text-theme-sage"
                  viewBox="0 0 600 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <motion.path
                    d="M 0 20 L 100 20 L 140 8 L 180 32 L 220 20 L 320 20 L 360 5 L 400 35 L 440 20 L 600 20"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                  />
                </motion.svg>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
