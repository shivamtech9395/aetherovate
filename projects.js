// Aetherovate Software Solutions - Flagship Live Production & Client Case Studies

const projectsData = [
  {
    id: 'project-kontractor',
    featured: true,
    title: 'Kontractor.in — 3D Construction & Turnkey Platform',
    category: 'Flagship Live Platform • PropTech 3D',
    client: 'Kontractor.in',
    location: 'Lucknow & Pan-India',
    liveDomain: 'kontractor.in',
    liveUrl: 'https://kontractor.in',
    image: 'assets/project-kontractor.jpg',
    fallbackImage: 'file:///C:/Users/dell/.gemini/antigravity/brain/dc79335b-2f79-4dfe-b27c-db1217737066/.user_uploaded/media_1794464580811_bc404f94.jpg',
    desc: 'Full-stack construction tech platform featuring a 20-Style Interactive 3D House Customizer with Exploded 2-Level Cutaway View, AI Floor Plan & BOQ Estimator, Voice AI, and EN / हिन्दी / Hinglish localization.',
    metric: '20-Style 3D Spatial Studio + AI BOQ',
    metricType: 'Live Production',
    tags: ['3D Cutaway Studio', 'AI Floor Plan & BOQ', 'Voice AI', 'Multi-Language'],
    demoUrl: 'https://kontractor.in',
    rating: '5.0',
    review: '"Live production platform engineered by Aetherovate connecting homeowners directly with verified contractors, architects, and real-time 3D house previews."'
  },
  {
    id: 'project-solarscience',
    featured: true,
    title: 'SolarScience Portal — Rooftop Solar EPC & Tracker',
    category: 'Flagship Live Platform • CleanTech SaaS',
    client: 'SolarScience Portal',
    location: 'India • Solar EPC',
    liveDomain: 'solarscienceportal.in',
    liveUrl: 'https://solarscienceportal.in',
    image: 'assets/project-solarscience.jpg',
    fallbackImage: 'file:///C:/Users/dell/.gemini/antigravity/brain/dc79335b-2f79-4dfe-b27c-db1217737066/.user_uploaded/media_1794464580808_eb3fec4c.jpg',
    desc: 'Smart rooftop solar portal with live installation milestone tracker by mobile number, 8-stage EPC & DISCOM net-metering tracking, interactive Solar Calculator, audio accessibility (Listen Welcome), and EN / हिन्दी support.',
    metric: '550+ kW Installed • 90% Bill Reduction',
    metricType: 'Live Production',
    tags: ['Live Site Tracker', '8-Milestone Workflow', 'Solar Calculator', 'Voice Welcome'],
    demoUrl: 'https://solarscienceportal.in',
    rating: '4.9',
    review: '"Built end-to-end by Aetherovate with real-time DISCOM net-metering progress tracking and instant bilingual customer engagement."'
  },
  {
    id: 'project-1',
    featured: false,
    title: 'Apex Multispecialty Hospital Portal',
    category: 'Healthcare & Hospital Suite',
    client: 'Apex Healthcare Ltd.',
    location: 'Jaipur, India',
    desc: 'Complete digital transformation for a 12-doctor clinic: instant WhatsApp appointment booking, live TV queue tracking, and automatic SMS prescription delivery.',
    metric: '+340% Patient Bookings',
    metricType: 'Growth',
    tags: ['Next.js', 'WhatsApp Cloud API', 'PostgreSQL', 'PDFKit'],
    demoUrl: 'industries/healthcare.html',
    rating: '5.0',
    review: '"Patients love booking on WhatsApp without waiting in line. Aetherovate delivered in just 10 days!"'
  },
  {
    id: 'project-3',
    featured: false,
    title: 'SmartStock GST Billing & POS Engine',
    category: 'Supermarket POS & Stock Alert',
    client: 'Kiran Supermarket Chain',
    location: 'Lucknow & Bengaluru',
    desc: 'Lightweight offline-capable POS software with barcode scanning, 4-second GST tax invoicing, and low-inventory WhatsApp alerts for store managers.',
    metric: 'Saved 18 Hours/Week in Billing',
    metricType: 'Efficiency',
    tags: ['TypeScript', 'Express', 'SQLite/Postgres', 'Thermal API'],
    demoUrl: 'industries/retail.html',
    rating: '5.0',
    review: '"No complicated setup like traditional heavy ERPs. Any cashier learned it in 15 minutes."'
  },
  {
    id: 'project-4',
    featured: false,
    title: 'Elevate Fitness Club QR Membership CRM',
    category: 'Gyms, Salons & Autopay',
    client: 'Elevate Fitness Studios',
    location: 'Mumbai, India',
    desc: 'Member check-in QR scanner, automated renewal payment reminders on WhatsApp, and trainer slot scheduling system with 0 manual paperwork.',
    metric: '94% On-Time Subscription Renewals',
    metricType: 'Retention',
    tags: ['React', 'Prisma', 'Tailwind', 'UPI Autopay'],
    demoUrl: 'industries/fitness.html',
    rating: '4.9',
    review: '"Fees collection used to be awkward and delayed. Now automated reminders handle 100% of it."'
  },
  {
    id: 'project-5',
    featured: false,
    title: 'OmniTrans Fleet Dispatch & Bilty Tracker',
    category: 'Logistics, Transport & GPS',
    client: 'OmniTrans Logistics Pvt Ltd',
    location: 'Lucknow & Hyderabad',
    desc: 'Real-time vehicle consignment dispatch board, driver electronic Proof-of-Delivery upload, and automated client shipment status tracking links.',
    metric: '0 Lost Consignments in 6 Months',
    metricType: 'Reliability',
    tags: ['React', 'Node.js', 'AWS S3', 'Leaflet Maps'],
    demoUrl: 'industries/logistics.html',
    rating: '5.0',
    review: '"Aetherovate built our whole operations dashboard from scratch. Clients trust us twice as much now."'
  }
];

