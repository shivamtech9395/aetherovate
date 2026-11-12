// Aetherovate Software Solutions - Precision Controller with Gmail & Business Model

// ✉️ CONFIGURE YOUR GMAIL & MOBILE ALERT KEYS HERE:
// All inquiries submitted from the website form route to this Gmail & WhatsApp mobile!
const AETHEROVATE_GMAIL = "aetherovatesoftwaresolution@gmail.com";
const AETHEROVATE_WHATSAPP = "917607919233";

// 1. LIVE CORPORATE FILM CHAPTERS
const videoScenes = [
  { id: 1, start: 0, end: 1.5, title: "1. UI/UX Design Studio", desc: "\"Designs are ready, sending over.\" — Figma app screens drafted." },
  { id: 2, start: 1.5, end: 3.0, title: "2. Frontend Team (React)", desc: "\"Received, building the frontend now.\" — Live VS Code typing." },
  { id: 3, start: 3.0, end: 4.5, title: "3. Backend & API Team", desc: "\"APIs connected & database synced.\" — Server architecture." },
  { id: 4, start: 4.5, end: 6.0, title: "4. QA & Bug Shield", desc: "\"All tests passed, approved.\" — Cross-device testing on mobile." },
  { id: 5, start: 6.0, end: 9.5, title: "5. Client Live Handover", desc: "\"Final project delivery!\" — Client video call & handshake." }
];

