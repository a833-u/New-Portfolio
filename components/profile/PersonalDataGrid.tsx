import React from 'react';
import { personalDetails } from '@/data/portfolioData';

export default function PersonalDataGrid() {
  const dataItems = [
    { label: 'NAME', value: personalDetails.name },
    { label: 'LOCATION', value: personalDetails.location },
    { label: 'DEGREE', value: personalDetails.education[0].degree },
    { label: 'GRADUATED', value: personalDetails.education[0].year },
    { label: 'CGPA', value: personalDetails.education[0].cgpa },
    { label: 'EXPERIENCE', value: '1.5+ Years (Nilesh IT Solution)' },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-6 gap-x-8 py-6 border-b border-theme-muted">
      {dataItems.map((item) => (
        <div key={item.label} className="space-y-1">
          <span className="text-[10px] font-mono tracking-widest text-theme-sage uppercase font-semibold">
            {item.label}
          </span>
          <div className="text-sm font-semibold text-theme-main font-sans">
            {item.value}
          </div>
        </div>
      ))}
    </div>
  );
}
