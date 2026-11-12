'use client';

import React, { useState } from 'react';
import { Layers, Globe, MessageSquare, Receipt, ShoppingCart, MapPin, Server, Check, ArrowRight } from 'lucide-react';

interface ServiceItem {
  id: string;
  title: string;
  category: string;
  badge: string;
  desc: string;
  features: string[];
  idealFor: string;
  timeline: string;
  icon: any;
}

const SERVICES: ServiceItem[] = [
  {
    id: 's-web',
    title: 'High-Converting Business Websites',
    category: 'web-apps',
    badge: 'Fast & SEO Ready',
    desc: 'Lightning-fast, mobile-first websites designed to build instant authority and turn local visitors into paying customers.',
    features: [
      'Sub-second page load times (< 1.2s)',
      'Direct WhatsApp inquiry buttons on every page',
      'Google Maps & Local SEO metadata integrated',
      'Clean contact forms linked directly to your email/phone',
      '100% responsive across mobile, tablet & desktop'
    ],
    idealFor: 'Doctors, Clinics, Retail Shops, Gyms, Consultancies, Real Estate',
    timeline: '5-7 Business Days',
    icon: Globe
  },
  {
    id: 's-whatsapp',
    title: 'WhatsApp Automation & Chatbot Systems',
    category: 'automation',
    badge: 'Instant ROI',
    desc: 'Automate customer support, booking confirmations, payment reminders, and broadcast marketing directly on official WhatsApp Cloud API.',
    features: [
      '24/7 automated instant replies to incoming leads',
      'Automated appointment & meeting reminders',
      'Order dispatch & delivery status alerts',
      'WhatsApp catalog integration for direct product orders',
      'No more missed customer calls or inquiries'
    ],
    idealFor: 'E-commerce, Diagnostic Labs, Salons, Coaching Centers, Distributors',
    timeline: '3-5 Business Days',
    icon: MessageSquare
  },
  {
    id: 's-crm',
    title: 'Smart GST Billing & Stock Inventory',
    category: 'custom-crm',
    badge: 'Zero Complications',
    desc: 'Ditch slow, clunky legacy software. Get a clean, cloud-enabled billing and inventory tracker built specifically for your business workflow.',
    features: [
      '1-click GST invoice generation (PDF print & WhatsApp send)',
      'Live barcode scanner support for quick checkout',
      'Low inventory alerts to prevent out-of-stock losses',
      'Daily profit, revenue and expense dashboard',
      'Multi-user cashier roles with fraud protection'
    ],
    idealFor: 'Wholesalers, Supermarkets, Hardware Stores, Spare Parts Dealers',
    timeline: '7-12 Business Days',
    icon: Receipt
  },
  {
    id: 's-ecom',
    title: 'Custom E-Commerce & Ordering Platforms',
    category: 'web-apps',
    badge: 'Zero Commissions',
    desc: 'Take direct orders from your customers without paying 20-30% aggregator commissions to third-party marketplaces.',
    features: [
      'Integrated Razorpay, UPI, PhonePe & Credit Cards',
      'Live order tracking dashboard for kitchen / warehouse',
      'Discount coupon codes & abandoned cart recovery',
      'Instant customer SMS & WhatsApp order notifications',
      'Full ownership of your customer database'
    ],
    idealFor: 'Boutiques, Bakeries, Direct-to-Consumer Brands, Cloud Kitchens',
    timeline: '10-14 Business Days',
    icon: ShoppingCart
  },
  {
    id: 's-gmb',
    title: 'Google Presence & Local Reputation Booster',
    category: 'local-seo',
    badge: 'Rank #1 Locally',
    desc: 'Rank on top of Google Maps when local customers search for your services in your city or neighborhood.',
    features: [
      'Google Business Profile (GMB) complete audit & optimization',
      'Automated SMS/WhatsApp 5-star review collection flow',
      'Local schema markup to dominate "near me" searches',
      'Weekly geo-tagged photo updates & post scheduling',
      'Monthly search analytics and customer call reports'
    ],
    idealFor: 'Dentists, Lawyers, Repair Centers, Cafes, Event Planners',
    timeline: 'Immediate Setup + Monthly Growth',
    icon: MapPin
  },
  {
    id: 's-saas',
    title: 'Custom Web Apps & Enterprise Portals',
    category: 'custom-crm',
    badge: 'Scalable Architecture',
    desc: 'Custom engineered software solutions tailored to solve proprietary bottlenecks in your business operations.',
    features: [
      'Next.js 14, Node.js & high-performance PostgreSQL backend',
      'Role-based access control (Admin, Manager, Client, Staff)',
      'Automated PDF report generation and analytics charts',
      'Seamless API integrations with third-party software',
      'Deployed on enterprise AWS / Vercel cloud with daily backups'
    ],
    idealFor: 'Startups, Logistics, Financial Advisors, Manufacturing Units',
    timeline: '2-4 Weeks Agile Sprints',
    icon: Server
  }
];

export default function ServicesMatrix() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered = activeCategory === 'all'
    ? SERVICES
    : SERVICES.filter(s => s.category === activeCategory);

  return (
    <section id="services" className="py-20 border-b border-slate-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel text-xs font-bold text-brand-700 uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5" />
            High-Impact Solutions
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Services Engineered for Real Business Growth
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-3">
            We don't just write code; we solve problems that save you hours of manual work and double your customer conversion.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {[
              { id: 'all', label: 'All Services' },
              { id: 'web-apps', label: 'Web & Mobile Apps' },
              { id: 'automation', label: 'WhatsApp & Automation' },
              { id: 'custom-crm', label: 'Custom Billing & CRM' },
              { id: 'local-seo', label: 'Google Presence & SEO' }
            ].map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  activeCategory === cat.id
                    ? 'bg-brand-600 text-white shadow-md shadow-brand-500/25'
                    : 'glass-panel text-slate-600 hover:text-slate-900 hover:border-slate-300'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map(s => {
            const Icon = s.icon;
            return (
              <div
                key={s.id}
                className="glass-panel glass-panel-hover rounded-3xl p-7 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center font-bold shadow-xs group-hover:bg-brand-600 group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold text-brand-700 bg-brand-50 px-3 py-1 rounded-full border border-brand-200">
                      {s.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-brand-600 transition-colors">
                    {s.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed">
                    {s.desc}
                  </p>

                  {/* Features */}
                  <div className="mt-5 space-y-2.5 border-t border-slate-100 pt-4">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">What You Get</p>
                    {s.features.map((f, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>

                  {/* Best For */}
                  <div className="mt-4 p-3 rounded-xl bg-slate-50 border border-slate-200/60 text-xs">
                    <span className="font-bold text-slate-800">Best For: </span>
                    <span className="text-slate-600">{s.idealFor}</span>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-6 border-t border-slate-100 mt-6 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400">Sprint Timeline</span>
                    <p className="text-xs font-extrabold text-slate-800">{s.timeline}</p>
                  </div>
                  <a
                    href="#contact"
                    className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-brand-600 hover:text-white text-slate-700 text-xs font-bold transition-all flex items-center gap-1.5"
                  >
                    <span>Get Scope & Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
