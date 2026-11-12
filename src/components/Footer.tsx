'use client';

import React from 'react';
import { Layers, Linkedin, Github, Twitter, Instagram, MessageCircle, Youtube, MapPin, Mail, Phone, Calendar, Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/80 bg-white/70 backdrop-blur-xl text-slate-600 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-200">
          
          {/* Brand & Socials */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-brand-600 to-indigo-600 flex items-center justify-center text-white shadow-md">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <span className="text-lg font-extrabold text-slate-900 tracking-tight">Aetherovate</span>
                <p className="text-[10px] text-slate-500 font-medium tracking-wide uppercase">Software Solutions</p>
              </div>
            </a>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-sm">
              Empowering local businesses and scaling ventures with high-performance web applications, automated billing workflows, and modern cloud engineering.
            </p>

            {/* Social Media Links */}
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">Connect With Us</p>
              <div className="flex items-center gap-2.5">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-xl border border-slate-200 bg-white hover:bg-brand-50 hover:text-brand-600 hover:border-brand-200 flex items-center justify-center text-slate-600 transition-all shadow-xs"
                  title="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-xl border border-slate-200 bg-white hover:bg-slate-100 hover:text-slate-900 hover:border-slate-300 flex items-center justify-center text-slate-600 transition-all shadow-xs"
                  title="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-xl border border-slate-200 bg-white hover:bg-sky-50 hover:text-sky-500 hover:border-sky-200 flex items-center justify-center text-slate-600 transition-all shadow-xs"
                  title="Twitter / X"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-xl border border-slate-200 bg-white hover:bg-pink-50 hover:text-pink-600 hover:border-pink-200 flex items-center justify-center text-slate-600 transition-all shadow-xs"
                  title="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://wa.me/919999999999"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-xl border border-slate-200 bg-white hover:bg-emerald-50 hover:text-emerald-600 hover:border-emerald-200 flex items-center justify-center text-slate-600 transition-all shadow-xs"
                  title="WhatsApp"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-xl border border-slate-200 bg-white hover:bg-red-50 hover:text-red-600 hover:border-red-200 flex items-center justify-center text-slate-600 transition-all shadow-xs"
                  title="YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">Core Services</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li><a href="#services" className="hover:text-brand-600 transition-colors">Business Websites</a></li>
              <li><a href="#services" className="hover:text-brand-600 transition-colors">WhatsApp Automation</a></li>
              <li><a href="#services" className="hover:text-brand-600 transition-colors">GST Billing Systems</a></li>
              <li><a href="#services" className="hover:text-brand-600 transition-colors">E-Commerce Stores</a></li>
              <li><a href="#services" className="hover:text-brand-600 transition-colors">Google Maps & SEO</a></li>
            </ul>
          </div>

          {/* Process Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">Development Stages</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li><a href="#pipeline-3d" className="hover:text-brand-600 transition-colors">1. Scope Architecture</a></li>
              <li><a href="#pipeline-3d" className="hover:text-brand-600 transition-colors">2. UI/UX Prototype</a></li>
              <li><a href="#pipeline-3d" className="hover:text-brand-600 transition-colors">3. Sprint Engineering</a></li>
              <li><a href="#pipeline-3d" className="hover:text-brand-600 transition-colors">4. Security & QA Shield</a></li>
              <li><a href="#pipeline-3d" className="hover:text-brand-600 transition-colors">5. Cloud Handover</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">Office & Support</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-brand-600 flex-shrink-0 mt-0.5" />
                <span>Tech Hub, Cyber City, India</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-600 flex-shrink-0" />
                <a href="mailto:contact@aetherovate.com" className="hover:text-brand-600">contact@aetherovate.com</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-600 flex-shrink-0" />
                <span>+91 99999 99999</span>
              </li>
              <li className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-brand-600 flex-shrink-0" />
                <span>Mon - Sat: 9:30 AM - 7:30 PM</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 Aetherovate Software Solutions. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-1.5 text-emerald-600 font-semibold">
              <Shield className="w-3.5 h-3.5" />
              100% Client Code Ownership Guaranteed
            </span>
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