// 2. DETAILED BUSINESS CATEGORIES & REAL-WORLD BUSINESS MODELS
const industryCategories = [
  {
    id: "healthcare",
    title: "Hospitals, Clinics & Doctors",
    shortName: "🏥 Healthcare",
    icon: "stethoscope",
    themeColor: "teal",
    badge: "High Patient Volume",
    cardClass: "card-healthcare",
    problem: "Patients wait 1-2 hours in crowded clinic waiting rooms. Manual paper appointments get double-booked, and physical paper prescriptions get lost by patients.",
    howItWorks: "1. Patient scans QR or sends WhatsApp message -> 2. Gets instant live token number -> 3. TV in clinic calls token -> 4. Doctor creates 1-click prescription -> 5. PDF sent instantly to patient's WhatsApp.",
    businessROI: "Double patient capacity (from 30 to 65+ patients daily) with zero reception chaos and zero paper costs.",
    softwareBuilt: [
      { name: "OPD Queue & Token Display System", detail: "Live TV token screen + WhatsApp queue position tracker" },
      { name: "WhatsApp Appointment Booking Bot", detail: "24/7 automated slot booking with doctor calendar sync" },
      { name: "Doctor Digital Prescription Maker", detail: "1-click PDF Rx generation with SMS/WhatsApp delivery" },
      { name: "Diagnostic Lab Reports Portal", detail: "Patient enters phone number to download PDF test reports" }
    ],
    impact: "+340% Patient Bookings • Zero Waiting Room Chaos",
    techStack: ["Next.js", "WhatsApp Cloud API", "PostgreSQL", "PDFKit"],
    priceRange: "₹20,000 - ₹45,000",
    timeline: "7 - 12 Days"
  },
  {
    id: "retail",
    title: "Supermarkets, Retail & Wholesalers",
    shortName: "🛒 Retail / POS",
    icon: "shopping-cart",
    themeColor: "emerald",
    badge: "Fastest ROI",
    cardClass: "card-retail",
    problem: "Slow manual register billing creates long lines. Expired inventory causes silent losses. Customers leave the store if checkout takes more than 3 minutes.",
    howItWorks: "1. Cashier scans barcode with laser -> 2. GST tax invoice prints in 4 seconds -> 3. Stock automatically deducts -> 4. WhatsApp alert triggers when stock is under 10 units -> 5. Daily profit & sales report sent to owner's phone.",
    businessROI: "Reduces checkout time by 65%. Eliminates 100% of billing calculation mistakes and saves ₹25,000/month in prevented inventory leakages.",
    softwareBuilt: [
      { name: "Speed POS & GST Billing Software", detail: "Barcode scan to print invoice in 5 seconds flat" },
      { name: "Low-Stock WhatsApp Alert System", detail: "Auto-alerts manager when items hit reorder threshold" },
      { name: "Customer Khata & Udhar Ledger App", detail: "Automated payment reminder SMS with UPI payment link" },
      { name: "B2B Wholesale Ordering App", detail: "Retailers place direct bulk orders on custom mobile portal" }
    ],
    impact: "Saved 18 Hours/Week • 100% Zero Calculation Errors",
    techStack: ["React", "Express", "SQLite/Postgres", "Thermal Printer API"],
    priceRange: "₹25,000 - ₹50,000",
    timeline: "8 - 14 Days"
  },
  {
    id: "realestate",
    title: "Real Estate & Builders",
    shortName: "🏢 Real Estate",
    icon: "home",
    themeColor: "amber",
    badge: "High Ticket Sales",
    cardClass: "card-realestate",
    problem: "Buyers cannot visualize plots or flats without physical site visits. Outstation and NRI buyers lose interest. Sales agents forget to follow up with leads.",
    howItWorks: "1. Buyer opens 3D interactive site map on phone -> 2. Clicks any plot to see exact dimensions, price & booking status -> 3. Pays token advance online -> 4. Lead is auto-routed to nearest broker with call recording.",
    businessROI: "Close outstation and NRI deals 3x faster without waiting for weekend site visits. Increased lead conversion by 45%.",
    softwareBuilt: [
      { name: "Project Inventory & Plot Booking Portal", detail: "Interactive site layout with available/booked plot colors" },
      { name: "3D Virtual Property Showcase", detail: "360° interactive flat & villa floor plan viewer" },
      { name: "Lead Distribution & Broker CRM", detail: "Distribute incoming Facebook/Google leads to sales agents" },
      { name: "Installment Payment Schedule Tracker", detail: "Automatic milestone billing & demand letter PDF generation" }
    ],
    impact: "₹1.4 Cr+ Deals Closed via Digital Showcase",
    techStack: ["Next.js", "Three.js", "Node.js", "Razorpay"],
    priceRange: "₹35,000 - ₹75,000",
    timeline: "14 - 21 Days"
  },
  {
    id: "fitness",
    title: "Gyms, Fitness Clubs & Salons",
    shortName: "💪 Gym / Salon",
    icon: "dumbbell",
    themeColor: "orange",
    badge: "100% Retention",
    cardClass: "card-fitness",
    problem: "Gym owners feel awkward reminding members for monthly fees face-to-face. Members forget expiration dates and delay paying for weeks.",
    howItWorks: "1. Member scans personal QR at gym entrance -> 2. Tablet welcomes them or beeps if membership is expired -> 3. System automatically sends friendly WhatsApp renewal link 3 days before expiry -> 4. Member pays via UPI.",
    businessROI: "Increases membership renewal from 60% to 94%. Recovers ₹35,000 - ₹60,000 every single month in forgotten dues.",
    softwareBuilt: [
      { name: "Member QR Code Attendance Scanner", detail: "Fast tablet check-in with expiry warning buzz" },
      { name: "Automated WhatsApp Fee Collector", detail: "Sends renewal UPI link 3 days before membership expiry" },
      { name: "Trainer Slot & Salon Appointment App", detail: "Clients pick stylist/trainer and book time slots" },
      { name: "Workout & Diet Chart Portal", detail: "Custom member dashboard for trainer-assigned routines" }
    ],
    impact: "94% On-Time Monthly Renewals • 0 Paperwork",
    techStack: ["React", "Tailwind", "WhatsApp API", "UPI Autopay"],
    priceRange: "₹18,000 - ₹35,000",
    timeline: "6 - 10 Days"
  },
  {
    id: "education",
    title: "Schools, Colleges & Coaching",
    shortName: "📚 Education",
    icon: "graduation-cap",
    themeColor: "indigo",
    badge: "Parent Trust",
    cardClass: "card-education",
    problem: "Collecting cash fees leads to accounting errors and lost paper slips. Parents constantly call about whether their child attended class.",
    howItWorks: "1. Biometric/QR scan logs student arrival -> 2. Instant WhatsApp message delivered to parents ('Your child reached coaching safely') -> 3. Monthly fee invoice sent on WhatsApp with 1-click UPI pay.",
    businessROI: "100% on-time fee collection, eliminates 4 hours of daily manual register work, and creates unbeatable parent trust.",
    softwareBuilt: [
      { name: "Online Student Fee Portal", detail: "UPI/Card fee gateway with instant GST receipt generation" },
      { name: "Daily Attendance WhatsApp Alerts", detail: "Parents receive instant alert if student is marked absent" },
      { name: "Online Test & Quiz Assessment Portal", detail: "Timed MCQ tests with instant rank generation" },
      { name: "Study Material & Video LMS", detail: "Subject-wise notes, PDF downloads, and recorded lectures" }
    ],
    impact: "99% Fee Collection On-Time • Parent WhatsApp Satisfaction",
    techStack: ["Next.js", "AWS S3", "PostgreSQL", "SMS API"],
    priceRange: "₹30,000 - ₹60,000",
    timeline: "10 - 18 Days"
  },
  {
    id: "restaurants",
    title: "Restaurants, Cafes & Cloud Kitchens",
    shortName: "🍽️ Restaurants",
    icon: "utensils",
    themeColor: "rose",
    badge: "Zero Commissions",
    cardClass: "card-restaurants",
    problem: "Paying 25% to 30% commission per order to Swiggy/Zomato destroys restaurant profit margins. Customers belong to the delivery app, not your restaurant.",
    howItWorks: "1. Customer scans table QR or clicks your WhatsApp link -> 2. Selects food with photos -> 3. Order auto-prints in kitchen (KOT) -> 4. Customer pays directly to your bank account via UPI.",
    businessROI: "Keep 100% of your food revenue. Saves ₹35,000 - ₹80,000 every month in commission deductions.",
    softwareBuilt: [
      { name: "Direct WhatsApp Food Ordering Store", detail: "Customers order direct with no 30% commission loss" },
      { name: "Table QR Digital Menu & Order System", detail: "Dine-in customers scan QR, order food, bill prints at KOT" },
      { name: "Kitchen Display Screen (KDS)", detail: "Chefs see live pending orders on wall tablet in real-time" },
      { name: "Raw Material & Recipe Inventory Tracker", detail: "Deducts paneer, cheese, dough automatically per dish made" }
    ],
    impact: "Saved ₹42,000/Month in Marketplace Commissions",
    techStack: ["React", "Node.js", "Thermal Printer API", "UPI QR"],
    priceRange: "₹22,000 - ₹48,000",
    timeline: "7 - 12 Days"
  },
  {
    id: "logistics",
    title: "Logistics, Transport & Fleet",
    shortName: "🚚 Logistics",
    icon: "truck",
    themeColor: "blue",
    badge: "Fleet Efficiency",
    cardClass: "card-logistics",
    problem: "Paper bilties get lost, drivers don't report delivery status, and clients constantly call asking 'Mera maal kahan pahucha?'.",
    howItWorks: "1. Consignment booked & digital bilty generated in 30 seconds -> 2. Driver takes photo of receiver's signature on mobile app -> 3. Client receives automatic WhatsApp tracking link with live map.",
    businessROI: "Zero lost consignment disputes. Cuts customer support calls by 45%. 100% digital proof-of-delivery.",
    softwareBuilt: [
      { name: "Consignment Booking & Bilty Generator", detail: "1-click digital bilty/consignment note generation" },
      { name: "Driver Proof-of-Delivery (POD) App", detail: "Driver uploads photo of receiver signature on phone" },
      { name: "Live Client Shipment Status Page", detail: "Clients track shipment stage by entering Bilty number" },
      { name: "Fleet Fuel & Maintenance Ledger", detail: "Track mileage, tire changes, and insurance renewals" }
    ],
    impact: "0 Lost Consignments • 100% Digital POD Records",
    techStack: ["React", "Node.js", "Google Maps API", "AWS"],
    priceRange: "₹35,000 - ₹70,000",
    timeline: "12 - 20 Days"
  },
  {
    id: "manufacturing",
    title: "Manufacturing & Production Plants",
    shortName: "🏭 Factories",
    icon: "factory",
    themeColor: "slate",
    badge: "Industrial Scale",
    cardClass: "card-manufacturing",
    problem: "Running out of unexpected raw materials halts factory production lines. Worker shift and overtime records lead to weekly salary disputes.",
    howItWorks: "1. Raw material recorded with QR batch sticker -> 2. Machine output logged digitally by supervisor -> 3. Worker biometric logs overtime automatically -> 4. Daily production & wastage dashboard on mobile.",
    businessROI: "Reduces machine idle time by 22%. Prevents raw material theft and eliminates overtime calculation disputes.",
    softwareBuilt: [
      { name: "Raw Material & Batch Production ERP", detail: "Track input raw materials to output finished goods batches" },
      { name: "Quality Check & Inspection Checklist", detail: "Engineers fill digital inspection checklist on mobile" },
      { name: "Factory Worker Shift & Attendance Tool", detail: "Biometric/QR shift logging with overtime calculations" },
      { name: "Machine Maintenance & Downtime Tracker", detail: "Preventive maintenance alerts before breakdown occurs" }
    ],
    impact: "22% Reduction in Production Idle Time",
    techStack: ["Next.js", "PostgreSQL", "Redis", "Docker"],
    priceRange: "₹45,000 - ₹95,000",
    timeline: "15 - 30 Days"
  }
];

