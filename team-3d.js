// Aetherovate Software Solutions - 3D Interactive Virtual Software House
// Built with Three.js for high-performance, responsive 3D interactive pipeline

const stagesData = [
  {
    id: 0,
    name: "Aarav Patel",
    initials: "AP",
    avatarBg: "from-brand-600 to-indigo-600",
    role: "Lead Solutions Architect & PM",
    deskName: "Station 1: Discovery & Strategy Desk",
    status: "Status: Analyzing Scope & Systems Blueprint",
    desc: "Hum client ke exact business model ko analyze karte hain, required features list banate hain, aur database aur system architecture ka solid blueprint prepare karte hain.",
    deliverable: "Project Scope Document & Tech Architecture Matrix",
    tools: ["System Architecture", "Jira / Linear", "Database Schema", "Mermaid Docs"],
    log: "> ARCH_SPEC: analyzing client business logic...\n> DB_SCHEMA: PostgreSQL relational model defined\n> TIMELINE: 2-week sprint approved\n> HANDOVER: forwarding spec to UI/UX studio...",
    cameraPos: { x: -10, y: 7, z: 12 },
    targetPos: { x: -10, y: 1.5, z: 0 }
  },
  {
    id: 1,
    name: "Priya Sharma",
    initials: "PS",
    avatarBg: "from-purple-600 to-pink-600",
    role: "Lead UI/UX & Brand Designer",
    deskName: "Station 2: UI/UX Creative Design Studio",
    status: "Status: Crafting Interactive Prototypes",
    desc: "Aarav ke blueprint ke baad Priya modern, high-converting Figma prototypes create karti hain. Mobile-friendly layouts, typography, aur visual brand identity design hoti hai.",
    deliverable: "High-Fidelity Figma Prototype & Design Tokens",
    tools: ["Figma 3D", "Design Tokens", "Micro-Interactions", "Responsive Grids"],
    log: "> FIGMA_SYNC: 14 mobile & desktop screens drafted\n> COLOR_SYSTEM: Trust Blue #2563eb + Light Slate\n> CLIENT_REVIEW: 100% approved without revisions\n> HANDOVER: components ready for Full-Stack team...",
    cameraPos: { x: -5, y: 7, z: 10 },
    targetPos: { x: -5, y: 1.5, z: 0 }
  },
  {
    id: 2,
    name: "Vikram Kumar & Team",
    initials: "VK",
    avatarBg: "from-emerald-600 to-teal-600",
    role: "Full-Stack Tech Lead & Devs",
    deskName: "Station 3: Full-Stack Engineering Bay",
    status: "Status: Live Coding & Database Integration",
    desc: "Engineering team design ko lightning-fast code me convert karti hai. Next.js, clean APIs, WhatsApp webhooks aur high-security payments seamlessly connect hote hain.",
    deliverable: "Functional Web Application & Automated Backend",
    tools: ["React / Next.js", "Node.js", "Tailwind CSS", "WhatsApp Cloud API", "REST/GraphQL"],
    log: "> CODE_COMMIT: modular components built (0 bloat)\n> API_INTEGRATION: WhatsApp webhook hooked\n> DB_SEED: test databases compiled cleanly\n> HANDOVER: passing build bundle to QA Chamber...",
    cameraPos: { x: 0, y: 7, z: 12 },
    targetPos: { x: 0, y: 1.5, z: 0 }
  },
  {
    id: 3,
    name: "Neha Verma",
    initials: "NV",
    avatarBg: "from-amber-600 to-orange-600",
    role: "QA, Security & Performance Tester",
    deskName: "Station 4: Quality & Security Shield Chamber",
    status: "Status: Stress Testing & Zero-Bug Audit",
    desc: "Neha system ko 20+ alag-alag phones aur laptops par test karti hain. Speed load times, SSL security, form validation aur payment gateway checks verify kiye jaate hain.",
    deliverable: "QA Security Certificate & 100% Bug-Free Report",
    tools: ["Playwright / Jest", "Lighthouse 100/100", "SSL Hardening", "Cross-Device Testing"],
    log: "> TEST_RUN: 48 automated test cases executed\n> LIGHTHOUSE: 98/100 Mobile Performance Score\n> SECURITY: 0 critical vulnerabilities found\n> HANDOVER: verified build approved for Cloud Launch...",
    cameraPos: { x: 5, y: 7, z: 10 },
    targetPos: { x: 5, y: 1.5, z: 0 }
  },
  {
    id: 4,
    name: "Kabir Singh",
    initials: "KS",
    avatarBg: "from-blue-600 to-sky-600",
    role: "Cloud DevOps & Handover Specialist",
    deskName: "Station 5: Cloud Deployment & Client Handover",
    status: "Status: Live Production Deployment & Handover",
    desc: "Project live cloud servers par deploy hota hai with automated daily backups. Client ko admin credentials, source code ownership, aur live training provide ki jaati hai.",
    deliverable: "Live Website / App URL + 100% Code Ownership Keys",
    tools: ["Vercel / AWS", "Custom Domain DNS", "Daily Cloud Backups", "1-Year Warranty"],
    log: "> CLOUD_DEPLOY: SSL installed & DNS pointed\n> BACKUP_DAEMON: automated daily snapshots enabled\n> HANDOVER_SUCCESS: client keys generated!\n> STATUS: 100% LIVE IN PRODUCTION 🚀",
    cameraPos: { x: 10, y: 7, z: 12 },
    targetPos: { x: 10, y: 1.5, z: 0 }
  }
];

