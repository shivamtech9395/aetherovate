'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Cpu, CheckCircle2, ChevronLeft, ChevronRight, Terminal, MousePointer } from 'lucide-react';

interface StageInfo {
  id: number;
  name: string;
  initials: string;
  avatarBg: string;
  role: string;
  deskName: string;
  status: string;
  desc: string;
  deliverable: string;
  tools: string[];
  log: string[];
  camX: number;
  camY: number;
  camZ: number;
}

const STAGES: StageInfo[] = [
  {
    id: 0,
    name: "Aarav Patel",
    initials: "AP",
    avatarBg: "from-brand-600 to-indigo-600",
    role: "Lead Solutions Architect & PM",
    deskName: "Station 1: Discovery & Architecture Blueprint",
    status: "Analyzing Scope & Database Schema",
    desc: "Hum client ke exact business model ko deeply analyze karte hain, required features list banate hain, aur database aur system architecture ka solid blueprint prepare karte hain.",
    deliverable: "Project Scope Document & Tech Architecture Matrix",
    tools: ["System Architecture", "Jira / Linear", "Database Schema", "Mermaid Docs"],
    log: [
      "> ARCH_SPEC: analyzing client business logic...",
      "> DB_SCHEMA: PostgreSQL relational model defined",
      "> TIMELINE: 2-week sprint roadmap approved",
      "> HANDOVER: forwarding token to UI/UX studio..."
    ],
    camX: -10, camY: 7, camZ: 12
  },
  {
    id: 1,
    name: "Priya Sharma",
    initials: "PS",
    avatarBg: "from-purple-600 to-pink-600",
    role: "Lead UI/UX & Brand Designer",
    deskName: "Station 2: UI/UX Creative Design Studio",
    status: "Crafting Interactive Prototypes",
    desc: "Aarav ke blueprint ke baad Priya modern, high-converting Figma prototypes create karti hain. Mobile-friendly layouts, typography, aur visual brand identity design hoti hai.",
    deliverable: "High-Fidelity Figma Prototype & Design Tokens",
    tools: ["Figma 3D", "Design Tokens", "Micro-Interactions", "Responsive Grids"],
    log: [
      "> FIGMA_SYNC: 14 mobile & desktop screens drafted",
      "> COLOR_SYSTEM: Trust Blue #2563eb + Light Slate",
      "> CLIENT_REVIEW: 100% approved without revisions",
      "> HANDOVER: passing components to Full-Stack team..."
    ],
    camX: -5, camY: 7, camZ: 10
  },
  {
    id: 2,
    name: "Vikram Kumar & Team",
    initials: "VK",
    avatarBg: "from-emerald-600 to-teal-600",
    role: "Full-Stack Tech Lead & Devs",
    deskName: "Station 3: Full-Stack Engineering Bay",
    status: "Live Coding & Database Integration",
    desc: "Engineering team design ko lightning-fast code me convert karti hai. Next.js, clean APIs, WhatsApp webhooks aur high-security payments seamlessly connect hote hain.",
    deliverable: "Functional Web Application & Automated Backend",
    tools: ["React / Next.js", "Node.js", "Tailwind CSS", "WhatsApp Cloud API", "REST/GraphQL"],
    log: [
      "> CODE_COMMIT: modular components built (0 bloat)",
      "> API_INTEGRATION: WhatsApp webhook hooked",
      "> DB_SEED: test databases compiled cleanly",
      "> HANDOVER: passing build bundle to QA Chamber..."
    ],
    camX: 0, camY: 7, camZ: 12
  },
  {
    id: 3,
    name: "Neha Verma",
    initials: "NV",
    avatarBg: "from-amber-600 to-orange-600",
    role: "QA, Security & Performance Tester",
    deskName: "Station 4: Quality & Security Shield Chamber",
    status: "Stress Testing & Zero-Bug Audit",
    desc: "Neha system ko 20+ alag-alag phones aur laptops par test karti hain. Speed load times, SSL security, form validation aur payment gateway checks verify kiye jaate hain.",
    deliverable: "QA Security Certificate & 100% Bug-Free Report",
    tools: ["Playwright / Jest", "Lighthouse 100/100", "SSL Hardening", "Cross-Device Testing"],
    log: [
      "> TEST_RUN: 48 automated test cases executed",
      "> LIGHTHOUSE: 98/100 Mobile Performance Score",
      "> SECURITY: 0 critical vulnerabilities found",
      "> HANDOVER: verified build approved for Cloud Launch..."
    ],
    camX: 5, camY: 7, camZ: 10
  },
  {
    id: 4,
    name: "Kabir Singh",
    initials: "KS",
    avatarBg: "from-blue-600 to-sky-600",
    role: "Cloud DevOps & Handover Specialist",
    deskName: "Station 5: Cloud Deployment & Client Handover",
    status: "Live Production Deployment & Handover",
    desc: "Project live cloud servers par deploy hota hai with automated daily backups. Client ko admin credentials, source code ownership, aur live training provide ki jaati hai.",
    deliverable: "Live Website / App URL + 100% Code Ownership Keys",
    tools: ["Vercel / AWS", "Custom Domain DNS", "Daily Cloud Backups", "1-Year Warranty"],
    log: [
      "> CLOUD_DEPLOY: SSL installed & DNS pointed",
      "> BACKUP_DAEMON: automated daily snapshots enabled",
      "> HANDOVER_SUCCESS: client keys generated!",
      "> STATUS: 100% LIVE IN PRODUCTION 🚀"
    ],
    camX: 10, camY: 7, camZ: 12
  }
];

