'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Layers, Database, Code, CheckCircle } from 'lucide-react';

interface TechNode {
  id: string;
  name: string;
  category: 'core' | 'library' | 'pipeline' | 'output';
  projects: string[];
  description: string;
}

const techNodes: TechNode[] = [
  {
    id: 'python',
    name: 'Python',
    category: 'core',
    projects: ['Customer Shopping Behavior Analysis', 'PropVista — Real Estate Data Platform'],
    description: 'Data gathering, ETL scripting, statistical cleaning, and Pandas manipulation.'
  },
  {
    id: 'pandas-numpy',
    name: 'Pandas / NumPy',
    category: 'library',
    projects: ['Customer Shopping Behavior Analysis'],
    description: 'Tabular data transformation, RFM calculation, and numerical array processing.'
  },
  {
    id: 'sql',
    name: 'SQL / PostgreSQL',
    category: 'core',
    projects: ['Business Performance Analytics', 'Customer Shopping Behavior Analysis', 'PropVista — Real Estate Data Platform'],
    description: 'Window functions, analytical aggregations, complex joins, and database queries.'
  },
  {
    id: 'react',
    name: 'React.js / Frontend',
    category: 'core',
    projects: ['Business Performance Analytics', 'PropVista — Real Estate Data Platform', 'Nilesh IT Solution Experience'],
    description: 'Building interactive UI components, state management, and D3 visualization wrappers.'
  },
  {
    id: 'powerbi-d3',
    name: 'Power BI / D3.js',
    category: 'pipeline',
    projects: ['Business Performance Analytics', 'Customer Shopping Behavior Analysis', 'Nilesh IT Solution Experience'],
    description: 'Visual encoding, interactive charts, metric reporting, and executive dashboards.'
  },
  {
    id: 'insights',
    name: 'Data Insights → Decision',
    category: 'output',
    projects: ['Business Performance Analytics', 'Customer Shopping Behavior Analysis', 'PropVista — Real Estate Data Platform'],
    description: 'Management recommendations, search accuracy optimization, and product roadmaps.'
  }
];

export default function TechRelationshipGraph() {
  const [selectedTech, setSelectedTech] = useState<TechNode>(techNodes[0]);

  return (
    <div className="space-y-6 py-6 border-t border-theme-muted">
      <div className="space-y-1">
        <span className="text-[11px] font-mono tracking-widest text-theme-apricot uppercase font-semibold">
          Interactive Architecture
        </span>
        <h3 className="text-xl font-bold text-theme-main">
          Technology Relationship & Case Study Mapping
        </h3>
        <p className="text-xs text-theme-secondary">
          Click any technology node to explore its role and corresponding case study implementation.
        </p>
      </div>

      {/* SVG Flow Pipeline */}
      <div className="p-6 bg-theme-surface border border-theme-muted rounded-sm space-y-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {techNodes.map((node) => {
            const isSelected = selectedTech.id === node.id;
            return (
              <button
                key={node.id}
                onClick={() => setSelectedTech(node)}
                className={`p-3 text-left border rounded-sm transition-all focus:outline-none flex flex-col justify-between h-28 ${
                  isSelected
                    ? 'bg-theme-soft border-theme-sage text-theme-main shadow-sm'
                    : 'bg-theme-main/5 border-theme-muted text-theme-secondary hover:text-theme-main hover:border-theme-muted'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase text-theme-sage">
                    {node.category}
                  </span>
                  {isSelected && <span className="w-2 h-2 rounded-full bg-theme-sage" />}
                </div>
                <div className="text-xs font-mono font-bold text-theme-main">
                  {node.name}
                </div>
                <div className="text-[10px] text-theme-secondary font-mono truncate">
                  {node.projects.length} Case File{node.projects.length > 1 ? 's' : ''}
                </div>
              </button>
            );
          })}
        </div>

        {/* Dynamic Detail Card for Selected Tech */}
        <div className="p-5 bg-theme-muted/40 border border-theme-muted rounded-sm space-y-3">
          <div className="flex items-center justify-between border-b border-theme-muted pb-2">
            <span className="text-xs font-mono font-bold text-theme-sage uppercase">
              Selected Node: {selectedTech.name}
            </span>
            <span className="text-[11px] font-mono text-theme-secondary">
              Domain: {selectedTech.category.toUpperCase()}
            </span>
          </div>

          <p className="text-xs text-theme-main leading-relaxed">
            {selectedTech.description}
          </p>

          <div className="space-y-2 pt-2 border-t border-theme-muted/50">
            <span className="text-[11px] font-mono tracking-widest text-theme-secondary uppercase">
              Associated Case Studies & Professional Work
            </span>
            <div className="space-y-1.5">
              {selectedTech.projects.map((proj) => (
                <div key={proj} className="flex items-center justify-between text-xs text-theme-main bg-theme-surface p-2 border border-theme-muted rounded-sm">
                  <span className="flex items-center gap-2 font-medium">
                    <CheckCircle className="w-3.5 h-3.5 text-theme-sage" />
                    {proj}
                  </span>
                  <Link href="/projects" className="text-[11px] font-mono text-theme-sage hover:underline flex items-center gap-0.5">
                    <span>View Case Study</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