// INITIALIZATION
document.addEventListener("DOMContentLoaded", () => {
  initVideoTheater();
  renderMobileCategoryBar();
  renderIndustryGrid();
  setupCalculator();
  setupContactForm();
  setupScrollReveal();
});

// SCROLL REVEAL ANIMATION OBSERVER
function setupScrollReveal() {
  const revealEls = document.querySelectorAll(".reveal-on-scroll");
  if (!revealEls.length) return;

  if (!("IntersectionObserver" in window)) {
    revealEls.forEach(el => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.01, rootMargin: "0px 0px -10px 0px" });

  revealEls.forEach(el => observer.observe(el));
}

// 1. MOBILE HORIZONTAL CATEGORY BAR
function renderMobileCategoryBar() {
  const bar = document.getElementById("mobile-category-bar");
  if (!bar) return;

  const pageUrls = {
    healthcare: "industries/healthcare.html",
    retail: "industries/retail.html",
    realestate: "industries/realestate.html",
    fitness: "industries/fitness.html",
    education: "industries/education.html",
    restaurants: "industries/restaurants.html",
    logistics: "industries/logistics.html",
    manufacturing: "industries/manufacturing.html"
  };

  bar.innerHTML = industryCategories.map((cat, i) => `
    <a href="${pageUrls[cat.id] || '#'}" class="app-chip ${i === 0 ? 'active' : ''}">
      ${cat.shortName}
    </a>
  `).join("");
}