export default function ThreeOfficePipeline() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [activeStage, setActiveStage] = useState(0);

  const stage = STAGES[activeStage];

  // Three.js State Refs
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const tokenRef = useRef<THREE.Group | null>(null);
  const targetCamPos = useRef(new THREE.Vector3(-10, 7, 12));
  const tokenTargetPos = useRef(new THREE.Vector3(-10, 1.9, 0.15));
  const workstationsRef = useRef<THREE.Group[]>([]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // 1. Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf1f5f9); // Clean light slate
    sceneRef.current = scene;

    // 2. Camera
    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 1000);
    camera.position.set(0, 14, 22);
    camera.lookAt(0, 1.5, 0);
    cameraRef.current = camera;

    // 3. Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    rendererRef.current = renderer;

    container.appendChild(renderer.domElement);

    // 4. Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xffffff, 0.7);
    sunLight.position.set(15, 25, 15);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.width = 1024;
    sunLight.shadow.mapSize.height = 1024;
    scene.add(sunLight);

    const fillLight = new THREE.DirectionalLight(0xdbeafe, 0.4);
    fillLight.position.set(-15, 15, -10);
    scene.add(fillLight);

    // 5. Floor & Connecting Pipeline Rail
    const floorGeo = new THREE.PlaneGeometry(38, 20);
    const floorMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.2 });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;
    scene.add(floor);

    const gridHelper = new THREE.GridHelper(38, 38, 0xe2e8f0, 0xf8fafc);
    gridHelper.position.y = 0.01;
    scene.add(gridHelper);

    // Pipeline rail
    const railCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-10, 0.05, 0),
      new THREE.Vector3(-5, 0.05, 0),
      new THREE.Vector3(0, 0.05, 0),
      new THREE.Vector3(5, 0.05, 0),
      new THREE.Vector3(10, 0.05, 0),
    ]);
    const railGeo = new THREE.TubeGeometry(railCurve, 64, 0.1, 8, false);
    const railMat = new THREE.MeshStandardMaterial({
      color: 0x2563eb,
      emissive: 0x1d4ed8,
      emissiveIntensity: 0.6,
    });
    scene.add(new THREE.Mesh(railGeo, railMat));

    // 6. Build 5 Workstations with Avatars & Laptops
    const colors = [
      { shirt: 0x2563eb, accent: 0x60a5fa },
      { shirt: 0x9333ea, accent: 0xf472b6 },
      { shirt: 0x059669, accent: 0x34d399 },
      { shirt: 0xd97706, accent: 0xfbbf24 },
      { shirt: 0x0284c7, accent: 0x38bdf8 },
    ];

    workstationsRef.current = [];

    for (let i = 0; i < 5; i++) {
      const posX = -10 + i * 5;
      const wsGroup = new THREE.Group();
      wsGroup.position.set(posX, 0, 0);

      // Desk
      const deskTopGeo = new THREE.BoxGeometry(3.4, 0.14, 1.8);
      const deskTopMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.3 });
      const desk = new THREE.Mesh(deskTopGeo, deskTopMat);
      desk.position.set(0, 1.4, 0);
      desk.castShadow = true;
      wsGroup.add(desk);

      // Laptop
      const laptopBaseGeo = new THREE.BoxGeometry(0.9, 0.03, 0.65);
      const laptopBaseMat = new THREE.MeshStandardMaterial({ color: 0x334155, metalness: 0.8 });
      const laptopBase = new THREE.Mesh(laptopBaseGeo, laptopBaseMat);
      laptopBase.position.set(0, 1.48, 0.15);
      wsGroup.add(laptopBase);

      const screenGeo = new THREE.BoxGeometry(0.88, 0.55, 0.02);
      const screenMat = new THREE.MeshStandardMaterial({
        color: colors[i].accent,
        emissive: colors[i].accent,
        emissiveIntensity: 0.8,
      });
      const screen = new THREE.Mesh(screenGeo, screenMat);
      screen.position.set(0, 1.76, -0.15);
      screen.rotation.x = -0.15;
      wsGroup.add(screen);

      // Avatar
      const avatar = new THREE.Group();
      avatar.position.set(0, 0, 0.85);

      const bodyGeo = new THREE.CylinderGeometry(0.38, 0.44, 0.8, 16);
      const bodyMat = new THREE.MeshStandardMaterial({ color: colors[i].shirt });
      const body = new THREE.Mesh(bodyGeo, bodyMat);
      body.position.set(0, 1.45, 0);
      avatar.add(body);

      const headGeo = new THREE.SphereGeometry(0.24, 20, 20);
      const headMat = new THREE.MeshStandardMaterial({ color: 0xfcd34d });
      const head = new THREE.Mesh(headGeo, headMat);
      head.position.set(0, 2.05, 0);
      avatar.add(head);

      wsGroup.add(avatar);

      // Floating Badge
      const badgeGeo = new THREE.BoxGeometry(0.75, 0.75, 0.75);
      const badgeMat = new THREE.MeshStandardMaterial({
        color: colors[i].accent,
        emissive: colors[i].shirt,
        emissiveIntensity: 0.5,
        wireframe: true,
      });
      const badge = new THREE.Mesh(badgeGeo, badgeMat);
      badge.position.set(0, 2.7, 0);
      wsGroup.add(badge);

      wsGroup.userData = { avatar, badge, index: i };
      workstationsRef.current.push(wsGroup);
      scene.add(wsGroup);
    }

    // 7. Project Handover Token
    const tokenGroup = new THREE.Group();
    const coreGeo = new THREE.OctahedronGeometry(0.4, 0);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0x2563eb,
      emissive: 0x3b82f6,
      emissiveIntensity: 1,
    });
    tokenGroup.add(new THREE.Mesh(coreGeo, coreMat));

    const auraGeo = new THREE.SphereGeometry(0.6, 16, 16);
    const auraMat = new THREE.MeshBasicMaterial({ color: 0x60a5fa, wireframe: true, transparent: true, opacity: 0.6 });
    tokenGroup.add(new THREE.Mesh(auraGeo, auraMat));

    tokenGroup.position.set(-10, 1.9, 0.15);
    tokenRef.current = tokenGroup;
    scene.add(tokenGroup);

    // 8. Animation Loop
    let animId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Smooth camera interpolation
      camera.position.lerp(targetCamPos.current, 0.05);
      camera.lookAt(targetCamPos.current.x, 1.5, 0);

      // Token animation
      if (tokenRef.current) {
        tokenRef.current.position.lerp(tokenTargetPos.current, 0.06);
        tokenRef.current.rotation.y = elapsed * 2;
        tokenRef.current.rotation.z = Math.sin(elapsed * 3) * 0.3;
      }

      // Workstation avatar & badge bobbing
      workstationsRef.current.forEach((ws, idx) => {
        const { avatar, badge } = ws.userData;
        if (avatar) avatar.position.y = Math.sin(elapsed * 4 + idx) * 0.015;
        if (badge) {
          badge.rotation.y = elapsed * 0.8 + idx;
          badge.position.y = 2.7 + Math.sin(elapsed * 2 + idx) * 0.08;
        }
      });

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  // Handle stage change
  const selectStage = (index: number) => {
    setActiveStage(index);
    const s = STAGES[index];
    targetCamPos.current.set(s.camX, s.camY, s.camZ);
    const targetX = -10 + index * 5;
    tokenTargetPos.current.set(targetX, 1.9, 0.15);
  };

  return (
    <section id="pipeline-3d" className="py-20 border-b border-slate-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel text-xs font-bold text-brand-700 uppercase tracking-wider mb-3">
            <Cpu className="w-3.5 h-3.5" />
            The Virtual Software House
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            How Aetherovate Builds & Delivers Your Project
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-3">
            Real team. Real workstations. Watch our 5-station engineering pipeline take your project from initial idea to live cloud handover!
          </p>
        </div>

        {/* 3D Viewer + Side Inspector Wrapper */}
        <div className="glass-panel rounded-3xl border border-slate-200/90 shadow-2xl overflow-hidden">
          
          {/* Top Stages Bar */}
          <div className="bg-white/80 backdrop-blur-md border-b border-slate-200/80 p-3 sm:p-4 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                Live 3D Pipeline
              </span>
            </div>

            {/* Stage Selector Buttons */}
            <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto py-1">
              {STAGES.map((s, idx) => (
                <button
                  key={s.id}
                  onClick={() => selectStage(idx)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    activeStage === idx
                      ? 'bg-brand-600 text-white shadow-md shadow-brand-500/25'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {idx + 1}. {s.name.split(' ')[0]}
                </button>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-1.5 text-xs text-slate-500 font-mono">
              <MousePointer className="w-3.5 h-3.5 text-brand-600" />
              <span>Interactive 3D Scene</span>
            </div>
          </div>

          {/* Grid Layout: 3D Canvas + Side Drawer */}
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[540px]">
            
            {/* 3D Canvas */}
            <div className="lg:col-span-8 relative h-[380px] sm:h-[480px] lg:h-[540px] bg-gradient-to-b from-slate-100/90 to-slate-200/70" ref={mountRef}>
              
              <div className="absolute top-4 left-4 glass-panel px-3 py-1.5 rounded-xl text-xs font-medium text-slate-700 pointer-events-none">
                📍 {stage.deskName}
              </div>

              <div className="absolute bottom-4 left-4 right-4 glass-panel p-3.5 rounded-2xl flex items-center justify-between text-xs font-medium shadow-md">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-600 animate-ping"></span>
                  <span className="font-bold text-slate-900">{stage.status}</span>
                </div>
                <span className="text-brand-600 font-bold">Stage {activeStage + 1} of 5</span>
              </div>
            </div>

            {/* Side Workstation Details Panel */}
            <div className="lg:col-span-4 bg-white/95 backdrop-blur-xl p-6 border-t lg:border-t-0 lg:border-l border-slate-200 flex flex-col justify-between">
              <div>
                {/* Team Person Header */}
                <div className="flex items-center gap-3.5 pb-4 border-b border-slate-100">
                  <div className="relative">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${stage.avatarBg} text-white flex items-center justify-center font-extrabold text-lg shadow-md`}>
                      {stage.initials}
                    </div>
                    <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white"></span>
                  </div>
                  <div>
                    <h3 className="text-base font-extrabold text-slate-900">{stage.name}</h3>
                    <p className="text-xs text-brand-600 font-bold">{stage.role}</p>
                    <p className="text-[11px] text-slate-500 font-mono mt-0.5">Active at Workstation</p>
                  </div>
                </div>

                {/* Desk Details */}
                <div className="mt-5 space-y-4">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">What Happens Here</h4>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{stage.desc}</p>
                  </div>

                  {/* Deliverable */}
                  <div className="bg-slate-50/80 rounded-xl p-3.5 border border-slate-200/80">
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="font-bold text-slate-700">Station Deliverable</span>
                      <span className="text-emerald-600 font-bold flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        Verified
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 font-mono">{stage.deliverable}</p>
                  </div>

                  {/* Tools */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Tools & Tech Used</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {stage.tools.map((t) => (
                        <span key={t} className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-medium">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Terminal Log */}
                  <div>
                    <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                      <Terminal className="w-3.5 h-3.5" />
                      Live Terminal Feed
                    </div>
                    <div className="bg-slate-900 rounded-xl p-3 text-[11px] font-mono text-emerald-400 leading-relaxed shadow-inner">
                      {stage.log.map((l, i) => (
                        <div key={i}>{l}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="pt-6 border-t border-slate-100 mt-6 flex items-center gap-2">
                <button
                  onClick={() => selectStage((activeStage - 1 + STAGES.length) % STAGES.length)}
                  className="flex-1 py-2.5 px-3 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs font-bold flex items-center justify-center gap-1 transition-all"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Previous</span>
                </button>
                <button
                  onClick={() => selectStage((activeStage + 1) % STAGES.length)}
                  className="flex-1 py-2.5 px-3 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold flex items-center justify-center gap-1 shadow-md shadow-brand-500/20 transition-all"
                >
                  <span>Pass Project Next</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