let scene, camera, renderer, raycaster, mouse;
let container;
let workstations = [];
let currentStageIndex = 0;
let projectToken;
let tokenTargetPos = new THREE.Vector3();
let isOrbiting = false;
let previousMousePosition = { x: 0, y: 0 };
let cameraTarget = new THREE.Vector3(0, 1.5, 0);

function init3DOffice() {
  container = document.getElementById('canvas-container');
  const canvas = document.getElementById('team-canvas');
  if (!container || !canvas) return;

  const width = container.clientWidth;
  const height = container.clientHeight;

  // 1. Scene
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0xf8fafc); // Clean light background

  // 2. Camera (Isometric Perspective)
  camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 1000);
  camera.position.set(0, 14, 22);
  camera.lookAt(0, 1, 0);

  // 3. Renderer
  renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  // 4. Lights
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
  scene.add(ambientLight);

  const sunLight = new THREE.DirectionalLight(0xffffff, 0.7);
  sunLight.position.set(15, 25, 15);
  sunLight.castShadow = true;
  sunLight.shadow.mapSize.width = 1024;
  sunLight.shadow.mapSize.height = 1024;
  sunLight.shadow.bias = -0.0005;
  scene.add(sunLight);

  const fillLight = new THREE.DirectionalLight(0xdbeafe, 0.4);
  fillLight.position.set(-15, 15, -10);
  scene.add(fillLight);

  // 5. Floor & Pipeline Track
  buildOfficeFloor();

  // 6. 5 Workstations with Animated Avatars & Laptops
  buildWorkstations();

  // 7. Handover Project Token (The glowing crystal/orb that moves between desks)
  buildProjectToken();

  // 8. Event Listeners for Raycasting & Orbit
  raycaster = new THREE.Raycaster();
  mouse = new THREE.Vector2();

  setupInteractionEvents(canvas);

  // Initial UI sync
  updateInspectorUI(0);

  // Animation Loop
  animate();
}

