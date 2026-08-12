'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from '@/lib/themeContext';
import GradientWaves from './GradientWaves';

export default function PortfolioGradientWaves() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div 
        suppressHydrationWarning 
        className="fixed inset-0 z-0 pointer-events-none bg-theme-main transition-colors duration-300"
      />
    );
  }

  const isDark = theme === 'dark';

  const props = isDark
    ? {
        horizonColor: '#171A17',
        waveColor: '#253527',
        crestColor: '#4C664F',
        speed: 0.7,
        amplitude: 2.2,
        waveScale: 0.55,
        waveRatio: 0.85,
        swell: 20,
        turbulence: 12,
        tilt: 1.11,
        zoom: 1.0,
        height: 5.5,
        fogDepth: 18,
        detail: 'medium' as const,
        brightness: 1.0,
        opacity: 0.85,
        mouseInteraction: true,
        parallaxStrength: 0.35,
        grain: true,
        grainIntensity: 0.03,
      }
    : {
        horizonColor: '#F4F1EA',
        waveColor: '#A3B49B',
        crestColor: '#263622', // Darker wave borders/crests while keeping wave body soft
        speed: 0.7,
        amplitude: 2.2,
        waveScale: 0.55,
        waveRatio: 0.85,
        swell: 20,
        turbulence: 12,
        tilt: 1.11,
        zoom: 1.0,
        height: 5.5,
        fogDepth: 18,
        detail: 'medium' as const,
        brightness: 1.0,
        opacity: 0.9,
        mouseInteraction: true,
        parallaxStrength: 0.35,
        grain: true,
        grainIntensity: 0.03,
      };

  return (
    <div 
      suppressHydrationWarning 
      className="fixed inset-0 z-0 pointer-events-none transition-opacity duration-500 overflow-hidden"
    >
      <GradientWaves {...props} className="h-full w-full" />
    </div>
  );
}
