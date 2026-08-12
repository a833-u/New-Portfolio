'use client';

import React from 'react';

interface BrandLogoProps {
  id?: string;
  className?: string;
  isLarge?: boolean;
  onClick?: () => void;
}

export default function BrandLogo({ id, className = '', isLarge = false, onClick }: BrandLogoProps) {
  return (
    <div 
      id={id}
      onClick={onClick}
      className={`inline-flex flex-col items-start text-left select-none leading-none ${className}`}
    >
      <span className={`font-bold tracking-wider uppercase text-theme-main flex items-center leading-none ${
        isLarge ? 'text-4xl sm:text-7xl md:text-8xl gap-3 sm:gap-4' : 'text-sm gap-1.5'
      }`}>
        Ansh Kansara
        <span className={`rounded-full bg-theme-sage block shrink-0 ${
          isLarge ? 'w-2.5 h-2.5 sm:w-4 sm:h-4' : 'w-1.5 h-1.5'
        }`} />
      </span>
      <span className={`font-mono tracking-widest text-theme-secondary uppercase block ${
        isLarge ? 'text-xs sm:text-base mt-2 font-medium' : 'text-[10px] mt-0.5'
      }`}>
        Data Analyst · Developer
      </span>
    </div>
  );
}