function buildOfficeFloor() {
  // Main Room Floor
  const floorGeo = new THREE.PlaneGeometry(36, 18);
  const floorMat = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    roughness: 0.2,
    metalness: 0.05
  });
  const floor = new THREE.Mesh(floorGeo, floorMat);
  floor.rotation.x = -Math.PI / 2;
  floor.receiveShadow = true;
  scene.add(floor);

  // Subtle Floor Grid Pattern
  const gridHelper = new THREE.GridHelper(36, 36, 0xe2e8f0, 0xf1f5f9);
  gridHelper.position.y = 0.01;
  scene.add(gridHelper);

  // Glowing Pipeline Rail connecting all 5 stations
  const railCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-10, 0.05, 0),
    new THREE.Vector3(-5, 0.05, 0),
    new THREE.Vector3(0, 0.05, 0),
    new THREE.Vector3(5, 0.05, 0),
    new THREE.Vector3(10, 0.05, 0)
  ]);
  const railGeo = new THREE.TubeGeometry(railCurve, 64, 0.1, 8, false);
  const railMat = new THREE.MeshStandardMaterial({
    color: 0x2563eb,
    emissive: 0x1d4ed8,
    emissiveIntensity: 0.6,
    roughness: 0.3
  });
  const rail = new THREE.Mesh(railGeo, railMat);
  scene.add(rail);
}

