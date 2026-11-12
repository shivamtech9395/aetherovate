'use client';

import React from 'react';
import { CheckCircle, MapPin, ArrowRight, Star } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  category: string;
  client: string;
  location: string;
  desc: string;
  metric: string;
  tags: string[];
  rating: string;
  review: string;
}

const PROJECTS: Project[] = [
  {
    id: 'project-1',
    title: 'Apex Multispecialty Clinic Portal',
    category: 'Healthcare & Appointments',
    client: 'Apex Healthcare Ltd.',
    location: 'Jaipur, India',
    desc: 'Complete digital transformation for a 12-doctor clinic: instant WhatsApp appointment booking, patient queue tracking, and automatic SMS prescription reminders.',
    metric: '+340% Online Patient Bookings',
    tags: ['Next.js', 'WhatsApp API', 'Tailwind', 'PostgreSQL'],
    rating: '5.0',
    review: '"Patients love booking on WhatsApp without waiting in line. Aetherovate delivered in just 10 days!"'
  },
  {
    id: 'project-2',
    title: 'Royal Wood Furnishings E-Store',
    category: 'E-Commerce & Catalog',
    client: 'Royal Wood Works',
    location: 'Pune, India',
    desc: 'Modern 3D furniture showcase with WhatsApp direct checkout, custom dimension quote builder, and integrated Razorpay payment gateway.',
    metric: '₹22 Lakhs+ Orders in 60 Days',
    tags: ['React', 'Node.js', 'Razorpay', 'Tailwind CSS'],
    rating: '5.0',
    review: '"Our local store now receives orders from across Maharashtra. Clean, fast, and ultra professional."'
  },
  {
    id: 'project-3',
    title: 'SmartStock GST Billing & Inventory Tool',
    category: 'Business Automation',
    client: 'Kiran Supermarket Chain',
    location: 'Bengaluru, India',
    desc: 'Lightweight offline-capable POS software with barcode scanning, automated GST invoice PDF generation, and low-inventory WhatsApp alerts for store managers.',
    metric: 'Saved 18 Hours/Week in Billing',
    tags: ['TypeScript', 'Express', 'SQLite', 'PDFKit'],
    rating: '5.0',
    review: '"No complicated setup like traditional heavy ERPs. Any cashier learned it in 15 minutes."'
  },
  {
    id: 'project-4',
    title: 'Elevate Fitness Club Membership & CRM',
    category: 'CRM & Member Management',
    client: 'Elevate Fitness Studios',
    location: 'Mumbai, India',
    desc: 'Member check-in QR scanner, automated renewal payment reminders on WhatsApp, and trainer slot scheduling system with 0 manual paperwork.',
    metric: '94% On-Time Subscription Renewals',
    tags: ['Next.js', 'Prisma', 'Tailwind', 'Stripe/UPI'],
    rating: '4.9',
    review: '"Fees collection used to be awkward and delayed. Now automated reminders handle 100% of it."'
  },
  {
    id: 'project-5',
    title: 'OmniTrans Fleet Dispatch Tracker',
    category: 'Logistics & Cloud ERP',
    client: 'OmniTrans Logistics Pvt Ltd',
    location: 'Hyderabad, India',
    desc: 'Real-time vehicle consignment dispatch board, driver electronic Proof-of-Delivery upload, and automated client shipment status tracking links.',
    metric: '0 Lost Consignments in 6 Months',
    tags: ['React', 'Node.js', 'AWS S3', 'Leaflet Maps'],
    rating: '5.0',
    review: '"Aetherovate built our whole operations dashboard from scratch. Clients trust us twice as much now."'
  },
  {
    id: 'project-6',
    title: 'Dr. Dental Care Local SEO & Review Engine',
    category: 'Local SEO & Reputation',
    client: 'Dr. Dental Smile Studio',
    location: 'Delhi NCR, India',
    desc: 'High-speed local landing page with Google Maps top-3 ranking optimization, automated post-treatment 5-star review collector via SMS/WhatsApp.',
    metric: '#1 Rank on Google Maps (Delhi)',
    tags: ['Static SSR', 'Schema.org', 'Google Business API'],
    rating: '5.0',
    review: '"We went from 14 reviews to 180+ verified 5-star reviews in 90 days. Daily footfall doubled."'
  }
];

export default function CompletedProjects() {
  return (
    <section id="projects" className="py-20 border-b border-slate-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel text-xs font-bold text-brand-700 uppercase tracking-wider mb-3">
            <CheckCircle className="w-3.5 h-3.5" />
            Client Proof & Track Record
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Recent Systems We Built & Delivered
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-3">
            Real live client applications with verifiable metrics, client testimonials, and production code architectures.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map(p => (
            <div
              key={p.id}
              className="glass-panel glass-panel-hover rounded-3xl flex flex-col justify-between overflow-hidden group"
            >
              {/* Header */}
              <div className="p-6 pb-4 bg-gradient-to-br from-white/90 to-slate-50/70 border-b border-slate-100">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white border border-slate-200 text-slate-700 shadow-xs">
                    {p.category}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-amber-600 bg-amber-50 px-2.5 py-0.5 rounded-md border border-amber-200">
                    <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                    <span>{p.rating} Verified</span>
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-brand-600 transition-colors">
                  {p.title}
                </h3>
                <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>{p.client} • {p.location}</span>
                </p>

                {/* Metric Pill */}
                <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-emerald-200 text-emerald-700 text-xs font-bold shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>{p.metric}</span>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {p.desc}
                </p>

                {/* Client Quote */}
                <div className="bg-slate-50/90 p-3.5 rounded-xl border border-slate-200/70 italic text-xs text-slate-700">
                  {p.review}
                </div>

                {/* Tech tags */}
                <div className="pt-2">
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map(t => (
                      <span key={t} className="px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-600 text-[11px] font-mono font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Link */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-medium">100% Custom Stack</span>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-600 hover:text-brand-700 group-hover:translate-x-0.5 transition-transform"
                  >
                    <span>Request Similar System</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
