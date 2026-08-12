import React from 'react';
import Link from 'next/link';
import { personalDetails } from '@/data/portfolioData';
import { ArrowUpRight, Mail } from 'lucide-react';

const GithubIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

const LinkedinIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.7a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="w-full border-t border-theme-muted bg-theme-main/60 backdrop-blur-sm pt-12 pb-8 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-theme-muted">
          {/* Identity Column */}
          <div className="space-y-2">
            <span className="text-xs font-mono tracking-widest text-theme-sage uppercase">
              // IDENTITY
            </span>
            <p className="text-sm font-semibold text-theme-main">
              {personalDetails.name}
            </p>
            <p className="text-xs text-theme-secondary leading-relaxed">
              {personalDetails.title} based in {personalDetails.location}. Turning raw data into decisions and complex interfaces into simple experiences.
            </p>
          </div>

          {/* Quick Navigation — Accessible Touch Targets (min 28px height) */}
          <div className="space-y-2">
            <span className="text-xs font-mono tracking-widest text-theme-sage uppercase">
              // NAVIGATION
            </span>
            <div className="grid grid-cols-2 gap-y-1.5 gap-x-3 text-xs font-medium">
              <Link 
                href="/profile" 
                className="min-h-[28px] py-1 inline-flex items-center text-theme-secondary hover:text-theme-main transition-colors"
              >
                Profile
              </Link>
              <Link 
                href="/work" 
                className="min-h-[28px] py-1 inline-flex items-center text-theme-secondary hover:text-theme-main transition-colors"
              >
                Work
              </Link>
              <Link 
                href="/projects" 
                className="min-h-[28px] py-1 inline-flex items-center text-theme-secondary hover:text-theme-main transition-colors"
              >
                Projects
              </Link>
              <Link 
                href="/analytics" 
                className="min-h-[28px] py-1 inline-flex items-center text-theme-secondary hover:text-theme-main transition-colors"
              >
                Analytics
              </Link>
              <Link 
                href="/contact" 
                className="min-h-[28px] py-1 inline-flex items-center text-theme-secondary hover:text-theme-main transition-colors"
              >
                Contact
              </Link>
              <a
                href="/resume/Ansh_Kansara_Resume.pdf"
                download="Ansh_Kansara_Resume.pdf"
                className="min-h-[28px] py-1 inline-flex items-center text-theme-sage hover:underline"
              >
                Resume PDF
              </a>
            </div>
          </div>

          {/* Connect Column */}
          <div className="space-y-2">
            <span className="text-xs font-mono tracking-widest text-theme-sage uppercase">
              // CONNECT & SOCIAL
            </span>
            <div className="flex flex-col space-y-1.5 text-xs font-mono">
              <a
                href={personalDetails.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[28px] py-1 inline-flex items-center gap-2 text-theme-secondary hover:text-theme-main transition-colors group"
              >
                <GithubIcon className="w-3.5 h-3.5 text-theme-sage shrink-0" />
                <span>GitHub (a833-u)</span>
                <ArrowUpRight className="w-3 h-3 text-theme-secondary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a
                href={personalDetails.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[28px] py-1 inline-flex items-center gap-2 text-theme-secondary hover:text-theme-main transition-colors group"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-theme-sage shrink-0" />
                <span>LinkedIn (ansh-kansara)</span>
                <ArrowUpRight className="w-3 h-3 text-theme-secondary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a
                href={personalDetails.socialLinks.email}
                className="min-h-[28px] py-1 inline-flex items-center gap-2 text-theme-secondary hover:text-theme-main transition-colors group"
              >
                <Mail className="w-3.5 h-3.5 text-theme-sage shrink-0" />
                <span>akansara833@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-theme-secondary gap-4">
          <div>
            © {new Date().getFullYear()} Ansh Kansara. Editorial Data Portfolio.
          </div>
          <div className="flex items-center space-x-4">
            <span>Vadodara, India</span>
            <span>·</span>
            <span>Available for Hire</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