// 2. VIDEO THEATER CONTROLLER
function initVideoTheater() {
  const video = document.getElementById("corp-film-video");
  const playBtn = document.getElementById("video-play-toggle");
  const timeDisplay = document.getElementById("video-timecode");
  const scenesContainer = document.getElementById("video-scenes-nav");

  if (!video || !scenesContainer) return;

  scenesContainer.innerHTML = videoScenes.map(s => `
    <button data-start="${s.start}" class="scene-pill text-left p-2.5 rounded-xl text-slate-300 transition-all text-xs flex flex-col justify-between">
      <div class="flex items-center justify-between w-full mb-1">
        <span class="font-bold text-white">${s.title}</span>
        <span class="font-mono text-[10px] text-brand-400 font-semibold">[00:0${Math.floor(s.start)}s]</span>
      </div>
      <p class="text-[11px] text-slate-400 leading-snug">${s.desc}</p>
    </button>
  `).join("");

  const scenePills = scenesContainer.querySelectorAll(".scene-pill");

  scenePills.forEach(pill => {
    pill.addEventListener("click", () => {
      const start = parseFloat(pill.getAttribute("data-start"));
      video.currentTime = start;
      video.play();
      updatePlayBtnState();
    });
  });

  if (playBtn) {
    playBtn.addEventListener("click", () => {
      if (video.paused) video.play();
      else video.pause();
      updatePlayBtnState();
    });
  }

  function updatePlayBtnState() {
    if (!playBtn) return;
    if (video.paused) {
      playBtn.innerHTML = `<i data-lucide="play" class="w-4 h-4 text-white"></i><span>Play Film</span>`;
    } else {
      playBtn.innerHTML = `<i data-lucide="pause" class="w-4 h-4 text-white"></i><span>Pause</span>`;
    }
    if (window.lucide) lucide.createIcons();
  }

  video.addEventListener("timeupdate", () => {
    const cur = video.currentTime;
    const dur = video.duration || 9.5;

    if (timeDisplay) {
      const formatTime = (t) => {
        const m = Math.floor(t / 60);
        const s = Math.floor(t % 60);
        return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
      };
      timeDisplay.textContent = `${formatTime(cur)} / ${formatTime(dur)}`;
    }

    scenePills.forEach(pill => {
      const start = parseFloat(pill.getAttribute("data-start"));
      const end = start + 1.8;
      if (cur >= start && cur < end) pill.classList.add("active");
      else pill.classList.remove("active");
    });
  });
}

