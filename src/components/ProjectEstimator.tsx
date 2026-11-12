'use client';

import React, { useState } from 'react';
import { Calculator, Layout, ShoppingBag, Bot, Database, Check, MessageCircle } from 'lucide-react';

interface ProjectTypeOption {
  id: string;
  name: string;
  timeline: string;
  basePrice: number;
  icon: any;
}

const PROJECT_TYPES: ProjectTypeOption[] = [
  { id: 'website', name: 'High-Speed Website', timeline: '5-7 Days', basePrice: 15000, icon: Layout },
  { id: 'ecommerce', name: 'E-Commerce Store', timeline: '10-14 Days', basePrice: 35000, icon: ShoppingBag },
  { id: 'automation', name: 'WhatsApp Automation', timeline: '3-5 Days', basePrice: 25000, icon: Bot },
  { id: 'custom', name: 'Custom SaaS / ERP', timeline: '2-4 Weeks', basePrice: 55000, icon: Database },
];

const ADDONS = [
  { id: 'gst', name: 'GST Billing & Invoicing Engine', price: 5000 },
  { id: 'gmb', name: 'Google Maps Top-3 Ranking Setup', price: 7000 },
  { id: 'dashboard', name: 'Custom Admin Analytics Dashboard', price: 10000 },
];

export default function ProjectEstimator() {
  const [selectedType, setSelectedType] = useState<ProjectTypeOption>(PROJECT_TYPES[0]);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);

  const toggleAddon = (id: string) => {
    setSelectedAddons(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const addonsTotal = selectedAddons.reduce((acc, currId) => {
    const found = ADDONS.find(a => a.id === currId);
    return acc + (found ? found.price : 0);
  }, 0);

  const grandTotal = selectedType.basePrice + addonsTotal;

  const handleWhatsAppLock = () => {
    const addonNames = selectedAddons
      .map(id => ADDONS.find(a => a.id === id)?.name)
      .filter(Boolean)
      .join(', ');

    const text = encodeURIComponent(
      `Hello Aetherovate! I estimated my project on your website:\n` +
      `• Project Type: ${selectedType.name}\n` +
      (addonNames ? `• Add-ons: ${addonNames}\n` : '') +
      `• Estimated Investment: ~₹${grandTotal.toLocaleString('en-IN')}\n\n` +
      `Please share the sprint roadmap and let's get started!`
    );

    window.open(`https://wa.me/919999999999?text=${text}`, '_blank');
  };

  return (
    <section id="estimator" className="py-20 border-b border-slate-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-4xl mx-auto glass-panel rounded-3xl p-6 sm:p-10 shadow-2xl border border-slate-200/90">
          
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-extrabold text-emerald-700 uppercase tracking-wider mb-2">
              <Calculator className="w-3.5 h-3.5" />
              Instant Transparent Pricing
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Interactive Project Cost & Timeline Estimator
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Select your requirements to see an accurate budget estimate and instant scope breakdown.
            </p>
          </div>

          <div className="space-y-8">
            
            {/* Step 1: Project Type */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                1. Select Project Type
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {PROJECT_TYPES.map(type => {
                  const Icon = type.icon;
                  const isSelected = selectedType.id === type.id;
                  return (
                    <button
                      key={type.id}
                      onClick={() => setSelectedType(type)}
                      className={`p-4 rounded-2xl text-left transition-all ${
                        isSelected
                          ? 'border-2 border-brand-600 bg-brand-50/70 shadow-sm'
                          : 'glass-panel hover:border-slate-300'
                      }`}
                    >
                      <Icon className={`w-5 h-5 mb-2 ${isSelected ? 'text-brand-600' : 'text-slate-500'}`} />
                      <div className="text-sm font-extrabold text-slate-900">{type.name}</div>
                      <div className="text-xs text-slate-500 mt-0.5">{type.timeline}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Add-on Features */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                2. Additional Features & Add-ons
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {ADDONS.map(addon => {
                  const checked = selectedAddons.includes(addon.id);
                  return (
                    <label
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`flex items-center gap-3 p-3.5 rounded-2xl cursor-pointer transition-all ${
                        checked ? 'border-2 border-brand-600 bg-brand-50/60' : 'glass-panel hover:bg-white'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => {}}
                        className="rounded text-brand-600 focus:ring-brand-500 w-4 h-4 pointer-events-none"
                      />
                      <div className="text-xs">
                        <p className="font-bold text-slate-800">{addon.name}</p>
                        <p className="text-slate-500 font-semibold">+₹{addon.price.toLocaleString('en-IN')}</p>
                      </div>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Total Estimate Banner */}
            <div className="bg-gradient-to-r from-slate-900 via-brand-950 to-indigo-950 text-white rounded-2xl p-6 sm:p-7 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
              <div>
                <p className="text-xs text-brand-300 font-mono uppercase tracking-wider">
                  Estimated Investment ({selectedType.timeline})
                </p>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-3xl sm:text-4xl font-extrabold text-white">
                    ₹{grandTotal.toLocaleString('en-IN')}
                  </span>
                  <span className="text-xs text-slate-300 font-medium">/ complete delivery</span>
                </div>
                <p className="text-xs text-slate-300 mt-2 flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  Includes 1-Year Free SSL, Domain Setup, Hosting Config & 30-day warranty
                </p>
              </div>

              <button
                onClick={handleWhatsAppLock}
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-sm shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2 transition-all hover:scale-105"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Lock Scope on WhatsApp</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
