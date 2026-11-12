'use client';

import React from 'react';
import { PlayCircle, Calculator, ShieldCheck, Clock, Eye, Headphones, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-14 pb-24 overflow-hidden border-b border-slate-200/60">
      {/* Decorative Warm-Light Mesh Orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-gradient-to-tr from-brand-200/40 via-indigo-200/30 to-purple-200/25 blur-[120px] rounded-full pointer-events-none -z-10"></div>
      
      {/* Subtle Tech Grid overlay */}
      <div className="absolute inset-0 tech-grid-bg [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          
          {/* Tagline Pill */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-panel shadow-sm text-xs font-semibold text-brand-700 mb-8 border border-brand-200/70 hover:border-brand-300 transition-all">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-600"></span>
            </span>
            <span className="font-extrabold text-slate-800">Aetherovate Software Solutions</span>
            <span className="text-slate-300">|</span>
            <span className="text-slate-600 font-normal">Innovating Reality. Powering Business Growth.</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12] mb-6">
            Transforming Ideas Into <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-indigo-600 to-brand-700">
              Intelligent Digital Realities
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-xl text-slate-600 leading-relaxed mb-10 font-normal max-w-2xl mx-auto">
            A specialized software engineering studio building ultra-fast business web applications, custom CRM/billing workflows, and intelligent WhatsApp automation for ambitious businesses.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <a
              href="#pipeline-3d"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-base shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 transition-all hover:-translate-y-0.5"
            >
              <PlayCircle className="w-5 h-5 text-brand-200" />
              <span>Watch Live 3D Team Workflow</span>
            </a>
            <a
              href="#estimator"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl glass-panel text-slate-800 font-bold text-base hover:bg-white shadow-xs transition-all hover:border-slate-300"
            >
              <Calculator className="w-5 h-5 text-brand-600" />
              <span>Calculate Project Cost</span>
            </a>
          </div>

          {/* Key Trust Guarantees */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left pt-6">
            <div className="glass-panel glass-panel-hover p-4 rounded-2xl border border-slate-200/80">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-brand-600 flex items-center justify-center font-bold mb-3">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">IP Ownership</p>
              <p className="text-sm font-extrabold text-slate-900 mt-0.5">100% Code & Assets</p>
            </div>

            <div className="glass-panel glass-panel-hover p-4 rounded-2xl border border-slate-200/80">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold mb-3">
                <Clock className="w-5 h-5" />
              </div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Delivery</p>
              <p className="text-sm font-extrabold text-slate-900 mt-0.5">Strict Sprint Timelines</p>
            </div>

            <div className="glass-panel glass-panel-hover p-4 rounded-2xl border border-slate-200/80">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold mb-3">
                <Eye className="w-5 h-5" />
              </div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Transparency</p>
              <p className="text-sm font-extrabold text-slate-900 mt-0.5">Live Staging Links</p>
            </div>

            <div className="glass-panel glass-panel-hover p-4 rounded-2xl border border-slate-200/80">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold mb-3">
                <Headphones className="w-5 h-5" />
              </div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Post-Launch</p>
              <p className="text-sm font-extrabold text-slate-900 mt-0.5">24/7 Priority Support</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