function renderProjects() {
  const container = document.getElementById('projects-grid');
  if (!container) return;

  const featuredProjects = projectsData.filter(p => p.featured);
  const regularProjects = projectsData.filter(p => !p.featured);

  const featuredHtml = featuredProjects.map(p => `
    <div class="glass-card p-5 sm:p-6 flex flex-col justify-between group border-2 border-brand-200/90 shadow-xl">
      <div>
        <div class="relative rounded-2xl overflow-hidden border border-white shadow-md mb-4 bg-slate-100 aspect-[16/9]">
          <img
            src="${p.image}"
            onerror="this.onerror=null;this.src='${p.fallbackImage}';"
            alt="${p.title} Live Screenshot"
            class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
          >
          <div class="absolute top-3 left-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/85 backdrop-blur-md text-white text-[11px] font-extrabold shadow-md">
            <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>LIVE: ${p.liveDomain}</span>
          </div>
          <span class="absolute top-3 right-3 inline-flex items-center gap-1 text-xs font-extrabold text-amber-800 bg-amber-100/95 px-2.5 py-1 rounded-full border border-amber-200 shadow-sm">
            ★ ${p.rating}
          </span>
        </div>

        <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
          <span class="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-blue-100/90 border border-blue-200 text-brand-800">
            ${p.category}
          </span>
          <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-extrabold">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            ${p.metric}
          </span>
        </div>

        <h3 class="text-lg sm:text-xl font-extrabold text-slate-900 group-hover:text-brand-700 transition-colors">
          ${p.title}
        </h3>
        <p class="text-xs text-slate-600 mt-2 leading-relaxed">
          ${p.desc}
        </p>

        <div class="mt-3 p-3 rounded-xl bg-white/75 border border-white italic text-xs text-slate-700 shadow-xs">
          ${p.review}
        </div>
      </div>

      <div class="pt-4 border-t border-slate-200/80 mt-4 flex flex-wrap items-center justify-between gap-2">
        <div class="flex flex-wrap gap-1.5">
          ${p.tags.map(t => `<span class="px-2 py-0.5 rounded-md bg-white/90 border border-slate-200 text-slate-700 text-[10px] font-mono font-bold">${t}</span>`).join('')}
        </div>
        <a href="${p.liveUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-brand-600 to-indigo-600 hover:from-brand-700 hover:to-indigo-700 text-white text-xs font-extrabold shadow-md transition-all">
          <span>Visit ${p.liveDomain}</span>
          <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
        </a>
      </div>
    </div>
  `).join('');

  const regularHtml = regularProjects.map(p => `
    <div class="glass-card p-6 flex flex-col justify-between group">
      <div>
        <div class="flex items-center justify-between mb-3 gap-2">
          <span class="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-blue-50/90 border border-blue-200 text-brand-700">
            ${p.category}
          </span>
          <span class="inline-flex items-center gap-1 text-xs font-extrabold text-amber-700 bg-amber-50/90 px-2 py-0.5 rounded-md border border-amber-200">
            ★ ${p.rating}
          </span>
        </div>

        <h3 class="text-lg font-extrabold text-slate-900 group-hover:text-brand-700 transition-colors">
          ${p.title}
        </h3>
        <p class="text-xs text-slate-600 mt-1 flex items-center gap-1 font-medium">
          <i data-lucide="map-pin" class="w-3.5 h-3.5 text-slate-400"></i>
          <span>${p.client} • ${p.location}</span>
        </p>

        <div class="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-50/90 border border-emerald-200 text-emerald-800 text-xs font-extrabold shadow-xs">
          <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>${p.metric}</span>
        </div>

        <p class="text-xs text-slate-600 mt-4 leading-relaxed">
          ${p.desc}
        </p>

        <div class="mt-4 p-3 rounded-xl bg-white/70 border border-white italic text-xs text-slate-700 shadow-xs">
          ${p.review}
        </div>
      </div>

      <div class="pt-5 border-t border-slate-200/70 mt-5 flex items-center justify-between gap-2">
        <div class="flex flex-wrap gap-1">
          ${p.tags.slice(0, 3).map(t => `<span class="px-2 py-0.5 rounded-md bg-white/80 border border-slate-200/80 text-slate-700 text-[10px] font-mono font-semibold">${t}</span>`).join('')}
        </div>
        <a href="${p.demoUrl}" class="inline-flex items-center gap-1 text-xs font-bold text-brand-700 hover:text-brand-900 transition-colors shrink-0">
          <span>Explore Architecture</span>
          <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
        </a>
      </div>
    </div>
  `).join('');

  container.className = "space-y-8 reveal-on-scroll is-visible";
  container.innerHTML = `
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      ${featuredHtml}
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      ${regularHtml}
    </div>
  `;

  if (window.lucide) lucide.createIcons();
}

document.addEventListener('DOMContentLoaded', renderProjects);
