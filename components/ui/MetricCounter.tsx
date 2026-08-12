'use client';

import React, { useEffect, useState } from 'react';
import { useInView } from 'framer-motion';

interface MetricCounterProps {
  numberStr: string;
  targetValue: number;
  suffix?: string;
  decimals?: number;
  label: string;
  description: string;
}

export default function MetricCounter({
  numberStr,
  targetValue,
  suffix = '',
  decimals = 0,
  label,
  description
}: MetricCounterProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [currentValue, setCurrentValue] = useState<number | null>(null);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1200;
    const steps = 30;
    const increment = targetValue / steps;
    const stepTime = duration / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= targetValue) {
        setCurrentValue(targetValue);
        clearInterval(timer);
      } else {
        setCurrentValue(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, targetValue]);

  const formattedDisplay = currentValue !== null
    ? `${currentValue.toFixed(decimals)}${suffix}`
    : numberStr;

  return (
    <div ref={ref} className="space-y-1" suppressHydrationWarning>
      <div className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight font-sans text-theme-main" suppressHydrationWarning>
        {formattedDisplay}
      </div>
      <div className="text-[11px] font-mono tracking-widest text-theme-sage uppercase font-semibold">
        {label}
      </div>
      <p className="text-xs text-theme-secondary leading-relaxed pt-0.5 max-w-xs">
        {description}
      </p>
    </div>
  );
}