// 3. RENDER BUSINESS CATEGORIES (DISTINCT THEMATIC BORDERS)
function renderIndustryGrid() {
  const container = document.getElementById("industry-grid");
  if (!container) return;

  container.innerHTML = industryCategories.map(cat => `
    <div class="industry-card distinct-card ${cat.cardClass} flex flex-col justify-between" onclick="openIndustryModal('${cat.id}')">
      <div>
        <div class="flex items-center justify-between mb-2.5">
          <div class="w-10 h-10 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center font-bold shadow-xs">
            <i data-lucide="${cat.icon}" class="w-5 h-5 text-brand-600"></i>
          </div>
          <span class="text-[10px] font-extrabold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-300">
            ${cat.badge}
          </span>
        </div>

        <h3 class="text-sm font-extrabold text-slate-900 mb-1">
          ${cat.title}
        </h3>
        
        <p class="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-3">
          ${cat.shortDesc}
        </p>

        <!-- PROBLEM & HOW IT WORKS PREVIEW -->
        <div class="bg-slate-50 p-2.5 rounded-lg border border-slate-200/90 text-[11px] mb-3">
          <span class="font-bold text-slate-700 block text-[10px] uppercase text-emerald-700">★ Business ROI:</span>
          <p class="text-slate-600 font-medium truncate">${cat.businessROI}</p>
        </div>

        <!-- SOFTWARE BUILT -->
        <div class="space-y-1 border-t border-slate-100 pt-2">
          <p class="text-[10px] font-bold uppercase tracking-wider text-slate-400">Included Modules:</p>
          ${cat.softwareBuilt.slice(0, 2).map(s => `
            <div class="text-[11px] text-slate-700 flex items-center gap-1.5 font-medium">
              <span class="w-1.5 h-1.5 rounded-full bg-brand-600 flex-shrink-0"></span>
              <span class="truncate">${s.name}</span>
            </div>
          `).join("")}
          <div class="text-[11px] text-brand-600 font-bold mt-1">
            + ${cat.softwareBuilt.length - 2} more systems &rarr;
          </div>
        </div>
      </div>

      <!-- FOOTER -->
      <div class="pt-3 border-t border-slate-200 mt-3 flex items-center justify-between text-xs">
        <span class="text-[11px] text-emerald-800 font-extrabold">${cat.priceRange}</span>
        <span class="text-brand-600 font-bold flex items-center gap-1">
          <span>See Business Model</span>
          <i data-lucide="chevron-right" class="w-3.5 h-3.5"></i>
        </span>
      </div>
    </div>
  `).join("");

  if (window.lucide) lucide.createIcons();
}