function buildWorkstations() {
  const deskSpacing = 5;
  const startX = -10;

  const colors = [
    { shirt: 0x2563eb, accent: 0x60a5fa, label: "ARCH" },
    { shirt: 0x9333ea, accent: 0xf472b6, label: "UI/UX" },
    { shirt: 0x059669, accent: 0x34d399, label: "CODE" },
    { shirt: 0xd97706, accent: 0xfbbf24, label: "QA" },
    { shirt: 0x0284c7, accent: 0x38bdf8, label: "CLOUD" }
  ];

  for (let i = 0; i < 5; i++) {
    const posX = startX + (i * deskSpacing);
    const stationGroup = new THREE.Group();
    stationGroup.position.set(posX, 0, 0);
    stationGroup.userData = { stageIndex: i };

    // 1. Desk Table
    const deskTopGeo = new THREE.BoxGeometry(3.4, 0.14, 1.8);
    const deskTopMat = new THREE.MeshStandardMaterial({
      color: 0xf8fafc,
      roughness: 0.3,
      metalness: 0.1
    });
    const deskTop = new THREE.Mesh(deskTopGeo, deskTopMat);
    deskTop.position.set(0, 1.4, 0);
    deskTop.castShadow = true;
    deskTop.receiveShadow = true;
    stationGroup.add(deskTop);

    // Desk Legs (Metallic)
    const legGeo = new THREE.CylinderGeometry(0.06, 0.06, 1.4, 12);
    const legMat = new THREE.MeshStandardMaterial({ color: 0x94a3b8, metalness: 0.8, roughness: 0.2 });
    
    [ [-1.5, 0.7, -0.7], [1.5, 0.7, -0.7], [-1.5, 0.7, 0.7], [1.5, 0.7, 0.7] ].forEach(pos => {
      const leg = new THREE.Mesh(legGeo, legMat);
      leg.position.set(...pos);
      leg.castShadow = true;
      stationGroup.add(leg);
    });

    // 2. Desk Lamp / Station Spot
    const stationLight = new THREE.PointLight(colors[i].accent, 0.9, 5);
    stationLight.position.set(0, 2.5, 0);
    stationGroup.add(stationLight);

    // 3. Laptop on Desk
    const laptopBaseGeo = new THREE.BoxGeometry(0.9, 0.03, 0.65);
    const laptopBaseMat = new THREE.MeshStandardMaterial({ color: 0x334155, metalness: 0.8 });
    const laptopBase = new THREE.Mesh(laptopBaseGeo, laptopBaseMat);
    laptopBase.position.set(0, 1.48, 0.15);
    stationGroup.add(laptopBase);

    // Laptop Screen
    const screenGeo = new THREE.BoxGeometry(0.88, 0.55, 0.02);
    const screenMat = new THREE.MeshStandardMaterial({
      color: colors[i].accent,
      emissive: colors[i].accent,
      emissiveIntensity: 0.85
    });
    const screen = new THREE.Mesh(screenGeo, screenMat);
    screen.position.set(0, 1.76, -0.15);
    screen.rotation.x = -0.15;
    stationGroup.add(screen);

    // 4. Team Person (Avatar seated at desk)
    const avatarGroup = new THREE.Group();
    avatarGroup.position.set(0, 0, 0.85);

    // Body / Shirt
    const bodyGeo = new THREE.CylinderGeometry(0.38, 0.44, 0.8, 16);
    const bodyMat = new THREE.MeshStandardMaterial({ color: colors[i].shirt, roughness: 0.5 });
    const body = new THREE.Mesh(bodyGeo, bodyMat);
    body.position.set(0, 1.45, 0);
    body.castShadow = true;
    avatarGroup.add(body);

    // Head
    const headGeo = new THREE.SphereGeometry(0.24, 20, 20);
    const headMat = new THREE.MeshStandardMaterial({ color: 0xfcd34d, roughness: 0.4 }); // Skin tone
    const head = new THREE.Mesh(headGeo, headMat);
    head.position.set(0, 2.05, 0);
    head.castShadow = true;
    avatarGroup.add(head);

    // Hair
    const hairGeo = new THREE.SphereGeometry(0.25, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2);
    const hairMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.8 });
    const hair = new THREE.Mesh(hairGeo, hairMat);
    hair.position.set(0, 2.08, 0);
    avatarGroup.add(hair);

    // Arms Typing at Keyboard
    const armGeo = new THREE.CylinderGeometry(0.08, 0.08, 0.5, 8);
    const armMat = new THREE.MeshStandardMaterial({ color: colors[i].shirt });

    const leftArm = new THREE.Mesh(armGeo, armMat);
    leftArm.position.set(-0.35, 1.45, -0.3);
    leftArm.rotation.x = Math.PI / 3;
    leftArm.rotation.z = -Math.PI / 12;
    avatarGroup.add(leftArm);

    const rightArm = new THREE.Mesh(armGeo, armMat);
    rightArm.position.set(0.35, 1.45, -0.3);
    rightArm.rotation.x = Math.PI / 3;
    rightArm.rotation.z = Math.PI / 12;
    avatarGroup.add(rightArm);

    // Office Chair
    const chairSeatGeo = new THREE.BoxGeometry(0.9, 0.1, 0.8);
    const chairMat = new THREE.MeshStandardMaterial({ color: 0x475569, roughness: 0.6 });
    const chairSeat = new THREE.Mesh(chairSeatGeo, chairMat);
    chairSeat.position.set(0, 1.05, 0);
    avatarGroup.add(chairSeat);

    const chairBackGeo = new THREE.BoxGeometry(0.85, 0.9, 0.1);
    const chairBack = new THREE.Mesh(chairBackGeo, chairMat);
    chairBack.position.set(0, 1.5, 0.4);
    avatarGroup.add(chairBack);

    stationGroup.add(avatarGroup);

    // 5. Floating Holographic Badge above Desk
    const badgeGeo = new THREE.BoxGeometry(0.8, 0.8, 0.8);
    const badgeMat = new THREE.MeshStandardMaterial({
      color: colors[i].accent,
      emissive: colors[i].shirt,
      emissiveIntensity: 0.5,
      wireframe: true
    });
    const badge = new THREE.Mesh(badgeGeo, badgeMat);
    badge.position.set(0, 2.7, 0);
    stationGroup.add(badge);

    // 6. Station Selection Ring on Ground
    const ringGeo = new THREE.RingGeometry(1.6, 1.75, 32);
    const ringMat = new THREE.MeshBasicMaterial({
      color: i === 0 ? 0x2563eb : 0xcbd5e1,
      side: THREE.DoubleSide
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = -Math.PI / 2;
    ring.position.y = 0.02;
    stationGroup.add(ring);

    stationGroup.userData = {
      index: i,
      avatar: avatarGroup,
      badge: badge,
      ring: ring,
      light: stationLight,
      screen: screen,
      color: colors[i]
    };

    workstations.push(stationGroup);
    scene.add(stationGroup);
  }
}

