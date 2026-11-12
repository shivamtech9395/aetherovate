'use client';

import React, { useState, useEffect } from 'react';
import { Layers, MessageCircle, ArrowRight, Menu, X, ShieldCheck } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-gradient-to-r from-brand-600 via-indigo-600 to-brand-700 text-white text-xs sm:text-sm py-2 px-4 text-center font-medium shadow-sm flex items-center justify-center gap-2">
        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-white/20 text-white backdrop-blur-sm">
          ⚡ LIVE ARCHITECTURE
        </span>
        <span>Watch our dedicated engineering team build & deliver projects in real-time.</span>
        <a href="#pipeline-3d" className="underline underline-offset-4 hover:text-brand-100 font-semibold ml-1">
          Take 3D Tour &rarr;
        </a>
      </div>

      {/* Main Navbar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-xl border-b border-slate-200/80 shadow-sm'
            : 'bg-white/70 backdrop-blur-md border-b border-slate-200/50'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-brand-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-brand-500/20 group-hover:scale-105 transition-transform duration-300">
              <Layers className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-extrabold tracking-tight text-slate-900">Aetherovate</span>
                <span className="text-[10px] font-bold text-brand-600 bg-brand-50 px-1.5 py-0.5 rounded border border-brand-200">
                  SOFTWARE
                </span>
              </div>
              <p className="text-[10px] text-slate-500 font-medium tracking-wide uppercase">Software Solutions</p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
            <a href="#services" className="hover:text-brand-600 transition-colors">Services</a>
            <a href="#pipeline-3d" className="hover:text-brand-600 transition-colors flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              3D Team Workflow
            </a>
            <a href="#projects" className="hover:text-brand-600 transition-colors">Client Proof</a>
            <a href="#estimator" className="hover:text-brand-600 transition-colors">Cost Calculator</a>
            <a href="#team" className="hover:text-brand-600 transition-colors">Our Team</a>
            <a href="#contact" className="hover:text-brand-600 transition-colors">Contact</a>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://wa.me/919999999999?text=Hello%20Aetherovate,%20I%20want%20to%20discuss%20a%20project%20for%20my%20business."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 bg-white/90 hover:bg-slate-50 text-slate-700 text-sm font-semibold shadow-xs transition-all hover:border-slate-300"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold shadow-md shadow-brand-500/25 hover:shadow-brand-500/40 transition-all hover:-translate-y-0.5"
            >
              <span>Start Project</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile menu toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200 px-4 pt-2 pb-6 space-y-3">
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm font-semibold text-slate-700">Services</a>
            <a href="#pipeline-3d" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm font-semibold text-brand-600">3D Team Workflow</a>
            <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm font-semibold text-slate-700">Client Proof</a>
            <a href="#estimator" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm font-semibold text-slate-700">Cost Calculator</a>
            <a href="#team" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm font-semibold text-slate-700">Our Team</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm font-semibold text-slate-700">Contact</a>
            <div className="pt-2 flex flex-col gap-2">
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 text-center text-sm font-semibold text-slate-700 bg-slate-100 rounded-xl"
              >
                Chat on WhatsApp
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 text-center text-sm font-semibold text-white bg-brand-600 rounded-xl shadow-md"
              >
                Start Your Project
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
