export interface PersonalDetails {
  name: string;
  title: string;
  secondaryPositioning: string;
  location: string;
  email: string;
  phone: string;
  education: EducationItem[];
  experience: ExperienceItem[];
  certification: CertificationItem[];
  bio: string;
  mission: string;
  vision: string;
  whatMakesMeDifferent: string;
  socialLinks: {
    github: string;
    linkedin: string;
    email: string;
  };
}

export interface Metric {
  id: string;
  number: string;
  value: number;
  suffix: string;
  decimals?: number;
  label: string;
  description: string;
}

export interface EducationItem {
  year: string;
  degree: string;
  institution: string;
  cgpa: string;
}

export interface ExperienceItem {
  period: string;
  company: string;
  role: string;
  progression: string;
  location: string;
  summary: string;
  responsibilities: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
  description: string;
  pdfUrl?: string;
}

export interface CaseStudy {
  id: string;
  number: string;
  title: string;
  date: string;
  type: string;
  tools: string[];
  question: string;
  dataSummary: {
    gathering: string;
    cleaning: string;
    preprocessing: string;
    validation: string;
    analysis: string;
  };
  cleaningSteps: {
    missingValues: string;
    duplicates: string;
    inconsistencies: string;
    dataTypes: string;
  };
  sqlQuery?: string;
  results: {
    label: string;
    value: string;
  }[];
  storyPipeline: string[];
  description: string;
  resultSummary: string;
}

export interface WorkflowStep {
  number: string;
  name: string;
  description: string;
  tools: string[];
}

export interface ToolboxCategory {
  category: string;
  skills: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  queryType: 'Recruiter Opportunity' | 'Freelance Project' | 'Collaboration' | 'General Query';
  subject: string;
  message: string;
}