function buildProjectToken() {
  // The glowing project token that travels across the pipeline
  const tokenGroup = new THREE.Group();

  const coreGeo = new THREE.OctahedronGeometry(0.4, 0);
  const coreMat = new THREE.MeshStandardMaterial({
    color: 0x2563eb,
    emissive: 0x3b82f6,
    emissiveIntensity: 1,
    roughness: 0.1
  });
  const core = new THREE.Mesh(coreGeo, coreMat);
  tokenGroup.add(core);

  const auraGeo = new THREE.SphereGeometry(0.6, 16, 16);
  const auraMat = new THREE.MeshBasicMaterial({
    color: 0x60a5fa,
    wireframe: true,
    transparent: true,
    opacity: 0.6
  });
  const aura = new THREE.Mesh(auraGeo, auraMat);
  tokenGroup.add(aura);

  const tokenLight = new THREE.PointLight(0x3b82f6, 1.5, 4);
  tokenGroup.add(tokenLight);

  tokenGroup.position.set(-10, 1.9, 0.15); // Start at station 1
  tokenTargetPos.set(-10, 1.9, 0.15);

  projectToken = tokenGroup;
  scene.add(projectToken);
}

function setupInteractionEvents(canvas) {
  // Orbit Drag Controls
  canvas.addEventListener('mousedown', (e) => {
    isOrbiting = true;
    previousMousePosition = { x: e.clientX, y: e.clientY };
  });

  window.addEventListener('mouseup', () => {
    isOrbiting = false;
  });

  window.addEventListener('mousemove', (e) => {
    if (isOrbiting) {
      const deltaX = e.clientX - previousMousePosition.x;
      const deltaY = e.clientY - previousMousePosition.y;

      // Orbit camera around center target
      camera.position.x -= deltaX * 0.04;
      camera.position.y = Math.max(8, Math.min(22, camera.position.y + deltaY * 0.04));

      previousMousePosition = { x: e.clientX, y: e.clientY };
    }
  });

  // Click on 3D Workstations via Raycaster
  canvas.addEventListener('click', (e) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(scene.children, true);

    if (intersects.length > 0) {
      // Find parent workstation
      let obj = intersects[0].object;
      while (obj.parent && !obj.userData?.index !== undefined && obj.parent !== scene) {
        if (obj.userData?.index !== undefined) break;
        obj = obj.parent;
      }

      if (obj && obj.userData?.index !== undefined) {
        setStage(obj.userData.index);
      }
    }
  });

  // Resize Handler
  window.addEventListener('resize', onWindowResize);
}

function onWindowResize() {
  if (!container || !renderer || !camera) return;
  const width = container.clientWidth;
  const height = container.clientHeight;
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height);
}