// 4. INDUSTRY MODAL (COMPLETE 3-STEP BUSINESS MODEL)
window.openIndustryModal = function(id) {
  const cat = industryCategories.find(c => c.id === id);
  if (!cat) return;

  const modal = document.getElementById("industry-detail-modal");
  const content = document.getElementById("industry-modal-content");
  if (!modal || !content) return;

  content.innerHTML = `
    <!-- HEADER -->
    <div class="flex items-center justify-between pb-4 border-b border-slate-200">
      <div class="flex items-center gap-3">
        <div class="w-12 h-12 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center font-bold">
          <i data-lucide="${cat.icon}" class="w-6 h-6"></i>
        </div>
        <div>
          <h2 class="text-lg sm:text-xl font-extrabold text-slate-900">${cat.title}</h2>
          <p class="text-xs text-slate-500 font-medium">Custom Software & Automation Business Model</p>
        </div>
      </div>
      <button onclick="closeIndustryModal()" class="w-9 h-9 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center">
        <i data-lucide="x" class="w-5 h-5"></i>
      </button>
    </div>

    <!-- 3-STEP BUSINESS MODEL BODY -->
    <div class="py-4 space-y-4 max-h-[72vh] overflow-y-auto">
      
      <!-- 1. THE PROBLEM -->
      <div class="p-3.5 rounded-xl bg-red-50/80 border border-red-200">
        <div class="flex items-center gap-1.5 text-xs font-bold text-red-900 uppercase tracking-wide mb-1">
          <i data-lucide="alert-circle" class="w-4 h-4 text-red-600"></i>
          <span>1. The Problem in Manual Business</span>
        </div>
        <p class="text-xs text-red-800 leading-relaxed">${cat.problem}</p>
      </div>

      <!-- 2. HOW OUR SOFTWARE WORKS -->
      <div class="p-3.5 rounded-xl bg-blue-50/80 border border-blue-200">
        <div class="flex items-center gap-1.5 text-xs font-bold text-brand-900 uppercase tracking-wide mb-1">
          <i data-lucide="cpu" class="w-4 h-4 text-brand-600"></i>
          <span>2. How Aetherovate Software Works & Automates It</span>
        </div>
        <p class="text-xs text-slate-800 leading-relaxed font-medium">${cat.howItWorks}</p>
      </div>

      <!-- 3. BUSINESS ROI -->
      <div class="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200">
        <div class="flex items-center gap-1.5 text-xs font-bold text-emerald-900 uppercase tracking-wide mb-1">
          <i data-lucide="trending-up" class="w-4 h-4 text-emerald-600"></i>
          <span>3. Business Return on Investment (ROI)</span>
        </div>
        <p class="text-xs text-emerald-800 font-bold leading-relaxed">${cat.businessROI}</p>
      </div>

      <!-- SOFTWARE MODULES INCLUDED -->
      <div>
        <h4 class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Modules Included In This System:</h4>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          ${cat.softwareBuilt.map(s => `
            <div class="p-3 rounded-xl bg-slate-50 border border-slate-200">
              <p class="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                <i data-lucide="check-circle-2" class="w-3.5 h-3.5 text-brand-600"></i>
                <span>${s.name}</span>
              </p>
              <p class="text-[11px] text-slate-600 mt-1 pl-5">${s.detail}</p>
            </div>
          `).join("")}
        </div>
      </div>

      <!-- TIMELINE & INVESTMENT -->
      <div class="grid grid-cols-2 gap-3 pt-1">
        <div class="p-3 rounded-xl bg-slate-100 border border-slate-200">
          <span class="text-[10px] font-bold uppercase text-slate-500">Delivery Sprint Timeline</span>
          <p class="text-xs font-extrabold text-slate-900 mt-0.5">${cat.timeline}</p>
        </div>
        <div class="p-3 rounded-xl bg-slate-100 border border-slate-200">
          <span class="text-[10px] font-bold uppercase text-slate-500">Estimated Investment</span>
          <p class="text-xs font-extrabold text-emerald-700 mt-0.5">${cat.priceRange}</p>
        </div>
      </div>
    </div>

    <!-- FOOTER ACTIONS -->
    <div class="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
      <div class="text-[11px] text-slate-500">
        100% Code Ownership • Free SSL • 1-Year Maintenance
      </div>
      <div class="flex items-center gap-2 w-full sm:w-auto">
        <a href="mailto:${AETHEROVATE_GMAIL}?subject=Software%20Inquiry%20for%20${encodeURIComponent(cat.title)}&body=Hello%20Aetherovate,%20I%20am%20interested%20in%20software%20for%20my%20${encodeURIComponent(cat.title)}%20business." class="flex-1 sm:flex-none px-4 py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs flex items-center justify-center gap-1.5 shadow-xs">
          <i data-lucide="mail" class="w-4 h-4 text-brand-600"></i>
          <span>Email Us</span>
        </a>
        <a href="https://wa.me/917607919233?text=${encodeURIComponent(`Hello Aetherovate! I want to build software for my ${cat.title} business. Please share roadmap.`)}" target="_blank" class="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm">
          <i data-lucide="message-circle" class="w-4 h-4"></i>
          <span>WhatsApp Chat</span>
        </a>
      </div>
    </div>
  `;

  modal.classList.remove("hidden");
  modal.classList.add("flex");
  if (window.lucide) lucide.createIcons();
};

