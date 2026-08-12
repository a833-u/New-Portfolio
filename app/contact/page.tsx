'use client';

import React, { useState } from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { personalDetails } from '@/data/portfolioData';
import { Mail, Phone, MapPin, Download, ArrowUpRight, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { ContactFormData } from '@/types/portfolio';

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

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    queryType: 'Recruiter Opportunity',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value as ContactFormData['queryType']
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          company: '',
          queryType: 'Recruiter Opportunity',
          subject: '',
          message: ''
        });
      } else {
        setStatus('error');
        setErrorMessage(result.error || 'Failed to deliver message. Please try again.');
      }
    } catch {
      setStatus('error');
      setErrorMessage('Network error occurred. Please try sending again.');
    }
  };

  return (
    <div className="space-y-12">
      {/* Header Section */}
      <section className="space-y-3">
        <div className="text-xs font-mono font-bold tracking-widest text-theme-sage uppercase">
          // INQUIRIES & COLLABORATION
        </div>
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-theme-main">
          Let’s Connect
        </h1>
        <p className="text-sm sm:text-base text-theme-secondary max-w-2xl leading-relaxed">
          Whether you are a recruiter discussing full-time roles, a team looking for a data analyst with frontend skills, or an organization with a project query — feel free to reach out.
        </p>
      </section>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Contact Info & Details (5 cols) */}
        <ScrollReveal className="lg:col-span-5 space-y-6">
          {/* Direct Communication Channels */}
          <div className="p-6 bg-theme-surface border border-theme-muted rounded-sm space-y-4">
            <h2 className="text-xs font-mono font-bold tracking-widest text-theme-sage uppercase border-b border-theme-muted pb-2">
              Direct Contact Details
            </h2>

            <div className="space-y-4 text-xs font-mono">
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-theme-sage mt-0.5 shrink-0" />
                <div>
                  <div className="text-[10px] text-theme-secondary uppercase tracking-wider">Email Address</div>
                  <a href={`mailto:${personalDetails.email}`} className="text-sm font-sans font-medium text-theme-main hover:text-theme-sage transition-colors">
                    {personalDetails.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-theme-sage mt-0.5 shrink-0" />
                <div>
                  <div className="text-[10px] text-theme-secondary uppercase tracking-wider">Phone Number</div>
                  <a href={`tel:${personalDetails.phone}`} className="text-sm font-sans font-medium text-theme-main hover:text-theme-sage transition-colors">
                    {personalDetails.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-theme-sage mt-0.5 shrink-0" />
                <div>
                  <div className="text-[10px] text-theme-secondary uppercase tracking-wider">Location</div>
                  <div className="text-sm font-sans font-medium text-theme-main">
                    {personalDetails.location}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Profiles & Profiles */}
          <div className="p-6 bg-theme-surface border border-theme-muted rounded-sm space-y-4">
            <h2 className="text-xs font-mono font-bold tracking-widest text-theme-sage uppercase border-b border-theme-muted pb-2">
              Professional Profiles
            </h2>

            <div className="space-y-3">
              <a
                href={personalDetails.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 border border-theme-muted rounded-sm hover:border-theme-sage transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <GithubIcon className="w-4 h-4 text-theme-sage shrink-0" />
                  <div>
                    <div className="text-xs font-semibold text-theme-main">GitHub</div>
                    <div className="text-[11px] font-mono text-theme-secondary">github.com/a833-u</div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-theme-secondary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href={personalDetails.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 border border-theme-muted rounded-sm hover:border-theme-sage transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <LinkedinIcon className="w-4 h-4 text-theme-sage shrink-0" />
                  <div>
                    <div className="text-xs font-semibold text-theme-main">LinkedIn</div>
                    <div className="text-[11px] font-mono text-theme-secondary">linkedin.com/in/ansh-kansara-583643188</div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-theme-secondary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Resume Quick Download */}
          <div className="p-6 bg-theme-surface border border-theme-muted rounded-sm space-y-3">
            <div className="text-xs font-mono font-bold text-theme-sage uppercase tracking-widest">
              Curriculum Vitae
            </div>
            <p className="text-xs text-theme-secondary leading-relaxed">
              Download a complete overview of education, technical tools, Nilesh IT Solution experience, and Deloitte certification.
            </p>
            <a
              href="/resume/Ansh_Kansara_Resume.pdf"
              download="Ansh_Kansara_Resume.pdf"
              className="flex items-center justify-center gap-2 w-full text-xs font-semibold text-theme-main bg-theme-muted hover:bg-theme-soft border border-theme-muted py-2.5 rounded-sm transition-all duration-200"
            >
              <span>Download Resume (PDF)</span>
              <Download className="w-3.5 h-3.5 text-theme-sage" />
            </a>
          </div>
        </ScrollReveal>

        {/* Server-Side Recruiter & Project Form (7 cols) */}
        <ScrollReveal className="lg:col-span-7" delay={1}>
          <div className="p-6 sm:p-8 bg-theme-surface border border-theme-muted rounded-sm space-y-6">
            <div className="space-y-1">
              <h2 className="text-lg font-semibold text-theme-main">
                Send a Message
              </h2>
              <p className="text-xs text-theme-secondary">
                Direct form delivery to akansara833@gmail.com.
              </p>
            </div>

            {status === 'success' && (
              <div className="p-4 bg-[#7C8F73]/10 border border-[#7C8F73]/30 rounded-sm flex items-start gap-3 text-xs text-theme-main">
                <CheckCircle2 className="w-4 h-4 text-theme-sage shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-theme-sage">Message Delivered Successfully</div>
                  <p className="text-theme-secondary mt-0.5">
                    Thank you for reaching out. Ansh Kansara will get back to you shortly.
                  </p>
                </div>
              </div>
            )}

            {status === 'error' && (
              <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-sm flex items-start gap-3 text-xs text-theme-main">
                <AlertCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-red-500">Submission Error</div>
                  <p className="text-theme-secondary mt-0.5">{errorMessage}</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="name" className="font-mono font-medium text-theme-secondary uppercase text-[10px]">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Sarah Jenkins"
                    className="w-full px-3 py-2 bg-theme-main border border-theme-muted rounded-sm text-theme-main placeholder:text-theme-secondary/50 focus:outline-none focus:border-theme-sage transition-colors"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="email" className="font-mono font-medium text-theme-secondary uppercase text-[10px]">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. sarah@company.com"
                    className="w-full px-3 py-2 bg-theme-main border border-theme-muted rounded-sm text-theme-main placeholder:text-theme-secondary/50 focus:outline-none focus:border-theme-sage transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="company" className="font-mono font-medium text-theme-secondary uppercase text-[10px]">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="e.g. Deloitte, TechCorp"
                    className="w-full px-3 py-2 bg-theme-main border border-theme-muted rounded-sm text-theme-main placeholder:text-theme-secondary/50 focus:outline-none focus:border-theme-sage transition-colors"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="queryType" className="font-mono font-medium text-theme-secondary uppercase text-[10px]">
                    Inquiry Type *
                  </label>
                  <select
                    id="queryType"
                    name="queryType"
                    value={formData.queryType}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-theme-main border border-theme-muted rounded-sm text-theme-main focus:outline-none focus:border-theme-sage transition-colors"
                  >
                    <option value="Recruiter Opportunity">Recruiter / Job Opportunity</option>
                    <option value="Freelance Project">Freelance Project</option>
                    <option value="Collaboration">Collaboration</option>
                    <option value="General Query">General Query</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label htmlFor="subject" className="font-mono font-medium text-theme-secondary uppercase text-[10px]">
                  Subject Line *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Full-Time Data Analyst Role Opportunity"
                  className="w-full px-3 py-2 bg-theme-main border border-theme-muted rounded-sm text-theme-main placeholder:text-theme-secondary/50 focus:outline-none focus:border-theme-sage transition-colors"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="message" className="font-mono font-medium text-theme-secondary uppercase text-[10px]">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Provide details about the opportunity, project requirements, or questions..."
                  className="w-full px-3 py-2 bg-theme-main border border-theme-muted rounded-sm text-theme-main placeholder:text-theme-secondary/50 focus:outline-none focus:border-theme-sage transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full py-3 bg-theme-sage text-[#F4F1EA] dark:text-[#171A17] font-semibold rounded-sm hover:opacity-90 active:scale-[0.99] transition-all flex items-center justify-center gap-2 shadow-sm disabled:opacity-50"
              >
                {status === 'submitting' ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <span>Submit Inquiry</span>
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
