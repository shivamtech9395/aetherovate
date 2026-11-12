'use client';

import React from 'react';
import { Users } from 'lucide-react';

interface TeamMember {
  name: string;
  initials: string;
  avatarBg: string;
  role: string;
  bio: string;
  skills: string[];
}

const TEAM: TeamMember[] = [
  {
    name: 'Aarav Patel',
    initials: 'AP',
    avatarBg: 'from-brand-600 to-indigo-600',
    role: 'Lead Solutions Architect',
    bio: 'Spearheads systems design, cloud scalability, and end-to-end sprint roadmaps for zero project delays.',
    skills: ['Architecture', 'Cloud Specs', 'System Design']
  },
  {
    name: 'Priya Sharma',
    initials: 'PS',
    avatarBg: 'from-purple-600 to-pink-600',
    role: 'Lead UI/UX & Brand Designer',
    bio: 'Designs modern, high-converting interfaces in Figma that turn casual website visitors into loyal paying customers.',
    skills: ['Figma 3D', 'UI/UX Design', 'Design Tokens']
  },
  {
    name: 'Vikram Kumar',
    initials: 'VK',
    avatarBg: 'from-emerald-600 to-teal-600',
    role: 'Full-Stack Tech Lead',
    bio: 'Expert in React, Next.js, Node.js, and high-security databases. Writes lightning-fast, clean, scalable code.',
    skills: ['Next.js 14', 'Node.js', 'Clean APIs']
  },
  {
    name: 'Neha Verma',
    initials: 'NV',
    avatarBg: 'from-amber-600 to-orange-600',
    role: 'QA, Security & DevOps',
    bio: 'Stress tests applications across 20+ mobile and desktop screen sizes, guarantees 0 critical bugs and instant SSL security.',
    skills: ['QA Shield', 'DevOps CI/CD', 'Automated Testing']
  }
];

export default function TeamShowcase() {
  return (
    <section id="team" className="py-20 border-b border-slate-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel text-xs font-bold text-brand-700 uppercase tracking-wider mb-3">
            <Users className="w-3.5 h-3.5" />
            People Behind The Code
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Meet Your Dedicated In-House Team
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-3">
            No ghost freelancers or outsourced guesswork. Our in-house specialists work directly with you at every milestone.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM.map(member => (
            <div
              key={member.name}
              className="glass-panel glass-panel-hover rounded-3xl p-6 text-center group"
            >
              <div className="relative w-20 h-20 mx-auto mb-4">
                <div className={`w-full h-full rounded-2xl bg-gradient-to-tr ${member.avatarBg} text-white flex items-center justify-center font-extrabold text-2xl shadow-md group-hover:scale-105 transition-transform`}>
                  {member.initials}
                </div>
                <span className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white" title="Active"></span>
              </div>

              <h3 className="text-lg font-extrabold text-slate-900">{member.name}</h3>
              <p className="text-xs font-bold text-brand-600 mb-2">{member.role}</p>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                {member.bio}
              </p>

              <div className="flex flex-wrap items-center justify-center gap-1.5 pt-2 border-t border-slate-100">
                {member.skills.map(skill => (
                  <span key={skill} className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-md bg-slate-100 text-slate-600">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