// Set Active Stage (0 to 4)
function setStage(index) {
  if (index < 0 || index >= stagesData.length) return;
  currentStageIndex = index;

  // Move Project Token target position
  const targetX = -10 + (index * 5);
  tokenTargetPos.set(targetX, 1.9, 0.15);

  // Update selection rings
  workstations.forEach((ws, i) => {
    if (i === index) {
      ws.userData.ring.material.color.setHex(0x2563eb);
      ws.userData.light.intensity = 1.6;
    } else {
      ws.userData.ring.material.color.setHex(0xcbd5e1);
      ws.userData.light.intensity = 0.5;
    }
  });

  // Smooth camera position with GSAP
  const targetData = stagesData[index];
  cameraTarget.set(targetData.targetPos.x, targetData.targetPos.y, targetData.targetPos.z);

  if (window.gsap) {
    gsap.to(camera.position, {
      x: targetData.cameraPos.x,
      y: targetData.cameraPos.y,
      z: targetData.cameraPos.z,
      duration: 1.2,
      ease: "power2.out"
    });
  }

  // Update HTML inspector panel
  updateInspectorUI(index);

  // Update tabs bar
  document.querySelectorAll('.stage-btn').forEach((btn, i) => {
    if (i === index) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

function updateInspectorUI(index) {
  const data = stagesData[index];
  if (!data) return;

  const nameEl = document.getElementById('inspector-name');
  const roleEl = document.getElementById('inspector-role');
  const statusEl = document.getElementById('inspector-status');
  const descEl = document.getElementById('inspector-desc');
  const outputEl = document.getElementById('inspector-output');
  const tagsEl = document.getElementById('inspector-tags');
  const logEl = document.getElementById('inspector-log');
  const avatarEl = document.getElementById('inspector-avatar');
  const progressText = document.getElementById('pipeline-progress-text');
  const taskPill = document.getElementById('current-task-pill');

  if (nameEl) nameEl.textContent = data.name;
  if (roleEl) roleEl.textContent = data.role;
  if (statusEl) statusEl.textContent = data.status;
  if (descEl) descEl.textContent = data.desc;
  if (outputEl) outputEl.textContent = data.deliverable;
  if (logEl) logEl.innerHTML = data.log.replace(/\n/g, '<br>');
  if (avatarEl) {
    avatarEl.textContent = data.initials;
    avatarEl.className = `w-14 h-14 rounded-2xl bg-gradient-to-tr ${data.avatarBg} text-white flex items-center justify-center font-bold text-lg shadow-md`;
  }
  if (progressText) progressText.textContent = `Stage ${index + 1} of 5`;
  if (taskPill) taskPill.textContent = `${data.deskName}: ${data.status}`;

  if (tagsEl) {
    tagsEl.innerHTML = data.tools.map(t => `<span class="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-medium">${t}</span>`).join('');
  }
}

// Next / Previous Station Button Handlers
document.addEventListener('DOMContentLoaded', () => {
  init3DOffice();

  // Tab navigation buttons
  document.querySelectorAll('.stage-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const stage = parseInt(btn.getAttribute('data-stage'));
      setStage(stage);
    });
  });

  // Prev / Next button listeners
  const prevBtn = document.getElementById('prev-stage-btn');
  const nextBtn = document.getElementById('next-stage-btn');

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      let prev = currentStageIndex - 1;
      if (prev < 0) prev = stagesData.length - 1;
      setStage(prev);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      let next = currentStageIndex + 1;
      if (next >= stagesData.length) next = 0;
      setStage(next);
    });
  }
});

// Render Loop
let clock = new THREE.Clock();

function animate() {
  requestAnimationFrame(animate);

  const elapsedTime = clock.getElapsedTime();

  // 1. Animate Avatars & Floating Badges at each desk
  workstations.forEach((ws, idx) => {
    // Subtle typing arm motion
    const avatar = ws.userData.avatar;
    if (avatar) {
      avatar.position.y = Math.sin(elapsedTime * 4 + idx) * 0.015;
    }

    // Floating rotating holographic badge
    const badge = ws.userData.badge;
    if (badge) {
      badge.rotation.y = elapsedTime * 0.8 + idx;
      badge.rotation.x = Math.sin(elapsedTime * 0.5 + idx) * 0.2;
      badge.position.y = 2.7 + Math.sin(elapsedTime * 2 + idx) * 0.08;
    }
  });

  // 2. Project Token motion & spinning
  if (projectToken) {
    // Smooth lerp to target station
    projectToken.position.lerp(tokenTargetPos, 0.06);
    projectToken.rotation.y = elapsedTime * 2;
    projectToken.rotation.z = Math.sin(elapsedTime * 3) * 0.3;
  }

  // Camera look target
  camera.lookAt(cameraTarget);

  renderer.render(scene, camera);
}
