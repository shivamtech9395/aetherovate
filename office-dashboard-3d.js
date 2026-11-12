// Aetherovate Software Solutions - 3D Isometric Virtual Office Dashboard (Three.js)
// Combines isometric multi-department command center + 25 animated agents + 9-scene "ONE GO" Story Director

(function () {
  const STORY_SCENES = [
    {
      id: 0,
      badge: "SCENE 1 [0–10s] • WIDE SHOT",
      title: "Aetherovate — How We Build Your Software",
      subtitle: "Wide isometric view of all 5 departments (25 specialists) collaborating around the Aetherovate Core.",
      deptIndex: -1,
      camPos: { x: 24, y: 20, z: 24 },
      lookAt: { x: 0, y: 0.8, z: -1 },
      toast: { agent: "Aetherovate Core", text: "New client project initialized across 5 teams.", btn: "Start Desk 1 →", nextScene: 1 }
    },
    {
      id: 1,
      badge: "SCENE 2 [10–20s] • DESK 1: UI/UX DESIGN",
      title: "DESK 1 — UI/UX DESIGN TEAM (5 Designers)",
      subtitle: "Aria & team crafting interactive Figma prototypes and user journeys on dual monitors.",
      deptIndex: 0,
      camPos: { x: -2.5, y: 9.5, z: 4.5 },
      lookAt: { x: -9.5, y: 1.2, z: -5.5 },
      toast: { agent: "Aria (Design Lead)", text: "Figma design tokens & mobile wireframes ready!", btn: "Handover to React →", nextScene: 2 }
    },
    {
      id: 2,
      badge: "SCENE 3 [20–30s] • LIVE HANDOVER",
      title: "HANDOVER — Design Lead Delivers Prototype to Desk 2",
      subtitle: "Aria walks across the office carrying the glowing design bundle directly to Frontend Lead Dev.",
      deptIndex: 0,
      camPos: { x: 0, y: 12.5, z: 7.5 },
      lookAt: { x: 0, y: 1.2, z: -5.5 },
      toast: { agent: "Aria → Dev", text: "Handing over approved Figma system to Frontend.", btn: "Inspect Frontend →", nextScene: 3 }
    },
    {
      id: 3,
      badge: "SCENE 4 [30–40s] • DESK 2: FRONTEND (REACT)",
      title: "DESK 2 — FRONTEND DEVELOPMENT (React & Next.js)",
      subtitle: "5 frontend engineers coding glass UI components in VS Code with real-time hot reload.",
      deptIndex: 1,
      camPos: { x: 16.5, y: 9.5, z: 4.5 },
      lookAt: { x: 9.5, y: 1.2, z: -5.5 },
      toast: { agent: "Dev (Frontend Lead)", text: "React components compiled! Need live API routes.", btn: "Sync Backend →", nextScene: 4 }
    },
    {
      id: 4,
      badge: "SCENE 5 [40–50s] • DESK 3: BACKEND / API / DB",
      title: "DESK 3 — BACKEND, API & DATABASE ARCHITECTURE",
      subtitle: "5 backend architects wiring PostgreSQL schemas, WhatsApp webhooks, and cloud endpoints.",
      deptIndex: 2,
      camPos: { x: 16.5, y: 9.5, z: 15.5 },
      lookAt: { x: 9.5, y: 1.2, z: 5.5 },
      toast: { agent: "Vikram (Backend Lead)", text: "REST APIs & PostgreSQL Lead Vault connected!", btn: "Send to QA →", nextScene: 5 }
    },
    {
      id: 5,
      badge: "SCENE 6 [50–60s] • DESK 4: TESTING / QA",
      title: "DESK 4 — QUALITY ASSURANCE & BUG SHIELD",
      subtitle: "5 QA testers verifying laptop + mobile responsiveness. 1 edge-case caught, patched & approved!",
      deptIndex: 3,
      camPos: { x: -2.5, y: 9.5, z: 15.5 },
      lookAt: { x: -9.5, y: 1.2, z: 5.5 },
      toast: { agent: "Neha (QA Lead)", text: "100% tests passed across mobile & desktop!", btn: "Join Client Call →", nextScene: 6 }
    },
    {
      id: 6,
      badge: "SCENE 7 [60–70s] • DESK 5: CLIENT MEETING",
      title: "DESK 5 — CLIENT MEETING & LIVE STAGING DEMO",
      subtitle: "Presenting the live working software on the big video conference screen to the happy client.",
      deptIndex: 4,
      camPos: { x: 5.5, y: 8.5, z: -1.5 },
      lookAt: { x: 0, y: 1.8, z: -10.5 },
      toast: { agent: "Client (Live Call)", text: "Everything looks phenomenal! Ready to go live.", btn: "Launch & Celebrate 🎉", nextScene: 7 }
    },
    {
      id: 7,
      badge: "SCENE 8 [70–80s] • DELIVERY CELEBRATION",
      title: "PROJECT DELIVERED SUCCESSFULLY ✓",
      subtitle: "All 5 teams celebrate! Client handshake complete, 100% source code & live keys handed over.",
      deptIndex: 4,
      camPos: { x: 15, y: 13, z: 12 },
      lookAt: { x: 0, y: 1.2, z: -3 },
      toast: { agent: "Aetherovate Studio", text: "Project Delivered Successfully! Confetti & Handshake.", btn: "Watch Finale →", nextScene: 8 }
    },
    {
      id: 8,
      badge: "SCENE 9 [80–90s] • FINALE ZOOM OUT",
      title: "Aetherovate — From Idea To Delivery",
      subtitle: "Evening studio lights glow as your digital system runs 24/7 in the cloud.",
      deptIndex: -1,
      camPos: { x: 29, y: 24, z: 29 },
      lookAt: { x: 0, y: 0.5, z: -1 },
      toast: { agent: "Ready For Your Project", text: "Want this 5-team pipeline building your software?", btn: "Replay Story ↺", nextScene: 0 }
    }
  ];

  const DEPARTMENTS = [
    {
      id: 0,
      title: "UI/UX DESIGN",
      sign: "DESK 1 • UI/UX",
      colorHex: 0xf43f5e,
      padHex: 0xffe4e6,
      cssDot: "#f43f5e",
      badgeText: "text-rose-600",
      pos: { x: -9.5, z: -5.5 },
      doing: 5, next: 3, done: 14,
      leadName: "Aria",
      members: ["Aria", "Zara", "Kriti", "Leo", "Tanya"],
      screenType: "figma"
    },
    {
      id: 1,
      title: "FRONTEND REACT",
      sign: "DESK 2 • REACT",
      colorHex: 0x3b82f6,
      padHex: 0xdbeafe,
      cssDot: "#3b82f6",
      badgeText: "text-blue-600",
      pos: { x: 9.5, z: -5.5 },
      doing: 5, next: 4, done: 18,
      leadName: "Dev",
      members: ["Dev", "Rohan", "Nisha", "Karan", "Maya"],
      screenType: "vscode"
    },
    {
      id: 2,
      title: "BACKEND & DB",
      sign: "DESK 3 • API/DB",
      colorHex: 0x10b981,
      padHex: 0xd1fae5,
      cssDot: "#10b981",
      badgeText: "text-emerald-600",
      pos: { x: 9.5, z: 5.5 },
      doing: 5, next: 2, done: 21,
      leadName: "Vikram",
      members: ["Vikram", "Arjun", "Sana", "Meera", "Kabir"],
      screenType: "backend"
    },
    {
      id: 3,
      title: "TESTING & QA",
      sign: "DESK 4 • QA",
      colorHex: 0xf59e0b,
      padHex: 0xfef3c7,
      cssDot: "#f59e0b",
      badgeText: "text-amber-600",
      pos: { x: -9.5, z: 5.5 },
      doing: 5, next: 1, done: 16,
      leadName: "Neha",
      members: ["Neha", "Sam", "Riya", "Neil", "Tina"],
      screenType: "qa"
    },
    {
      id: 4,
      title: "CLIENT DELIVERY",
      sign: "DESK 5 • CLIENT",
      colorHex: 0x6366f1,
      padHex: 0xe0e7ff,
      cssDot: "#6366f1",
      badgeText: "text-indigo-600",
      pos: { x: 0, z: -10.5 },
      doing: 2, next: 1, done: 32,
      leadName: "Client Call",
      members: ["Founder", "Client", "PM", "TechLead", "QA"],
      screenType: "client"
    }
  ];

  // State
  let scene, camera, renderer, container;
  let currentSceneIdx = 0;
  let autoPlay = true;
  let sceneTimer = 0;
  const SCENE_DURATION = 5.5; // Smooth fast-paced showcase (click any scene anytime)

  let camTargetPos = new THREE.Vector3(24, 20, 24);
  let camLookCurrent = new THREE.Vector3(0, 0.8, -1);
  let camLookTarget = new THREE.Vector3(0, 0.8, -1);
  let isDragging = false;
  let prevMouse = { x: 0, y: 0 };
  let manualOrbitOffset = { x: 0, y: 0 };

  let coreCrystal, coreGroup;
  let wallScreenMesh, wallScreenCtx, wallScreenTex;
  let qaPhoneMat;
  let allAgents = [];
  let handoverWalker = null;
  let handoverToken = null;
  let flowPackets = [];
  let confettiParticles = [];
  let deptHudEls = [];
  let agentTagEls = [];
  let coreHudEl = null;

  // Web Audio API Sound Engine
  let soundEnabled = false;
  let audioCtx = null;
  let ambienceInterval = null;

  function toggleSound() {
    soundEnabled = !soundEnabled;
    const btn = document.getElementById("iso-sound-toggle");
    if (soundEnabled) {
      initAudio();
      playChime(523.25, 0.12);
      if (btn) btn.innerHTML = `<i data-lucide="volume-2" class="w-3.5 h-3.5 text-emerald-600"></i><span>Audio On</span>`;
    } else {
      if (ambienceInterval) clearInterval(ambienceInterval);
      if (btn) btn.innerHTML = `<i data-lucide="volume-x" class="w-3.5 h-3.5 text-slate-500"></i><span>Sound Off</span>`;
    }
    if (window.lucide) lucide.createIcons();
  }

  function initAudio() {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      audioCtx = new AudioContext();
    }
    if (audioCtx.state === "suspended") audioCtx.resume();

    if (ambienceInterval) clearInterval(ambienceInterval);
    // Gentle futuristic ambient chord pad every 3.5s
    const chords = [
      [261.63, 329.63, 392.00, 493.88], // Cmaj7
      [220.00, 261.63, 329.63, 392.00], // Am7
      [174.61, 220.00, 261.63, 329.63], // Fmaj7
      [196.00, 246.94, 293.66, 392.00]  // G6
    ];
    let chordIdx = 0;
    const playPad = () => {
      if (!soundEnabled || !audioCtx) return;
      const notes = chords[chordIdx % chords.length];
      chordIdx++;
      notes.forEach((freq) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = "sine";
        osc.frequency.value = freq;
        gain.gain.setValueAtTime(0.001, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.015, audioCtx.currentTime + 0.8);
        gain.gain.exponentialRampToValueAtTime(0.0005, audioCtx.currentTime + 3.4);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + 3.5);
      });
    };
    playPad();
    ambienceInterval = setInterval(playPad, 3500);
  }

  function playChime(freq = 659.25, duration = 0.18) {
    if (!soundEnabled || !audioCtx) return;
    try {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(freq * 1.25, audioCtx.currentTime + duration);
      gain.gain.setValueAtTime(0.04, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + duration);
    } catch (e) {}
  }

  // Create crisp screen canvas textures
  function makeScreenTexture(type) {
    const c = document.createElement("canvas");
    c.width = 256;
    c.height = 160;
    const ctx = c.getContext("2d");

    if (type === "figma") {
      ctx.fillStyle = "#1e1b4b";
      ctx.fillRect(0, 0, 256, 160);
      ctx.fillStyle = "#f43f5e";
      ctx.fillRect(16, 16, 68, 128);
      ctx.fillStyle = "#38bdf8";
      ctx.fillRect(96, 16, 144, 58);
      ctx.fillStyle = "#a855f7";
      ctx.fillRect(96, 86, 68, 58);
      ctx.fillStyle = "#34d399";
      ctx.fillRect(174, 86, 66, 58);
    } else if (type === "vscode") {
      ctx.fillStyle = "#0f172a";
      ctx.fillRect(0, 0, 256, 160);
      ctx.fillStyle = "#1e293b";
      ctx.fillRect(0, 0, 44, 160);
      const colors = ["#38bdf8", "#818cf8", "#34d399", "#fbbf24", "#f472b6"];
      for (let y = 18; y < 145; y += 14) {
        ctx.fillStyle = colors[Math.floor(y / 14) % colors.length];
        ctx.fillRect(58 + ((y * 7) % 24), y, 55 + ((y * 13) % 90), 6);
      }
    } else if (type === "backend") {
      ctx.fillStyle = "#064e3b";
      ctx.fillRect(0, 0, 256, 160);
      ctx.strokeStyle = "#34d399";
      ctx.lineWidth = 3;
      ctx.strokeRect(20, 24, 64, 42);
      ctx.strokeRect(168, 24, 64, 42);
      ctx.strokeRect(94, 96, 68, 42);
      ctx.beginPath();
      ctx.moveTo(84, 45);
      ctx.lineTo(168, 45);
      ctx.moveTo(52, 66);
      ctx.lineTo(128, 96);
      ctx.moveTo(200, 66);
      ctx.lineTo(128, 96);
      ctx.stroke();
    } else {
      ctx.fillStyle = "#1e293b";
      ctx.fillRect(0, 0, 256, 160);
      ctx.fillStyle = "#10b981";
      ctx.fillRect(28, 32, 200, 96);
      ctx.fillStyle = "#ffffff";
      ctx.font = "bold 22px sans-serif";
      ctx.fillText("100% PASSED ✓", 44, 88);
    }

    const tex = new THREE.CanvasTexture(c);
    return tex;
  }

  function updateWallScreen(mode) {
    if (!wallScreenCtx || !wallScreenTex) return;
    const ctx = wallScreenCtx;
    ctx.fillStyle = "#0f172a";
    ctx.fillRect(0, 0, 512, 256);

    // Subtle glowing border
    ctx.strokeStyle = mode === "delivered" ? "#10b981" : "#6366f1";
    ctx.lineWidth = 8;
    ctx.strokeRect(10, 10, 492, 236);

    ctx.textAlign = "center";
    if (mode === "delivered") {
      ctx.fillStyle = "#064e3b";
      ctx.fillRect(24, 24, 464, 208);
      ctx.fillStyle = "#34d399";
      ctx.font = "bold 30px sans-serif";
      ctx.fillText("PROJECT DELIVERED", 256, 106);
      ctx.fillStyle = "#ffffff";
      ctx.font = "bold 34px sans-serif";
      ctx.fillText("SUCCESSFULLY ✓", 256, 152);
      ctx.fillStyle = "#a7f3d0";
      ctx.font = "bold 16px monospace";
      ctx.fillText("100% CODE OWNERSHIP HANDED OVER", 256, 198);
    } else if (mode === "client") {
      ctx.fillStyle = "#1e1b4b";
      ctx.fillRect(24, 24, 464, 208);
      ctx.fillStyle = "#38bdf8";
      ctx.font = "bold 20px monospace";
      ctx.fillText("● LIVE CLIENT VIDEO CALL", 256, 65);
      // Draw client avatar circle
      ctx.fillStyle = "#6366f1";
      ctx.beginPath();
      ctx.arc(256, 128, 38, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "#ffffff";
      ctx.font = "bold 24px sans-serif";
      ctx.fillText("LIVE DEMO APPROVED", 256, 202);
    } else {
      ctx.fillStyle = "#38bdf8";
      ctx.font = "bold 26px sans-serif";
      ctx.fillText("AETHEROVATE STUDIO", 256, 98);
      ctx.fillStyle = "#cbd5e1";
      ctx.font = "bold 18px monospace";
      ctx.fillText("5 TEAMS • 25 ENGINEERS LIVE", 256, 140);
      ctx.fillStyle = "#10b981";
      ctx.font = "bold 16px sans-serif";
      ctx.fillText("SPRINT PIPELINE ACTIVE ●", 256, 182);
    }
    wallScreenTex.needsUpdate = true;
  }

  function initIsoOffice() {
    container = document.getElementById("iso-office-container");
    const canvas = document.getElementById("iso-office-canvas");
    if (!container || !canvas || typeof THREE === "undefined") return;

    const width = container.clientWidth || 900;
    const height = container.clientHeight || 540;

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xede9fe); // Soft pastel lavender matching ref image 1

    camera = new THREE.PerspectiveCamera(28, width / height, 0.1, 200);
    camera.position.set(24, 20, 24);
    camera.lookAt(0, 0.8, -1);

    renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    // Bright clean studio lighting
    const hemiLight = new THREE.HemisphereLight(0xffffff, 0xc7d2fe, 1.05);
    scene.add(hemiLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 0.85);
    dirLight.position.set(18, 30, 20);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 2048;
    dirLight.shadow.mapSize.height = 2048;
    dirLight.shadow.camera.near = 5;
    dirLight.shadow.camera.far = 70;
    dirLight.shadow.camera.left = -22;
    dirLight.shadow.camera.right = 22;
    dirLight.shadow.camera.top = 22;
    dirLight.shadow.camera.bottom = -22;
    scene.add(dirLight);

    buildStudioFloor();
    buildCentralCore();
    buildAllDepartments();
    buildDottedPathways();
    buildWallAndProps();
    buildHudOverlays();
    bindControls(canvas);
    renderScenePills();
    applyScene(0, false);

    window.addEventListener("resize", onResize);
    animate();
  }

  function buildStudioFloor() {
    const floorGeo = new THREE.BoxGeometry(34, 0.4, 28);
    const floorMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.75 });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.position.set(0, -0.25, -2);
    floor.receiveShadow = true;
    scene.add(floor);

    const grid = new THREE.GridHelper(34, 34, 0xd8b4fe, 0xe2e8f0);
    grid.position.set(0, -0.04, -2);
    scene.add(grid);
  }

  function buildCentralCore() {
    coreGroup = new THREE.Group();
    coreGroup.position.set(0, 0, 0);

    // White elevated base pad
    const pad = new THREE.Mesh(
      new THREE.BoxGeometry(4.4, 0.3, 4.4),
      new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.3 })
    );
    pad.position.y = 0.15;
    pad.receiveShadow = true;
    pad.castShadow = true;
    coreGroup.add(pad);

    // Dark obsidian Core Cube (like "META ADS" center pedestal in ref image 1)
    const cCanvas = document.createElement("canvas");
    cCanvas.width = 256;
    cCanvas.height = 256;
    const ctx = cCanvas.getContext("2d");
    ctx.fillStyle = "#0f172a";
    ctx.fillRect(0, 0, 256, 256);
    ctx.strokeStyle = "#38bdf8";
    ctx.lineWidth = 6;
    ctx.strokeRect(10, 10, 236, 236);
    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 28px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("AETHER", 128, 118);
    ctx.fillStyle = "#38bdf8";
    ctx.font = "bold 24px monospace";
    ctx.fillText("CORE", 128, 154);

    const coreTex = new THREE.CanvasTexture(cCanvas);
    const cube = new THREE.Mesh(
      new THREE.BoxGeometry(2.1, 2.3, 2.1),
      new THREE.MeshStandardMaterial({ map: coreTex, roughness: 0.25, metalness: 0.3 })
    );
    cube.position.y = 1.45;
    cube.castShadow = true;
    coreGroup.add(cube);

    // Floating holographic wireframe brain/octahedron above Core
    coreCrystal = new THREE.Group();
    const inner = new THREE.Mesh(
      new THREE.IcosahedronGeometry(0.75, 1),
      new THREE.MeshStandardMaterial({
        color: 0x60a5fa,
        emissive: 0x3b82f6,
        emissiveIntensity: 0.9,
        transparent: true,
        opacity: 0.85
      })
    );
    const outer = new THREE.Mesh(
      new THREE.IcosahedronGeometry(0.92, 1),
      new THREE.MeshBasicMaterial({ color: 0x93c5fd, wireframe: true })
    );
    coreCrystal.add(inner, outer);
    coreCrystal.position.y = 3.55;
    coreGroup.add(coreCrystal);

    const coreLight = new THREE.PointLight(0x38bdf8, 1.4, 8);
    coreLight.position.set(0, 3.8, 0);
    coreGroup.add(coreLight);

    scene.add(coreGroup);
  }

  function createAgent(shirtColor, skinColor = 0xfdba74, hairColor = 0x1e293b) {
    const agent = new THREE.Group();

    // Chair
    const chairMat = new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.6 });
    const seat = new THREE.Mesh(new THREE.BoxGeometry(0.62, 0.08, 0.6), chairMat);
    seat.position.set(0, 0.62, 0);
    agent.add(seat);

    const back = new THREE.Mesh(new THREE.BoxGeometry(0.58, 0.62, 0.08), chairMat);
    back.position.set(0, 0.96, 0.27);
    agent.add(back);

    const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.22, 0.55, 8), chairMat);
    stem.position.set(0, 0.32, 0);
    agent.add(stem);

    // Body (stands/bounces via upperGroup)
    const upper = new THREE.Group();
    const torso = new THREE.Mesh(
      new THREE.CylinderGeometry(0.24, 0.28, 0.56, 12),
      new THREE.MeshStandardMaterial({ color: shirtColor, roughness: 0.5 })
    );
    torso.position.set(0, 0.95, 0);
    torso.castShadow = true;
    upper.add(torso);

    const head = new THREE.Mesh(
      new THREE.SphereGeometry(0.18, 14, 14),
      new THREE.MeshStandardMaterial({ color: skinColor, roughness: 0.45 })
    );
    head.position.set(0, 1.38, 0);
    head.castShadow = true;
    upper.add(head);

    const hair = new THREE.Mesh(
      new THREE.SphereGeometry(0.19, 12, 12, 0, Math.PI * 2, 0, Math.PI * 0.56),
      new THREE.MeshStandardMaterial({ color: hairColor, roughness: 0.8 })
    );
    hair.position.set(0, 1.4, 0.01);
    upper.add(hair);

    // Arms
    const armGeo = new THREE.CylinderGeometry(0.055, 0.05, 0.38, 8);
    const armMat = new THREE.MeshStandardMaterial({ color: shirtColor });
    const leftArm = new THREE.Mesh(armGeo, armMat);
    leftArm.position.set(-0.22, 0.96, -0.2);
    leftArm.rotation.x = Math.PI * 0.36;
    upper.add(leftArm);

    const rightArm = new THREE.Mesh(armGeo, armMat);
    rightArm.position.set(0.22, 0.96, -0.2);
    rightArm.rotation.x = Math.PI * 0.36;
    upper.add(rightArm);

    agent.add(upper);
    agent.userData = { upper, leftArm, rightArm, head, baseY: 0 };
    return agent;
  }

  function createDeskWithMonitor(screenTex, woodColor = 0xf3d5b5) {
    const desk = new THREE.Group();
    const top = new THREE.Mesh(
      new THREE.BoxGeometry(1.5, 0.08, 0.78),
      new THREE.MeshStandardMaterial({ color: woodColor, roughness: 0.45 })
    );
    top.position.y = 0.86;
    top.castShadow = true;
    top.receiveShadow = true;
    desk.add(top);

    const legGeo = new THREE.BoxGeometry(0.06, 0.86, 0.06);
    const legMat = new THREE.MeshStandardMaterial({ color: 0x475569 });
    [[-0.66, -0.3], [0.66, -0.3], [-0.66, 0.3], [0.66, 0.3]].forEach(([lx, lz]) => {
      const leg = new THREE.Mesh(legGeo, legMat);
      leg.position.set(lx, 0.43, lz);
      desk.add(leg);
    });

    // Dual-style wide monitor
    const stand = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.25, 0.08), legMat);
    stand.position.set(0, 1.0, -0.2);
    desk.add(stand);

    const frame = new THREE.Mesh(
      new THREE.BoxGeometry(1.05, 0.56, 0.05),
      new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.3 })
    );
    frame.position.set(0, 1.24, -0.2);
    frame.castShadow = true;
    desk.add(frame);

    const screen = new THREE.Mesh(
      new THREE.PlaneGeometry(0.96, 0.48),
      new THREE.MeshBasicMaterial({ map: screenTex })
    );
    screen.position.set(0, 1.24, -0.17);
    desk.add(screen);

    return desk;
  }

  function buildAllDepartments() {
    const textures = {
      figma: makeScreenTexture("figma"),
      vscode: makeScreenTexture("vscode"),
      backend: makeScreenTexture("backend"),
      qa: makeScreenTexture("qa"),
      client: makeScreenTexture("qa")
    };

    const agentSlots = [
      { dx: -2.1, dz: -1.1, rotY: 0 },
      { dx: 0.0, dz: -1.1, rotY: 0 },
      { dx: 2.1, dz: -1.1, rotY: 0 },
      { dx: -1.1, dz: 1.5, rotY: Math.PI },
      { dx: 1.1, dz: 1.5, rotY: Math.PI }
    ];

    const skinPalette = [0xfdba74, 0xfed7aa, 0xe5a97c, 0xfdba74, 0xd99b66];

    DEPARTMENTS.forEach((dept, dIdx) => {
      const group = new THREE.Group();
      group.position.set(dept.pos.x, 0, dept.pos.z);

      // Colored Isometric Base Platform (like Reference Image 1)
      const baseBorder = new THREE.Mesh(
        new THREE.BoxGeometry(7.2, 0.36, 5.6),
        new THREE.MeshStandardMaterial({ color: dept.colorHex, roughness: 0.35 })
      );
      baseBorder.position.y = 0.16;
      baseBorder.receiveShadow = true;
      baseBorder.castShadow = true;
      group.add(baseBorder);

      const topPad = new THREE.Mesh(
        new THREE.BoxGeometry(6.8, 0.08, 5.2),
        new THREE.MeshStandardMaterial({ color: dept.padHex, roughness: 0.5 })
      );
      topPad.position.y = 0.35;
      topPad.receiveShadow = true;
      group.add(topPad);

      // Special props per department
      if (dIdx === 2) {
        // Backend Database Cylinder Rack ("Lead Vault / DB")
        const dbRack = new THREE.Mesh(
          new THREE.CylinderGeometry(0.55, 0.55, 1.8, 20),
          new THREE.MeshStandardMaterial({ color: 0x0f172a, metalness: 0.6, roughness: 0.2 })
        );
        dbRack.position.set(2.7, 1.25, 0.3);
        dbRack.castShadow = true;
        group.add(dbRack);
        const ring = new THREE.Mesh(
          new THREE.TorusGeometry(0.56, 0.04, 8, 24),
          new THREE.MeshBasicMaterial({ color: 0x34d399 })
        );
        ring.rotation.x = Math.PI / 2;
        ring.position.set(2.7, 1.7, 0.3);
        group.add(ring);
      }

      if (dIdx === 3) {
        // QA Standing Mobile Device Mockup
        const phoneBody = new THREE.Mesh(
          new THREE.BoxGeometry(0.65, 1.3, 0.08),
          new THREE.MeshStandardMaterial({ color: 0x0f172a })
        );
        phoneBody.position.set(-2.7, 1.05, 0.2);
        phoneBody.rotation.y = Math.PI / 6;
        group.add(phoneBody);

        qaPhoneMat = new THREE.MeshBasicMaterial({ color: 0x10b981 });
        const phoneScreen = new THREE.Mesh(new THREE.PlaneGeometry(0.55, 1.12), qaPhoneMat);
        phoneScreen.position.set(-2.68, 1.05, 0.25);
        phoneScreen.rotation.y = Math.PI / 6;
        group.add(phoneScreen);
      }

      if (dIdx === 4) {
        // Giant Wall-mounted Client Video Call & Delivery Screen
        const wallScreenCanvas = document.createElement("canvas");
        wallScreenCanvas.width = 512;
        wallScreenCanvas.height = 256;
        wallScreenCtx = wallScreenCanvas.getContext("2d");
        wallScreenTex = new THREE.CanvasTexture(wallScreenCanvas);
        updateWallScreen("default");

        const wallStand = new THREE.Mesh(
          new THREE.BoxGeometry(5.6, 2.9, 0.22),
          new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.3 })
        );
        wallStand.position.set(0, 2.2, -2.3);
        wallStand.castShadow = true;
        group.add(wallStand);

        wallScreenMesh = new THREE.Mesh(
          new THREE.PlaneGeometry(5.2, 2.55),
          new THREE.MeshBasicMaterial({ map: wallScreenTex })
        );
        wallScreenMesh.position.set(0, 2.2, -2.18);
        group.add(wallScreenMesh);
      }

      // 5 Desks + 5 Working Agents per platform!
      const tex = textures[dept.screenType];
      agentSlots.forEach((slot, aIdx) => {
        const unit = new THREE.Group();
        unit.position.set(slot.dx, 0.38, slot.dz);
        unit.rotation.y = slot.rotY;

        // On Desk 5, skip front-middle desk so conference view of big screen stays open
        if (!(dIdx === 4 && aIdx === 1)) {
          const desk = createDeskWithMonitor(tex);
          unit.add(desk);
        }

        const agent = createAgent(dept.colorHex, skinPalette[aIdx % skinPalette.length]);
        agent.position.set(0, 0, 0.65);
        unit.add(agent);

        agent.userData.deptId = dIdx;
        agent.userData.agentIdx = aIdx;
        agent.userData.phase = dIdx * 1.3 + aIdx * 0.8;
        allAgents.push(agent);

        group.add(unit);
      });

      scene.add(group);
    });

    // Special Handover Walker (Aria carrying glowing prototype token from Desk 1 -> Desk 2)
    handoverWalker = createAgent(0xf43f5e, 0xfdba74, 0x1e293b);
    handoverWalker.position.set(-9.5, 0.38, -5.5);
    handoverWalker.visible = false;

    handoverToken = new THREE.Mesh(
      new THREE.OctahedronGeometry(0.32, 0),
      new THREE.MeshStandardMaterial({ color: 0x38bdf8, emissive: 0x0ea5e9, emissiveIntensity: 1.2 })
    );
    handoverToken.position.set(0, 1.3, -0.45);
    handoverWalker.add(handoverToken);
    scene.add(handoverWalker);
  }

  function addDottedTrack(p1, p2, color) {
    const start = new THREE.Vector3(p1.x, 0.08, p1.z);
    const end = new THREE.Vector3(p2.x, 0.08, p2.z);
    const dist = start.distanceTo(end);
    const steps = Math.floor(dist / 0.55);

    const dotGeo = new THREE.BoxGeometry(0.22, 0.05, 0.22);
    const dotMat = new THREE.MeshBasicMaterial({ color });

    for (let i = 1; i < steps; i++) {
      const dot = new THREE.Mesh(dotGeo, dotMat);
      dot.position.lerpVectors(start, end, i / steps);
      scene.add(dot);
    }

    // Flowing light sphere along path
    const packet = new THREE.Mesh(
      new THREE.SphereGeometry(0.18, 12, 12),
      new THREE.MeshBasicMaterial({ color })
    );
    scene.add(packet);
    flowPackets.push({ mesh: packet, start, end, t: Math.random(), speed: 0.28 + Math.random() * 0.14 });
  }

  function buildDottedPathways() {
    const corePos = { x: 0, z: 0 };
    DEPARTMENTS.forEach((dept) => {
      addDottedTrack(corePos, dept.pos, dept.colorHex);
    });
    // Sequential Handover Lines: Desk 1 -> Desk 2 -> Desk 3 -> Desk 4 -> Desk 5
    addDottedTrack(DEPARTMENTS[0].pos, DEPARTMENTS[1].pos, 0x38bdf8);
    addDottedTrack(DEPARTMENTS[1].pos, DEPARTMENTS[2].pos, 0x10b981);
    addDottedTrack(DEPARTMENTS[2].pos, DEPARTMENTS[3].pos, 0xf59e0b);
    addDottedTrack(DEPARTMENTS[3].pos, DEPARTMENTS[4].pos, 0x6366f1);
  }

  function buildWallAndProps() {
    // Potted office plants for realistic architectural polish (like Ref Image 2)
    const plantLocations = [
      [-15, -13], [15, -13], [-15, 10], [15, 10], [-4.5, -10.5], [4.5, -10.5]
    ];
    const potMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.4 });
    const leafMat = new THREE.MeshStandardMaterial({ color: 0x16a34a, roughness: 0.7 });

    plantLocations.forEach(([px, pz]) => {
      const pot = new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.24, 0.48, 12), potMat);
      pot.position.set(px, 0.24, pz);
      pot.castShadow = true;
      scene.add(pot);

      const leaves = new THREE.Mesh(new THREE.DodecahedronGeometry(0.48, 1), leafMat);
      leaves.position.set(px, 0.78, pz);
      leaves.castShadow = true;
      scene.add(leaves);
    });
  }

  function triggerConfetti() {
    // Spawn 60 colorful 3D confetti pieces above the office
    const colors = [0xf43f5e, 0x3b82f6, 0x10b981, 0xf59e0b, 0x6366f1, 0x38bdf8];
    for (let i = 0; i < 65; i++) {
      const piece = new THREE.Mesh(
        new THREE.BoxGeometry(0.22, 0.22, 0.05),
        new THREE.MeshBasicMaterial({ color: colors[i % colors.length] })
      );
      piece.position.set((Math.random() - 0.5) * 22, 6 + Math.random() * 5, (Math.random() - 0.5) * 16 - 2);
      scene.add(piece);
      confettiParticles.push({
        mesh: piece,
        vy: -0.04 - Math.random() * 0.04,
        vx: (Math.random() - 0.5) * 0.03,
        rot: Math.random() * 0.1
      });
    }
  }

  function buildHudOverlays() {
    const hudLayer = document.getElementById("iso-hud-layer");
    if (!hudLayer) return;
    hudLayer.innerHTML = "";

    // Center Core Pill
    coreHudEl = document.createElement("div");
    coreHudEl.className = "agent-name-tag";
    coreHudEl.style.background = "rgba(15, 23, 42, 0.92)";
    coreHudEl.style.color = "#ffffff";
    coreHudEl.style.borderColor = "rgba(56, 189, 248, 0.5)";
    coreHudEl.style.padding = "4px 10px";
    coreHudEl.innerHTML = `<span class="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span><span>∞ AETHEROVATE CORE • 25 ENGINEERS</span>`;
    hudLayer.appendChild(coreHudEl);

    // 5 Department Floating Status Cards
    deptHudEls = DEPARTMENTS.map((dept) => {
      const el = document.createElement("div");
      el.className = "dept-hud-card";
      el.innerHTML = `
        <div class="flex items-center justify-between gap-2 mb-0.5">
          <span class="flex items-center gap-1 text-[9px] font-extrabold tracking-wider text-slate-800">
            <span class="w-2 h-2 rounded-full" style="background:${dept.cssDot}"></span>
            ${dept.title}
          </span>
        </div>
        <div class="text-xs font-extrabold text-slate-900">5 AGENTS</div>
        <div class="flex items-center gap-2 text-[9px] font-mono text-slate-500 mt-0.5">
          <span>DOING <strong class="text-slate-800">${dept.doing}</strong></span>
          <span>DONE <strong class="text-emerald-600">${dept.done}</strong></span>
        </div>
      `;
      el.addEventListener("click", () => {
        autoPlay = false;
        updateAutoPlayBtn();
        applyScene(dept.id + 1, true);
      });
      hudLayer.appendChild(el);
      return { el, worldPos: new THREE.Vector3(dept.pos.x, 3.3, dept.pos.z) };
    });

    // Floating Lead Agent Name Pills (like Reference Image 2: • Aria, • Dev, • Vikram, • Neha)
    agentTagEls = DEPARTMENTS.map((dept) => {
      const el = document.createElement("div");
      el.className = "agent-name-tag";
      el.innerHTML = `<span class="w-1.5 h-1.5 rounded-full" style="background:${dept.cssDot}"></span><span>${dept.leadName}</span>`;
      hudLayer.appendChild(el);
      return { el, worldPos: new THREE.Vector3(dept.pos.x, 2.25, dept.pos.z - 0.8) };
    });
  }

  function projectToScreen(vec3) {
    const v = vec3.clone().project(camera);
    const w = container.clientWidth;
    const h = container.clientHeight;
    return {
      x: (v.x * 0.5 + 0.5) * w,
      y: (-(v.y * 0.5) + 0.5) * h,
      visible: v.z < 1 && v.x > -0.92 && v.x < 0.92 && v.y > -0.92 && v.y < 0.95
    };
  }

  function renderScenePills() {
    const nav = document.getElementById("iso-scene-pills");
    if (!nav) return;
    nav.innerHTML = STORY_SCENES.map(
      (s, idx) => `
      <button data-iso-scene="${idx}" class="iso-scene-btn px-2.5 py-1.5 rounded-xl text-[11px] font-bold transition-all whitespace-nowrap border ${
        idx === currentSceneIdx
          ? "bg-brand-600 text-white border-brand-500 shadow-md"
          : "bg-white/75 text-slate-700 border-white/90 hover:bg-white"
      }">
        ${idx + 1}. ${s.badge.split("•")[1]?.trim() || s.title}
      </button>
    `
    ).join("");

    nav.querySelectorAll(".iso-scene-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const idx = parseInt(btn.getAttribute("data-iso-scene"));
        autoPlay = false;
        updateAutoPlayBtn();
        applyScene(idx, true);
      });
    });
  }

  function applyScene(idx, withSound = false) {
    currentSceneIdx = idx;
    sceneTimer = 0;
    manualOrbitOffset = { x: 0, y: 0 };

    const s = STORY_SCENES[idx];
    camTargetPos.set(s.camPos.x, s.camPos.y, s.camPos.z);
    camLookTarget.set(s.lookAt.x, s.lookAt.y, s.lookAt.z);

    if (withSound) playChime(587.33 + idx * 45, 0.16);

    // Special 3D Behaviors per Scene
    if (handoverWalker) {
      handoverWalker.visible = idx === 2;
    }

    if (qaPhoneMat) {
      qaPhoneMat.color.setHex(idx === 5 ? 0xf59e0b : 0x10b981);
      if (idx === 5) {
        setTimeout(() => {
          if (qaPhoneMat) qaPhoneMat.color.setHex(0x10b981);
        }, 2000);
      }
    }

    if (idx === 6) updateWallScreen("client");
    else if (idx === 7) {
      updateWallScreen("delivered");
      triggerConfetti();
      playChime(880, 0.3);
    } else {
      updateWallScreen("default");
    }

    // Update UI Banners & Toast
    const badgeEl = document.getElementById("iso-story-badge");
    const titleEl = document.getElementById("iso-story-title");
    const subEl = document.getElementById("iso-story-sub");
    if (badgeEl) badgeEl.textContent = s.badge;
    if (titleEl) titleEl.textContent = s.title;
    if (subEl) subEl.textContent = s.subtitle;

    // Update Action Toast (like Reference Image 2)
    const toastAgent = document.getElementById("iso-toast-agent");
    const toastText = document.getElementById("iso-toast-text");
    const toastBtn = document.getElementById("iso-toast-btn");
    if (toastAgent) toastAgent.textContent = s.toast.agent;
    if (toastText) toastText.textContent = s.toast.text;
    if (toastBtn) {
      toastBtn.textContent = s.toast.btn;
      toastBtn.onclick = () => {
        applyScene(s.toast.nextScene, true);
      };
    }

    // Highlight active dept HUD
    deptHudEls.forEach((d, dIdx) => {
      if (s.deptIndex === dIdx) d.el.classList.add("active-dept");
      else d.el.classList.remove("active-dept");
    });

    // Update pill buttons
    document.querySelectorAll(".iso-scene-btn").forEach((btn, i) => {
      if (i === idx) {
        btn.className = "iso-scene-btn px-2.5 py-1.5 rounded-xl text-[11px] font-bold transition-all whitespace-nowrap border bg-brand-600 text-white border-brand-500 shadow-md";
      } else {
        btn.className = "iso-scene-btn px-2.5 py-1.5 rounded-xl text-[11px] font-bold transition-all whitespace-nowrap border bg-white/75 text-slate-700 border-white/90 hover:bg-white";
      }
    });
  }

  function updateAutoPlayBtn() {
    const btn = document.getElementById("iso-autoplay-btn");
    if (!btn) return;
    if (autoPlay) {
      btn.innerHTML = `<i data-lucide="pause" class="w-3.5 h-3.5"></i><span>Auto-Tour Running</span>`;
      btn.className = "px-3 py-1.5 rounded-xl bg-emerald-600 text-white text-xs font-bold flex items-center gap-1.5 shadow-sm";
    } else {
      btn.innerHTML = `<i data-lucide="play" class="w-3.5 h-3.5"></i><span>Play 9-Scene Tour</span>`;
      btn.className = "px-3 py-1.5 rounded-xl bg-brand-600 text-white text-xs font-bold flex items-center gap-1.5 shadow-sm";
    }
    if (window.lucide) lucide.createIcons();
  }

  function bindControls(canvas) {
    canvas.addEventListener("mousedown", (e) => {
      isDragging = true;
      autoPlay = false;
      updateAutoPlayBtn();
      prevMouse = { x: e.clientX, y: e.clientY };
    });
    window.addEventListener("mouseup", () => { isDragging = false; });
    window.addEventListener("mousemove", (e) => {
      if (!isDragging) return;
      const dx = e.clientX - prevMouse.x;
      const dy = e.clientY - prevMouse.y;
      manualOrbitOffset.x = Math.max(-14, Math.min(14, manualOrbitOffset.x - dx * 0.05));
      manualOrbitOffset.y = Math.max(-8, Math.min(12, manualOrbitOffset.y + dy * 0.04));
      prevMouse = { x: e.clientX, y: e.clientY };
    });

    const autoBtn = document.getElementById("iso-autoplay-btn");
    if (autoBtn) {
      autoBtn.addEventListener("click", () => {
        autoPlay = !autoPlay;
        updateAutoPlayBtn();
      });
    }

    const soundBtn = document.getElementById("iso-sound-toggle");
    if (soundBtn) {
      soundBtn.addEventListener("click", toggleSound);
    }

    const resetBtn = document.getElementById("iso-wide-btn");
    if (resetBtn) {
      resetBtn.addEventListener("click", () => {
        autoPlay = false;
        updateAutoPlayBtn();
        applyScene(0, true);
      });
    }
  }

  function onResize() {
    if (!container || !renderer || !camera) return;
    const w = container.clientWidth;
    const h = container.clientHeight;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  }

  const clock = new THREE.Clock();

  function animate() {
    requestAnimationFrame(animate);
    const delta = Math.min(clock.getDelta(), 0.1);
    const elapsed = clock.getElapsedTime();

    // Auto-play 9-scene story director
    if (autoPlay) {
      sceneTimer += delta;
      if (sceneTimer >= SCENE_DURATION) {
        applyScene((currentSceneIdx + 1) % STORY_SCENES.length, false);
      }
    }

    // Smooth Camera Interpolation
    const desiredCam = new THREE.Vector3(
      camTargetPos.x + manualOrbitOffset.x,
      camTargetPos.y + manualOrbitOffset.y,
      camTargetPos.z
    );
    camera.position.lerp(desiredCam, 0.055);
    camLookCurrent.lerp(camLookTarget, 0.06);
    camera.lookAt(camLookCurrent);

    // Core Hologram Spin
    if (coreCrystal) {
      coreCrystal.rotation.y = elapsed * 0.9;
      coreCrystal.position.y = 3.55 + Math.sin(elapsed * 2.2) * 0.14;
    }

    // Animate all 25 Agents (typing or celebrating!)
    const celebrating = currentSceneIdx === 7;
    allAgents.forEach((ag) => {
      const { upper, leftArm, rightArm, head, phase } = ag.userData;
      if (celebrating) {
        upper.position.y = Math.abs(Math.sin(elapsed * 7 + phase)) * 0.28;
        leftArm.rotation.x = -Math.PI * 0.65;
        rightArm.rotation.x = -Math.PI * 0.65;
      } else {
        upper.position.y = Math.sin(elapsed * 4.5 + phase) * 0.015;
        leftArm.rotation.x = Math.PI * 0.36 + Math.sin(elapsed * 14 + phase) * 0.12;
        rightArm.rotation.x = Math.PI * 0.36 + Math.cos(elapsed * 14 + phase) * 0.12;
        head.rotation.y = Math.sin(elapsed * 1.4 + phase) * 0.15;
      }
    });

    // Scene 3: Handover Walker gliding smoothly from Desk 1 (-9.5,-5.5) -> Desk 2 (9.5,-5.5)
    if (handoverWalker && handoverWalker.visible) {
      const progress = (sceneTimer % SCENE_DURATION) / SCENE_DURATION;
      const walkX = -9.5 + progress * 19.0;
      handoverWalker.position.set(walkX, 0.38 + Math.abs(Math.sin(elapsed * 9)) * 0.08, -5.5);
      handoverWalker.rotation.y = -Math.PI / 2;
      if (handoverToken) handoverToken.rotation.y = elapsed * 3;
    }

    // Flowing energy packets along dotted pathways
    flowPackets.forEach((p) => {
      p.t = (p.t + delta * p.speed) % 1;
      p.mesh.position.lerpVectors(p.start, p.end, p.t);
      p.mesh.position.y = 0.18 + Math.sin(p.t * Math.PI) * 0.15;
    });

    // Confetti physics
    for (let i = confettiParticles.length - 1; i >= 0; i--) {
      const cp = confettiParticles[i];
      cp.mesh.position.y += cp.vy;
      cp.mesh.position.x += cp.vx;
      cp.mesh.rotation.x += cp.rot;
      cp.mesh.rotation.y += cp.rot;
      if (cp.mesh.position.y < -0.5) {
        scene.remove(cp.mesh);
        confettiParticles.splice(i, 1);
      }
    }

    // Project 2D HUD Overlays cleanly onto screen
    if (coreHudEl) {
      const p = projectToScreen(new THREE.Vector3(0, 4.7, 0));
      coreHudEl.style.display = p.visible ? "flex" : "none";
      coreHudEl.style.left = `${p.x}px`;
      coreHudEl.style.top = `${p.y}px`;
    }

    deptHudEls.forEach((d) => {
      const p = projectToScreen(d.worldPos);
      d.el.style.display = p.visible ? "block" : "none";
      d.el.style.left = `${p.x}px`;
      d.el.style.top = `${p.y}px`;
    });

    agentTagEls.forEach((a) => {
      const p = projectToScreen(a.worldPos);
      a.el.style.display = p.visible ? "flex" : "none";
      a.el.style.left = `${p.x}px`;
      a.el.style.top = `${p.y}px`;
    });

    renderer.render(scene, camera);
  }

  document.addEventListener("DOMContentLoaded", initIsoOffice);
})();