window.closeIndustryModal = function() {
  const modal = document.getElementById("industry-detail-modal");
  if (modal) {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  }
};

// 5. INTERACTIVE PROJECT COST CALCULATOR
function setupCalculator() {
  const typeBtns = document.querySelectorAll(".calc-type-btn");
  const addonCheckboxes = document.querySelectorAll(".calc-addon");
  const priceDisplay = document.getElementById("estimate-price");
  const whatsappBtn = document.getElementById("send-estimate-whatsapp-btn");

  let currentBasePrice = 15000;
  let currentProjectTypeName = "High-Speed Website";

  function recalculate() {
    let total = currentBasePrice;
    let selectedAddonNames = [];

    addonCheckboxes.forEach(cb => {
      if (cb.checked) {
        total += parseInt(cb.value);
        const name = cb.closest("label").querySelector(".font-bold").textContent;
        selectedAddonNames.push(name);
      }
    });

    if (priceDisplay) {
      priceDisplay.textContent = `₹${total.toLocaleString("en-IN")}`;
    }

    if (whatsappBtn) {
      const addonsSummary = selectedAddonNames.length > 0 ? ` with ${selectedAddonNames.join(", ")}` : "";
      const text = encodeURIComponent(
        `Hello Aetherovate! I estimated my project: ${currentProjectTypeName}${addonsSummary}. Budget is ~₹${total.toLocaleString("en-IN")}. Please share blueprint.`
      );
      whatsappBtn.onclick = () => {
        window.open(`https://wa.me/917607919233?text=${text}`, "_blank");
      };
    }
  }

  typeBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      typeBtns.forEach(b => {
        b.classList.remove("active", "border-2", "border-brand-600", "bg-blue-50/80", "shadow-xs");
        b.classList.add("border", "border-white/90", "bg-white/70", "hover:bg-white");
      });

      btn.classList.add("active", "border-2", "border-brand-600", "bg-blue-50/80", "shadow-xs");
      btn.classList.remove("border", "border-white/90", "bg-white/70", "hover:bg-white");

      currentBasePrice = parseInt(btn.getAttribute("data-base"));
      currentProjectTypeName = btn.querySelector(".font-extrabold") ? btn.querySelector(".font-extrabold").textContent : "Custom Software";
      recalculate();
    });
  });

  addonCheckboxes.forEach(cb => {
    cb.addEventListener("change", recalculate);
  });

  recalculate();
}

// 6. REAL-TIME GMAIL + MOBILE WHATSAPP & PUSH DELIVERY ENGINE
function setupContactForm() {
  const form = document.getElementById("project-contact-form");
  const alertBox = document.getElementById("form-status-alert");
  const submitBtn = document.getElementById("form-submit-btn");

  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = {
      name: document.getElementById("form-name").value.trim(),
      company: document.getElementById("form-company").value.trim(),
      phone: document.getElementById("form-phone").value.trim(),
      email: document.getElementById("form-email") ? document.getElementById("form-email").value.trim() : "",
      service: document.getElementById("form-service").value,
      message: document.getElementById("form-message") ? document.getElementById("form-message").value.trim() : ""
    };

    const whatsappCheckbox = document.getElementById("form-whatsapp-notify");
    const openWhatsapp = whatsappCheckbox ? whatsappCheckbox.checked : true;

    if (window.AetherovateNotify) {
      await window.AetherovateNotify.submitLead({ form, alertBox, submitBtn, data, openWhatsapp });
    }
  });
}
