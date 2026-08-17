'use client';

import React from 'react';
import Link from 'next/link';

interface StarBorderProps {
  as?: React.ElementType | string;
  className?: string;
  color?: string;
  speed?: string;
  thickness?: number;
  children: React.ReactNode;
  href?: string;
  onClick?: React.MouseEventHandler;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  download?: string | boolean;
  target?: string;
  rel?: string;
  [key: string]: unknown;
}

export default function StarBorder({
  as: Component = 'button',
  className = '',
  color,
  speed = '5s',
  thickness = 1,
  children,
  href,
  onClick,
  type,
  disabled,
  download,
  target,
  rel,
  ...props
}: StarBorderProps) {
  // Determine whether to use Next.js Link (for internal nav) or standard element
  const isInternalLink = href && !download && href.startsWith('/');

  const starColor = color || 'var(--cta-accent, #7C8F73)';

  const content = (
    <div
      className={`relative inline-block overflow-hidden rounded-lg p-[${thickness}px] focus:outline-none transition-all duration-200 active:scale-[0.98] group cursor-pointer ${className}`}
      style={{ padding: `${thickness}px` }}
    >
      {/* Top Animated Star Movement Layer */}
      <div
        className="absolute inset-0 w-[300%] h-[300%] -top-[100%] -left-[100%] pointer-events-none rounded-lg animate-star-movement-top opacity-80 group-hover:opacity-100 transition-opacity"
        style={{
          background: `radial-gradient(circle, ${starColor} 0%, transparent 60%)`,
          animationDuration: speed,
        }}
      />

      {/* Bottom Animated Star Movement Layer */}
      <div
        className="absolute inset-0 w-[300%] h-[300%] -bottom-[100%] -right-[100%] pointer-events-none rounded-lg animate-star-movement-bottom opacity-80 group-hover:opacity-100 transition-opacity"
        style={{
          background: `radial-gradient(circle, ${starColor} 0%, transparent 60%)`,
          animationDuration: speed,
        }}
      />

      {/* Theme-Aware Inner Surface & Primary Content Container */}
      <div className="relative z-[1] flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[var(--cta-surface,#20231F)] text-[var(--cta-text,#F4F1EA)] border border-[var(--cta-border,#343B33)] font-mono text-xs font-bold uppercase tracking-wider transition-all">
        {children}
      </div>
    </div>
  );

  if (isInternalLink) {
    return (
      <Link href={href} onClick={onClick} className="inline-block" {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        download={download}
        target={target}
        rel={rel}
        className="inline-block"
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className="inline-block bg-transparent border-0 p-0 text-left cursor-pointer"
      {...props}
    >
      {content}
    </button>
  );
}
