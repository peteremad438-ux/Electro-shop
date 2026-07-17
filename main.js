const PRODUCTS = [
  {
    id: 1,
    name: "Quantum Chrono",
    category: "wearables",
    price: 349,
    rating: 4.8,
    shortDesc: "Next-gen smartwatch featuring a micro-holographic projector.",
    description:
      "The Quantum Chrono redefines wearable technology. Built with a titanium-carbide chassis, it projects a crystal-clear holographic dashboard. Monitored biosensors track your neural activity, heart metrics, and blood oxygen levels in real-time.",
    specs: {
      "Case Material": "Titanium-Carbide Alloy",
      "Display Type": "Holo-HUD 2.0 Projector",
      "Battery Life": "Up to 14 days",
      "Water Resistance": "IP68 (Underworld Proof)",
      "Sensor Grid": "Neural Sync, Biometrics",
    },
    icon: "watch",
    imageSrc:
      "https://res.cloudinary.com/dbg6mw0g9/image/upload/f_auto,q_auto,w_600/v1782504534/download-removebg-preview_rsfysw.png",
  },
  {
    id: 2,
    name: "Aether Glass X",
    category: "wearables",
    price: 899,
    rating: 4.9,
    shortDesc: "Spatial computing augmented reality glasses with zero lag.",
    description:
      "Augment your reality seamlessly with the Aether Glass X. Powered by dual micro-OLED displays with a 180Hz refresh rate, these glasses embed digital work and gaming interfaces directly into your vision.",
    specs: {
      Optics: "Dual 4K Micro-OLED",
      Processor: "Apex N2 Neural Core",
      "Field of View": "120 degrees",
      Audio: "Spatial Bone Conduction",
      Weight: "72 grams",
    },
    icon: "glasses",
    imageSrc:
      "https://res.cloudinary.com/dbg6mw0g9/image/upload/f_auto,q_auto,w_600/v1782504532/photo2_wfaftx.png",
  },
  {
    id: 3,
    name: "Nova Mechanical Keyboard",
    category: "peripherals",
    price: 219,
    rating: 4.7,
    shortDesc:
      "Magnetic switch mechanical keyboard inside a frosted glass casing.",
    description:
      "Type at the speed of thought. The Nova Keyboard houses custom linear magnetic switches allowing dynamic actuation adjustment per key. Encased in a massive sound-dampened frosted acrylic shell with addressable RGB matrix LEDs.",
    specs: {
      Switches: "Apex Magnetic Linear",
      "Actuation Point": "Adjustable (0.1mm - 4.0mm)",
      Keycaps: "Double-shot PBT Cyber-Glyphs",
      Interface: "USB-C / Bluetooth 5.2",
      Backlighting: "Matrix Per-Key RGB",
    },
    icon: "keyboard",
    imageSrc:
      "https://res.cloudinary.com/dbg6mw0g9/image/upload/f_auto,q_auto,w_600/v1782504535/photo3_jzffr7.png",
  },
  {
    id: 4,
    name: "Vortex Soundpods",
    category: "audio",
    price: 189,
    rating: 4.6,
    shortDesc: "Active noise-cancelling earbuds with graphene drivers.",
    description:
      "Block out the noise of the metropolis. Vortex Soundpods feature premium dual-layer graphene drivers for high-fidelity audio reproduction. Our hybrid ANC system actively isolates background noise by up to 48dB.",
    specs: {
      Drivers: "11mm Graphene",
      "ANC Level": "Up to 48dB Active Isolation",
      Bluetooth: "Version 5.3 Low Energy",
      "Total Playtime": "42 hours (with charging case)",
      Charging: "Wireless / USB-C Fast Charge",
    },
    icon: "headphones",
    imageSrc:
      "https://res.cloudinary.com/dbg6mw0g9/image/upload/f_auto,q_auto,w_600/v1782504535/photo4_gmyxeg.png",
  },
  {
    id: 5,
    name: "Hyperion Mouse",
    category: "peripherals",
    price: 129,
    rating: 4.8,
    shortDesc: "Magnesium alloy skeleton mouse with 8K polling rate.",
    description:
      "The competitive edge you've been waiting for. The Hyperion mouse weighs only 45 grams, structured in a geometric magnesium alloy frame. Its optical sensor offers an insane 30,000 DPI resolution and true 8,000Hz polling speed.",
    specs: {
      Weight: "45 grams",
      Sensor: "Apex Focus 30K Optical",
      "Polling Rate": "True 8000Hz",
      "Battery Life": "Up to 90 hours",
      "Frame Material": "Magnesium Alloy Skeleton",
    },
    icon: "mouse",
    imageSrc:
      "https://res.cloudinary.com/dbg6mw0g9/image/upload/f_auto,q_auto,w_600/v1782504536/photo5_aomim8.png",
  },
  {
    id: 6,
    name: "Nebula Powerhub",
    category: "accessories",
    price: 79,
    rating: 4.5,
    shortDesc: "150W GaN charging hub featuring an interactive status screen.",
    description:
      "Power your entire battlestation from a single outlet. The Nebula Powerhub uses advanced Gallium Nitride (GaN) components to output up to 150W across four ports. The built-in LCD screen monitors real-time voltage and thermal rates.",
    specs: {
      "Max Power": "150 Watts",
      Technology: "Gallium Nitride (GaN) 5th Gen",
      Ports: "3x USB-C PD 3.1, 1x USB-A QC 4.0",
      Screen: "1.2-inch IPS status display",
      Safety: "Active Thermal Shielding",
    },
    icon: "cpu",
    imageSrc:
      "https://res.cloudinary.com/dbg6mw0g9/image/upload/f_auto,q_auto,w_600/v1782504535/photo6_g35hw7.png",
  },
  {
    id: 7,
    name: "Orion VR Visor",
    category: "wearables",
    price: 549,
    rating: 4.7,
    shortDesc: "Comfortable high-density VR headset for spatial gaming.",
    description:
      "Deep dive into virtual realities. The Orion VR Visor incorporates custom high-density lenses that eliminate the screen-door effect entirely. Built with sweat-wicking active cooling fabrics and full-room spatial tracking.",
    specs: {
      Display: "Dual LCD Panels, 90Hz",
      Resolution: "2064 x 2208 per eye",
      "IPD Adjustment": "Physical (58mm - 72mm)",
      Tracking: "6 DoF Inside-Out",
      Weight: "420 grams",
    },
    icon: "glasses",
    imageSrc:
      "https://res.cloudinary.com/dbg6mw0g9/image/upload/f_auto,q_auto,w_600/v1782504539/photo7_uaelcn.png",
  },
  {
    id: 8,
    name: "Aero Slim Keyboard",
    category: "peripherals",
    price: 179,
    rating: 4.6,
    shortDesc: "Ultra-thin, low-profile wireless mechanical keyboard.",
    description:
      "Sleek engineering meets mechanical precision. The Aero Slim is a low-profile keyboard featuring linear switches with a short travel distance. Excellent for clean minimalist workstations and lightning-fast typing speeds.",
    specs: {
      Switches: "Low-Profile Linear",
      Material: "Anodized Aluminum Faceplate",
      Connectivity: "2.4GHz / Bluetooth / Wired",
      "Profile Thickness": "Only 18mm",
      "Battery Life": "Up to 150 hours (RGB off)",
    },
    icon: "keyboard",
    imageSrc:
      "https://res.cloudinary.com/dbg6mw0g9/image/upload/f_auto,q_auto,w_600/v1782504539/photo8_ad7mif.png",
  },
  {
    id: 9,
    name: "Holo Projector Node",
    category: "accessories",
    price: 149,
    rating: 4.4,
    shortDesc: "Desktop holographic ambient light and virtual clock assistant.",
    description:
      "Add a touch of the future to your workspace. The Holo Projector Node generates customizable abstract shapes, time displays, or music visualizers floating directly in mid-air.",
    specs: {
      Projection: "Rotational Laser HUD",
      Brightness: "350 Lumens",
      Interface: "Wi-Fi 6 / Bluetooth 5.0",
      Controls: "Voice Assistant / Touch Dial",
      "Output Mode": "Holographic Matrix Clock",
    },
    icon: "sparkles",
    imageSrc:
      "https://res.cloudinary.com/dbg6mw0g9/image/upload/f_auto,q_auto,w_600/v1782504533/photo9_t3ba41.png",
  },
  {
    id: 10,
    name: "Acoustic Shield Pro",
    category: "audio",
    price: 299,
    rating: 4.8,
    shortDesc: "Audiophile-grade over-ear wireless headphones.",
    description:
      "Pure sound isolation. The Acoustic Shield Pro contains massive 45mm carbon-dome drivers, bringing high-resolution studio audio to a wireless frame. Features reactive audio tuning that matches your unique ear-canal acoustics.",
    specs: {
      Drivers: "45mm Carbon-Dome",
      "Frequency Response": "4Hz - 45,000Hz",
      "ANC Mode": "Adaptive Smart Cancellation",
      "Codec Support": "LDAC, AAC, aptX Adaptive",
      Playtime: "Up to 50 hours",
    },
    icon: "headphones",
    imageSrc:
      "https://res.cloudinary.com/dbg6mw0g9/image/upload/f_auto,q_auto,w_600/v1782504534/photo10_ly4ztt.png",
  },
  {
    id: 11,
    name: "Synapse Charging Pad",
    category: "peripherals",
    price: 59,
    rating: 4.5,
    shortDesc: "Dual charging desk mat with addressable perimeter RGB.",
    description:
      "Optimize your mouse movements and charging cycles simultaneously. The Synapse Pad integrates two wireless charging coils directly inside a spill-resistant hybrid fabric matrix. Surrounded by addressable RGB channels.",
    specs: {
      Dimensions: "900mm x 400mm x 4mm",
      "Charging Coils": "Dual Qi 15W Coils",
      "Surface Material": "Micro-woven Hybrid Fiber",
      Base: "Anti-slip Silicon Matrix",
      "RGB Channels": "3 zone custom addressable",
    },
    icon: "mouse",
    imageSrc:
      "https://res.cloudinary.com/dbg6mw0g9/image/upload/f_auto,q_auto,w_600/v1782504533/photo11_h6jrad.png",
  },
  {
    id: 12,
    name: "Apex Carbon Case",
    category: "accessories",
    price: 99,
    rating: 4.3,
    shortDesc: "Structural carbon laptop sleeve with magnetic clasp.",
    description:
      "Fortify your laptop during transit. Handcrafted using high-tensile carbon fiber plates and lined with shock-absorbent memory foam. The magnetic flap uses self-aligning tech-grade magnets to snap secure under any pressure.",
    specs: {
      "Sleeve Size": "Up to 16-inch laptops",
      Exterior: "100% Real Carbon Fiber 3K Weave",
      "Interior Lining": "Anti-scratch micro-plush foam",
      Clasp: "Neodymium Self-Aligning Magnets",
      Weight: "190 grams",
    },
    icon: "shield",
    imageSrc:
      "https://res.cloudinary.com/dbg6mw0g9/image/upload/f_auto,q_auto,w_600/v1782504537/photo12_hmu5mt.png",
  },
  {
    id: 13,
    name: "Pulse Neural Band",
    category: "wearables",
    price: 199,
    rating: 4.7,
    shortDesc: "EEG-capable fitness band for neural performance tracking.",
    description:
      "The Pulse Neural Band reads your brainwave activity through dry EEG sensors built into the band itself. Track focus levels, stress response, and cognitive load in real time. Perfect for operatives who optimize performance.",
    specs: {
      Sensors: "8-channel dry EEG array",
      "Data Sync": "Bluetooth 5.4 / NFC",
      "Battery Life": "Up to 7 days",
      Compatibility: "iOS / Android / Desktop",
      Case: "Aircraft-grade Titanium",
    },
    icon: "activity",
    imageSrc:
      "https://res.cloudinary.com/dbg6mw0g9/image/upload/f_auto,q_auto,w_600/v1782504536/photo13_tqmocu.png",
  },
  {
    id: 14,
    name: "Phantom Grip Controller",
    category: "peripherals",
    price: 159,
    rating: 4.6,
    shortDesc: "Hall-effect trigger controller with adaptive haptics.",
    description:
      "Dominate every session with the Phantom Grip. Hall-effect analog triggers guarantee zero drift for the lifetime of the device. Adaptive haptic motors simulate real-world texture feedback for maximum immersion.",
    specs: {
      Triggers: "Hall-Effect Analog, 0-drift",
      Haptics: "Adaptive LRA Motor Array",
      Connectivity: "2.4GHz / USB-C / Bluetooth",
      "Battery Life": "Up to 60 hours",
      Weight: "245 grams",
    },
    icon: "gamepad-2",
    imageSrc:
      "https://res.cloudinary.com/dbg6mw0g9/image/upload/f_auto,q_auto,w_600/v1782504539/photo14_i289dm.png",
  },
  {
    id: 15,
    name: "Zenith Monitor Arm",
    category: "accessories",
    price: 189,
    rating: 4.5,
    shortDesc: "Floating dual-monitor arm with cable management channel.",
    description:
      "Float your displays with surgical precision. The Zenith Arm uses gas spring technology to hold up to 12kg per arm with effortless repositioning. Full-perimeter cable management channels keep your battlestation surgical-clean.",
    specs: {
      Load: "Up to 12kg per arm",
      Adjustment: "360° rotation, tilt, swivel",
      Cable: "Full-channel management built-in",
      Mount: "VESA 75x75 / 100x100",
      Finish: "Matte Black Powder Coat",
    },
    icon: "monitor",
    imageSrc:
      "https://res.cloudinary.com/dbg6mw0g9/image/upload/f_auto,q_auto,w_600/v1782504539/photo15_mjwwbw.png",
  },
  {
    id: 16,
    name: "Vertex Desk Speaker",
    category: "audio",
    price: 249,
    rating: 4.7,
    shortDesc: "Active near-field studio monitor with spatial DSP.",
    description:
      "Hear every layer of your audio landscape. The Vertex Speaker pair features 3.5-inch silk-dome tweeter arrays with a down-firing bass reflex system. On-board DSP processes spatial audio in real time for cinema-grade immersion at your desk.",
    specs: {
      Drivers: '3.5" Silk Tweeter + 5" Woofer',
      "Frequency Response": "40Hz - 40kHz",
      DSP: "Spatial Audio 3D Processing",
      Inputs: "USB-C / Optical / Bluetooth 5.3",
      Finish: "Matte Obsidian",
    },
    icon: "volume-2",
    imageSrc:
      "https://res.cloudinary.com/dbg6mw0g9/image/upload/f_auto,q_auto,w_600/v1782504540/photo16_royoon.png",
  },
  {
    id: 17,
    name: "Cipher Desk Mat XL",
    category: "accessories",
    price: 69,
    rating: 4.4,
    shortDesc: "Extra-large 1200mm gaming mat with anti-slip quantum base.",
    description:
      "Take command of your entire workspace. The Cipher Desk Mat XL covers your full battlestation in micro-woven polyester fibers optimized for both optical and laser tracking. The quantum-grip silicon base never slides.",
    specs: {
      Dimensions: "1200mm x 550mm x 4mm",
      Surface: "Micro-Woven Speed Coating",
      Base: "Quantum Grip Silicon",
      Stitching: "Reinforced Laser-Cut Edges",
      Colors: "Shadow Black / Arctic White",
    },
    icon: "layout-dashboard",
    imageSrc:
      "https://res.cloudinary.com/dbg6mw0g9/image/upload/f_auto,q_auto,w_600/v1782504540/photo17_vme8bf.png",
  },
  {
    id: 18,
    name: "Neo Wireless Hub",
    category: "peripherals",
    price: 89,
    rating: 4.5,
    shortDesc: "7-port USB hub with 100W passthrough charging.",
    description:
      "Expand your connectivity arsenal. The Neo Wireless Hub provides 7 high-speed ports in a compact chassis, supporting simultaneous data transfer and 100W passthrough charging without throttling. The embedded heat sink runs cool under full load.",
    specs: {
      Ports: "4x USB-A 3.2, 2x USB-C, 1x SD",
      "Passthrough Charging": "100W USB-C PD",
      Transfer: "Up to 10Gbps USB 3.2 Gen 2",
      Cooling: "Embedded aluminum heat sink",
      Design: "Compact 120mm chassis",
    },
    icon: "usb",
    imageSrc:
      "https://res.cloudinary.com/dbg6mw0g9/image/upload/f_auto,q_auto,w_600/v1782504540/photo18_enzn2n.png",
  },
];

/* ─── State ─── */
let cart = [],
  wishlist = [],
  compareList = [],
  reviewsData = {},
  appliedPromo = null,
  hasSpunWheel = false,
  activeReviewStars = 5,
  checkoutStep = 1;

let revealObserver = null;
let catalogRenderTimer = null;
let userProfile = {
  name: "Guest Operative",
  rank: "Initiate Member",
  address: "",
  city: "",
  zip: "",
};
let currentFilters = {
  category: "all",
  maxPrice: 1200,
  search: "",
  sortBy: "featured",
};

const PROMO_CODES = {
  APEX20: 0.2,
  FUTURE10: 0.1,
  WHEEL5: 0.05,
  WHEEL10: 0.1,
  WHEEL15: 0.15,
  WHEEL25: 0.25,
  FREESHIP: 0.15,
};

/* ─── FIX: Persistent handler references to prevent listener leaks ─── */
let _cartClickHandler = null;
let _wishlistClickHandler = null;

/* ─── PERFORMANCE: Single lucide init tracker ─── */
let lucideInitPending = false;
function scheduleLucide() {
  if (lucideInitPending) return;
  lucideInitPending = true;
  requestAnimationFrame(() => {
    lucide.createIcons();
    lucideInitPending = false;
  });
}

/* ─── PERFORMANCE: Debounced catalog render ─── */
function debouncedRenderCatalog() {
  clearTimeout(catalogRenderTimer);
  catalogRenderTimer = setTimeout(renderCatalog, 120);
}

/* ─── Init ─── */
window.addEventListener("DOMContentLoaded", () => {
  initTheme();
  loadCartFromStorage();
  loadWishlistFromStorage();
  loadProfileFromStorage();
  loadReviewsFromStorage();
  loadWheelState();
  renderCatalog();
  setupEventListeners();
  setupCheckoutFlow();
  setupSpinWheel();
  setupDashboard();
  initParticles();
  initScrollReveal();
  initCounters();
  initHeaderScroll();
  initMobileMenu();
  initToastSystem();
  initQuickView();
  scheduleLucide();
});

/* ─── Theme ─── */
function initTheme() {
  const t = localStorage.getItem("apex-theme") || "dark";
  document.documentElement.setAttribute("data-theme", t);
}
function toggleTheme() {
  const t = document.documentElement.getAttribute("data-theme");
  const n = t === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", n);
  localStorage.setItem("apex-theme", n);
}

/* ─── FEATURE: Toast Notifications ─── */
function initToastSystem() {
  const container = document.createElement("div");
  container.id = "toast-container";
  container.style.cssText = `
    position:fixed;bottom:24px;left:50%;transform:translateX(-50%);
    z-index:99999;display:flex;flex-direction:column;gap:10px;
    align-items:center;pointer-events:none;
  `;
  document.body.appendChild(container);
}

function showToast(msg, type = "info", duration = 3000) {
  const container = document.getElementById("toast-container");
  if (!container) return;
  const icons = {
    success: "check-circle",
    error: "x-circle",
    info: "info",
    warning: "alert-triangle",
  };
  const colors = {
    success: "#06d6a0",
    error: "#ff007f",
    info: "#00f2fe",
    warning: "#ffb703",
  };
  const toast = document.createElement("div");
  toast.style.cssText = `
    display:flex;align-items:center;gap:10px;
    background:var(--bg-secondary);border:1px solid ${colors[type]}44;
    color:var(--text-primary);padding:12px 20px;border-radius:12px;
    font-size:14px;font-weight:500;pointer-events:all;
    box-shadow:0 8px 32px rgba(0,0,0,0.5);
    animation:toastIn .3s cubic-bezier(.16,1,.3,1) forwards;
    backdrop-filter:blur(16px);max-width:340px;text-align:left;
    border-left:3px solid ${colors[type]};
  `;
  toast.innerHTML = `<i data-lucide="${icons[type]}" style="width:18px;height:18px;color:${colors[type]};flex-shrink:0;"></i><span>${msg}</span>`;
  container.appendChild(toast);
  scheduleLucide();

  if (!document.getElementById("toast-styles")) {
    const style = document.createElement("style");
    style.id = "toast-styles";
    style.textContent = `
      @keyframes toastIn{from{opacity:0;transform:translateY(10px) scale(.95)}to{opacity:1;transform:translateY(0) scale(1)}}
      @keyframes toastOut{from{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(10px)}}
    `;
    document.head.appendChild(style);
  }

  setTimeout(() => {
    toast.style.animation = "toastOut .3s ease forwards";
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

/* ─── FEATURE: Mobile Hamburger Menu ─── */
function initMobileMenu() {
  const header = document.querySelector(".header-container");

  const hamburger = document.createElement("button");
  hamburger.className = "btn-icon hamburger-btn";
  hamburger.setAttribute("aria-label", "Toggle menu");
  hamburger.innerHTML = `<i data-lucide="menu"></i>`;
  hamburger.style.cssText = `display:none;`;
  header.insertBefore(hamburger, header.querySelector(".header-actions"));

  const mobileDrawer = document.createElement("div");
  mobileDrawer.id = "mobile-drawer";
  mobileDrawer.style.cssText = `
    position:fixed;top:80px;left:0;right:0;
    background:var(--glass-bg);backdrop-filter:blur(20px);
    border-bottom:1px solid var(--glass-border);
    padding:20px 24px;display:flex;flex-direction:column;gap:12px;
    z-index:99;transform:translateY(-10px);opacity:0;
    pointer-events:none;transition:all .3s cubic-bezier(.16,1,.3,1);
  `;
  mobileDrawer.innerHTML = `
    <div style="display:flex;flex-direction:column;gap:4px;" id="mobile-nav-links">
      <a href="#hero" class="mobile-nav-link" data-target="home">Home</a>
      <a href="#shop" class="mobile-nav-link" data-target="shop">Shop</a>
      <a href="#dashboard" class="mobile-nav-link" data-target="dashboard">Dashboard</a>
      <a href="#" class="mobile-nav-link" data-target="whoweare">Who We Are</a>
    </div>
    <div style="position:relative;margin-top:4px;">
      <i data-lucide="search" style="position:absolute;left:12px;top:50%;transform:translateY(-50%);width:16px;height:16px;color:var(--text-secondary);pointer-events:none;"></i>
      <input id="mobile-search-input" type="text" placeholder="Search future tech..."
        style="width:100%;background:var(--bg-tertiary);border:1px solid var(--glass-border);border-radius:999px;padding:10px 16px 10px 38px;font-size:14px;color:var(--text-primary);outline:none;" />
    </div>
  `;
  document.querySelector(".header").after(mobileDrawer);

  const mobileNavStyle = document.createElement("style");
  mobileNavStyle.textContent = `
    .mobile-nav-link{display:block;padding:12px 16px;border-radius:10px;font-size:15px;font-weight:500;color:var(--text-secondary);transition:all .2s;}
    .mobile-nav-link:hover,.mobile-nav-link.active{background:rgba(0,242,254,.08);color:var(--accent-cyan);}
    @media(max-width:768px){
      .hamburger-btn{display:flex!important;}
      .nav-links,.search-bar-container{display:none!important;}
    }
  `;
  document.head.appendChild(mobileNavStyle);

  let drawerOpen = false;
  hamburger.addEventListener("click", () => {
    drawerOpen = !drawerOpen;
    if (drawerOpen) {
      mobileDrawer.style.opacity = "1";
      mobileDrawer.style.transform = "translateY(0)";
      mobileDrawer.style.pointerEvents = "all";
      hamburger.innerHTML = `<i data-lucide="x"></i>`;
    } else {
      mobileDrawer.style.opacity = "0";
      mobileDrawer.style.transform = "translateY(-10px)";
      mobileDrawer.style.pointerEvents = "none";
      hamburger.innerHTML = `<i data-lucide="menu"></i>`;
    }
    scheduleLucide();
  });

  mobileDrawer.querySelectorAll(".mobile-nav-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      const t = link.dataset.target;
      if (t === "home") { e.preventDefault(); showHomeView(); }
      else if (t === "shop") { e.preventDefault(); showShopView(); }
      else if (t === "dashboard") { e.preventDefault(); showDashboardView(); }
      else if (t === "whoweare") { e.preventDefault(); showWhoWeAreView(); }
      drawerOpen = false;
      mobileDrawer.style.opacity = "0";
      mobileDrawer.style.transform = "translateY(-10px)";
      mobileDrawer.style.pointerEvents = "none";
      hamburger.innerHTML = `<i data-lucide="menu"></i>`;
      scheduleLucide();
    });
  });

  document.getElementById("mobile-search-input").addEventListener("input", (e) => {
    currentFilters.search = e.target.value;
    document.getElementById("search-input").value = e.target.value;
    debouncedRenderCatalog();
  });
  scheduleLucide();
}

/* ─── FEATURE: Quick-View keyboard shortcut ─── */
function initQuickView() {
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeProductModal();
      closeCheckoutModal();
      document.getElementById("compare-modal").classList.remove("open");
      document.getElementById("spin-modal").classList.remove("open");
    }
  });
}

/* ─── Particles ─── */
function initParticles() {
  const container = document.getElementById("hero-particles");
  if (!container) return;
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < 18; i++) {
    const p = document.createElement("div");
    p.className = "particle";
    const size = Math.random() * 4 + 2;
    p.style.cssText = `width:${size}px;height:${size}px;left:${Math.random() * 100}%;bottom:${Math.random() * 40}%;animation-duration:${Math.random() * 6 + 4}s;animation-delay:${Math.random() * 6}s;`;
    if (Math.random() > 0.5) p.style.background = "var(--accent-purple)";
    fragment.appendChild(p);
  }
  container.appendChild(fragment);
}

/* ─── Scroll Reveal ─── */
function observeRevealElements(root = document) {
  if (!revealObserver) return;
  root.querySelectorAll("[data-reveal]").forEach((el) => {
    if (!el.classList.contains("revealed")) revealObserver.observe(el);
  });
}
function initScrollReveal() {
  if (revealObserver) revealObserver.disconnect();
  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add("revealed"), i * 80);
          revealObserver.unobserve(e.target);
        }
      });
    },
    { threshold: 0.08 },
  );
  observeRevealElements();
}

/* ─── Stat Counters ─── */
function initCounters() {
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const el = e.target;
          const target = parseInt(el.getAttribute("data-count"));
          let current = 0;
          const step = Math.ceil(target / 40);
          const timer = setInterval(() => {
            current = Math.min(current + step, target);
            el.textContent = current;
            if (current >= target) clearInterval(timer);
          }, 40);
          obs.unobserve(el);
        }
      });
    },
    { threshold: 0.5 },
  );
  document.querySelectorAll("[data-count]").forEach((el) => obs.observe(el));
}

/* ─── Header Scroll ─── */
function initHeaderScroll() {
  let ticking = false;
  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          document.querySelector(".header").classList.toggle("scrolled", window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    },
    { passive: true },
  );
}

/* ─── Storage ─── */
function loadCartFromStorage() {
  try {
    const s = localStorage.getItem("apex-cart");
    if (s) { cart = JSON.parse(s); updateCartUI(); }
  } catch (e) { cart = []; }
}
function saveCartToStorage() {
  localStorage.setItem("apex-cart", JSON.stringify(cart));
}
function loadWishlistFromStorage() {
  try {
    const s = localStorage.getItem("apex-wishlist");
    if (s) { wishlist = JSON.parse(s); updateWishlistUI(); }
  } catch (e) { wishlist = []; }
}
function saveWishlistToStorage() {
  localStorage.setItem("apex-wishlist", JSON.stringify(wishlist));
}
function loadProfileFromStorage() {
  try {
    const s = localStorage.getItem("apex-profile");
    if (s) userProfile = { ...userProfile, ...JSON.parse(s) };
  } catch (e) {}
  updateProfileUI();
}
function saveProfileToStorage() {
  localStorage.setItem("apex-profile", JSON.stringify(userProfile));
}
function loadReviewsFromStorage() {
  try {
    const s = localStorage.getItem("apex-reviews");
    if (s) { reviewsData = JSON.parse(s); return; }
  } catch (e) {}
  PRODUCTS.forEach((p) => {
    reviewsData[p.id] = [
      { user: "CyberNeon99", rating: 5, comment: "Absolutely stellar performance. Exceeded my high expectations!" },
      { user: "TechOperative", rating: 4, comment: "High quality construct. Highly responsive UI." },
    ];
  });
  localStorage.setItem("apex-reviews", JSON.stringify(reviewsData));
}
function saveReviewsToStorage() {
  localStorage.setItem("apex-reviews", JSON.stringify(reviewsData));
}
function loadWheelState() {
  try {
    const s = localStorage.getItem("apex-has-spun");
    if (s) hasSpunWheel = JSON.parse(s);
  } catch (e) {}
}

/* ─── Flying particle animation ─── */
function animateFly(startEl, targetEl, isHeart = false) {
  if (!startEl || !targetEl) return;
  const sr = startEl.getBoundingClientRect(), tr = targetEl.getBoundingClientRect();
  const p = document.createElement("div");
  p.className = "flying-glow-particle";
  p.style.cssText = `width:20px;height:20px;left:${sr.left + sr.width / 2 - 10}px;top:${sr.top + sr.height / 2 - 10}px;position:fixed;`;
  if (isHeart) { p.style.background = "var(--accent-magenta)"; p.style.boxShadow = "0 0 12px var(--accent-magenta)"; }
  document.body.appendChild(p);
  const dur = 700, t0 = performance.now();
  function update(t) {
    const prog = Math.min((t - t0) / dur, 1);
    const ease = 1 - Math.pow(1 - prog, 3);
    p.style.left = `${sr.left + (tr.left - sr.left) * ease}px`;
    p.style.top = `${sr.top + (tr.top - sr.top) * ease}px`;
    p.style.transform = `scale(${1 - ease * 0.8})`;
    p.style.opacity = String(1 - ease * 0.5);
    if (prog < 1) requestAnimationFrame(update);
    else {
      p.remove();
      targetEl.classList.add("pulse");
      setTimeout(() => targetEl.classList.remove("pulse"), 400);
    }
  }
  requestAnimationFrame(update);
}

/* ─── FIX 1: renderCatalog — clone grid to nuke accumulated listeners ─── */
function renderCatalog() {
  const oldGrid = document.getElementById("products-grid");

  let filtered = PRODUCTS.filter((p) => {
    if (currentFilters.category !== "all" && p.category !== currentFilters.category) return false;
    if (p.price > currentFilters.maxPrice) return false;
    if (currentFilters.search) {
      const q = currentFilters.search.toLowerCase();
      if (!p.name.toLowerCase().includes(q) && !p.description.toLowerCase().includes(q)) return false;
    }
    return true;
  });

  if (currentFilters.sortBy === "price-low") filtered.sort((a, b) => a.price - b.price);
  else if (currentFilters.sortBy === "price-high") filtered.sort((a, b) => b.price - a.price);
  else if (currentFilters.sortBy === "rating") filtered.sort((a, b) => b.rating - a.rating);
  else filtered.sort((a, b) => a.id - b.id);

  document.getElementById("results-count").textContent = `Found ${filtered.length} products`;

  // Clone the grid node — this strips ALL previously attached event listeners
  const grid = oldGrid.cloneNode(false);
  oldGrid.parentNode.replaceChild(grid, oldGrid);

  const fragment = document.createDocumentFragment();

  if (filtered.length === 0) {
    const empty = document.createElement("div");
    empty.className = "empty-cart-state";
    empty.style.cssText = "grid-column:1/-1;padding:60px 0;";
    empty.innerHTML = `<i data-lucide="package-search"></i><p>No products match your filters.</p>`;
    fragment.appendChild(empty);
    grid.appendChild(fragment);
    scheduleLucide();
    return;
  }

  filtered.forEach((p, idx) => {
    const isWish = wishlist.includes(p.id);
    const isComp = compareList.includes(p.id);
    const pRevs = reviewsData[p.id] || [];
    const avg = pRevs.length
      ? (pRevs.reduce((s, r) => s + r.rating, 0) / pRevs.length).toFixed(1)
      : p.rating.toFixed(1);
    const imgContent = p.imageSrc
      ? `<img src="${p.imageSrc}" alt="${p.name}" loading="lazy">`
      : `<i data-lucide="${p.icon}" class="card-icon-fallback"></i>`;

    const card = document.createElement("div");
    card.className = "glass-card product-card";
    card.setAttribute("data-reveal", "");
    card.style.transitionDelay = `${idx * 50}ms`;
    card.dataset.productId = p.id;

    card.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
        <span class="product-category-tag">${p.category}</span>
        <button class="wishlist-card-btn ${isWish ? "active" : ""}" data-id="${p.id}" aria-label="Toggle wishlist">
          <i data-lucide="heart" style="${isWish ? "fill:currentColor;" : ""}width:16px;height:16px;"></i>
        </button>
      </div>
      <div class="product-img-wrapper" role="button" tabindex="0" aria-label="View ${p.name} details">
        <div class="card-glow"></div>${imgContent}
        <div class="quick-add-overlay">
          <button class="btn btn-sm btn-primary quick-add-inner" data-id="${p.id}">
            <i data-lucide="plus" style="width:14px;height:14px;"></i> Quick Add
          </button>
        </div>
      </div>
      <h3 class="product-title">${p.name}</h3>
      <p class="product-desc">${p.shortDesc}</p>
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;">
        <div class="product-rating">
          <i data-lucide="star" class="rating-star" style="width:13px;height:13px;"></i>
          <span>${avg} (${pRevs.length})</span>
        </div>
        <label class="compare-checkbox-container">
          <input type="checkbox" class="compare-chk" data-id="${p.id}" ${isComp ? "checked" : ""}><span>Compare</span>
        </label>
      </div>
      <div class="product-card-footer">
        <span class="price">$${p.price.toFixed(2)}</span>
        <button class="btn btn-sm btn-primary add-to-cart-btn" data-id="${p.id}">
          <i data-lucide="plus" style="width:14px;height:14px;"></i> Add
        </button>
      </div>`;

    fragment.appendChild(card);
  });

  grid.appendChild(fragment);

  // Single clean listener on the fresh grid — no accumulation possible
  grid.addEventListener("click", handleGridClick);

  if (revealObserver) observeRevealElements(grid);
  scheduleLucide();
}

/* ─── Event delegation for product grid ─── */
function handleGridClick(e) {
  const addBtn = e.target.closest(".add-to-cart-btn, .quick-add-inner");
  const wishBtn = e.target.closest(".wishlist-card-btn");
  const imgWrapper = e.target.closest(".product-img-wrapper");
  const titleEl = e.target.closest(".product-title");
  const compareChk = e.target.closest(".compare-chk");

  if (addBtn) {
    e.stopPropagation();
    const id = parseInt(addBtn.dataset.id);
    addToCart(id);
    animateFly(addBtn, document.getElementById("cart-toggle"));
    return;
  }
  if (wishBtn) {
    e.stopPropagation();
    const id = parseInt(wishBtn.dataset.id);
    toggleWishlist(id);
    wishBtn.classList.toggle("active", wishlist.includes(id));
    const icon = wishBtn.querySelector("i");
    if (icon) icon.style.fill = wishlist.includes(id) ? "currentColor" : "none";
    if (wishlist.includes(id)) animateFly(wishBtn, document.getElementById("wishlist-toggle"), true);
    return;
  }
  if (imgWrapper) {
    e.stopPropagation();
    const card = imgWrapper.closest(".product-card");
    if (card) openProductDetail(parseInt(card.dataset.productId));
    return;
  }
  if (titleEl) {
    e.stopPropagation();
    const card = titleEl.closest(".product-card");
    if (card) openProductDetail(parseInt(card.dataset.productId));
    return;
  }
  if (compareChk) {
    toggleCompare(parseInt(compareChk.dataset.id), compareChk);
  }
}

/* ─── Cart ─── */
function addToCart(id, qty = 1) {
  const ex = cart.find((i) => i.productId === id);
  if (ex) ex.quantity += qty;
  else cart.push({ productId: id, quantity: qty });
  saveCartToStorage();
  updateCartUI();
  const prod = PRODUCTS.find((p) => p.id === id);
  if (prod) showToast(`${prod.name} added to cart!`, "success");
}

/* ─── FIX 2: updateCartUI — remove old listener before adding new one ─── */
function updateCartUI() {
  const container = document.getElementById("cart-items-container");

  // Remove previous listener to prevent accumulation
  if (_cartClickHandler) {
    container.removeEventListener("click", _cartClickHandler);
    _cartClickHandler = null;
  }

  const fragment = document.createDocumentFragment();
  let totalQty = 0, subtotal = 0;

  if (cart.length === 0) {
    container.innerHTML = `<div class="empty-cart-state"><i data-lucide="shopping-cart"></i><p>Your cart is empty.</p></div>`;
    ["cart-count", "cart-header-count"].forEach((id) => (document.getElementById(id).textContent = "0"));
    document.getElementById("cart-subtotal").textContent = "$0.00";
    document.getElementById("cart-total").textContent = "$0.00";
    document.getElementById("discount-row").classList.add("hidden");
    scheduleLucide();
    return;
  }

  cart.forEach((item) => {
    const prod = PRODUCTS.find((p) => p.id === item.productId);
    if (!prod) return;
    totalQty += item.quantity;
    subtotal += prod.price * item.quantity;
    const imgContent = prod.imageSrc
      ? `<img src="${prod.imageSrc}" alt="${prod.name}" loading="lazy">`
      : `<i data-lucide="${prod.icon}"></i>`;
    const row = document.createElement("div");
    row.className = "cart-item";
    row.innerHTML = `
      <div class="cart-item-img">${imgContent}</div>
      <div class="cart-item-details">
        <h4>${prod.name}</h4>
        <span class="price">$${prod.price.toFixed(2)}</span>
        <div class="cart-item-qty">
          <button class="qty-btn" data-action="dec" data-id="${prod.id}"><i data-lucide="minus" style="width:12px;height:12px;"></i></button>
          <span>${item.quantity}</span>
          <button class="qty-btn" data-action="inc" data-id="${prod.id}"><i data-lucide="plus" style="width:12px;height:12px;"></i></button>
        </div>
      </div>
      <div class="cart-item-remove" data-remove="${prod.id}"><i data-lucide="trash-2" style="width:16px;height:16px;"></i></div>`;
    fragment.appendChild(row);
  });

  container.innerHTML = "";
  container.appendChild(fragment);

  // Store reference so we can remove it next time
  _cartClickHandler = (e) => {
    const qtyBtn = e.target.closest(".qty-btn");
    const removeBtn = e.target.closest(".cart-item-remove");
    if (qtyBtn) adjustQty(parseInt(qtyBtn.dataset.id), qtyBtn.dataset.action === "inc" ? 1 : -1);
    if (removeBtn) removeCartItem(parseInt(removeBtn.dataset.remove));
  };
  container.addEventListener("click", _cartClickHandler);

  document.getElementById("cart-count").textContent = totalQty;
  document.getElementById("cart-header-count").textContent = totalQty;
  document.getElementById("cart-subtotal").textContent = `$${subtotal.toFixed(2)}`;

  let discount = 0;
  if (appliedPromo && PROMO_CODES[appliedPromo]) {
    discount = subtotal * PROMO_CODES[appliedPromo];
    document.getElementById("discount-row").classList.remove("hidden");
    document.getElementById("cart-discount").textContent = `-$${discount.toFixed(2)}`;
  } else {
    document.getElementById("discount-row").classList.add("hidden");
  }
  document.getElementById("cart-total").textContent = `$${(subtotal - discount).toFixed(2)}`;
  scheduleLucide();
}

function adjustQty(id, diff) {
  const item = cart.find((i) => i.productId === id);
  if (!item) return;
  item.quantity += diff;
  if (item.quantity <= 0) cart = cart.filter((i) => i.productId !== id);
  saveCartToStorage();
  updateCartUI();
}
function removeCartItem(id) {
  cart = cart.filter((i) => i.productId !== id);
  saveCartToStorage();
  updateCartUI();
}
function openCart() {
  closeWishlist();
  document.getElementById("cart-sidebar").classList.add("open");
  document.getElementById("cart-overlay").classList.add("open");
}
function closeCart() {
  document.getElementById("cart-sidebar").classList.remove("open");
  document.getElementById("cart-overlay").classList.remove("open");
}

/* ─── Wishlist ─── */
function toggleWishlist(id) {
  const idx = wishlist.indexOf(id);
  if (idx > -1) wishlist.splice(idx, 1);
  else {
    wishlist.push(id);
    const prod = PRODUCTS.find((p) => p.id === id);
    if (prod) showToast(`${prod.name} added to wishlist!`, "info");
  }
  saveWishlistToStorage();
  updateWishlistUI();
}

/* ─── FIX 3: updateWishlistUI — remove old listener before adding new one ─── */
function updateWishlistUI() {
  const container = document.getElementById("wishlist-items-container");

  // Remove previous listener to prevent accumulation
  if (_wishlistClickHandler) {
    container.removeEventListener("click", _wishlistClickHandler);
    _wishlistClickHandler = null;
  }

  document.getElementById("wishlist-count").textContent = wishlist.length;
  document.getElementById("wishlist-header-count").textContent = wishlist.length;

  if (wishlist.length === 0) {
    container.innerHTML = `<div class="empty-cart-state"><i data-lucide="heart"></i><p>Your wishlist is empty.</p></div>`;
    scheduleLucide();
    return;
  }

  const fragment = document.createDocumentFragment();
  wishlist.forEach((id) => {
    const prod = PRODUCTS.find((p) => p.id === id);
    if (!prod) return;
    const imgContent = prod.imageSrc
      ? `<img src="${prod.imageSrc}" alt="${prod.name}" loading="lazy">`
      : `<i data-lucide="${prod.icon}"></i>`;
    const row = document.createElement("div");
    row.className = "cart-item";
    row.innerHTML = `
      <div class="cart-item-img">${imgContent}</div>
      <div class="cart-item-details" style="flex-grow:1;">
        <h4>${prod.name}</h4><span class="price">$${prod.price.toFixed(2)}</span>
        <div style="margin-top:8px;">
          <button class="btn btn-sm btn-primary" data-move="${prod.id}">Add to Cart</button>
        </div>
      </div>
      <div class="cart-item-remove" data-remove-wish="${prod.id}"><i data-lucide="x" style="width:14px;height:14px;"></i></div>`;
    fragment.appendChild(row);
  });

  container.innerHTML = "";
  container.appendChild(fragment);

  // Store reference so we can remove it next time
  _wishlistClickHandler = (e) => {
    const moveBtn = e.target.closest("[data-move]");
    const removeBtn = e.target.closest("[data-remove-wish]");
    if (moveBtn) moveWishlistToCart(parseInt(moveBtn.dataset.move), moveBtn);
    if (removeBtn) toggleWishlist(parseInt(removeBtn.dataset.removeWish || removeBtn.dataset["remove-wish"]));
  };
  container.addEventListener("click", _wishlistClickHandler);

  scheduleLucide();
}

function moveWishlistToCart(id, el) {
  addToCart(id, 1);
  const idx = wishlist.indexOf(id);
  if (idx > -1) wishlist.splice(idx, 1);
  saveWishlistToStorage();
  updateWishlistUI();
  animateFly(el, document.getElementById("cart-toggle"));
}
function openWishlist() {
  closeCart();
  document.getElementById("wishlist-sidebar").classList.add("open");
  document.getElementById("wishlist-overlay").classList.add("open");
}
function closeWishlist() {
  document.getElementById("wishlist-sidebar").classList.remove("open");
  document.getElementById("wishlist-overlay").classList.remove("open");
}

/* ─── Compare ─── */
function toggleCompare(id, chk) {
  const idx = compareList.indexOf(id);
  if (idx > -1) compareList.splice(idx, 1);
  else {
    if (compareList.length >= 3) {
      showToast("Max 3 products to compare at once.", "warning");
      if (chk) chk.checked = false;
      return;
    }
    compareList.push(id);
  }
  document.getElementById("compare-count").textContent = compareList.length;
  document.getElementById("comparison-bar").classList.toggle("active", compareList.length > 0);
}
function renderCompareModal() {
  const wrapper = document.getElementById("compare-table-wrapper");
  wrapper.innerHTML = "";
  if (!compareList.length) return;
  const prods = compareList.map((id) => PRODUCTS.find((p) => p.id === id)).filter(Boolean);
  const specKeys = new Set();
  prods.forEach((p) => Object.keys(p.specs).forEach((k) => specKeys.add(k)));
  let hdr = "<th>Specifications</th>";
  prods.forEach((p) => {
    hdr += `<th class="product-header-cell"><i data-lucide="${p.icon}"></i><h4>${p.name}</h4><span>$${p.price.toFixed(2)}</span></th>`;
  });
  let body = `<tr><td class="compare-row-title">Rating</td>`;
  prods.forEach((p) => {
    const r = reviewsData[p.id] || [];
    const avg = r.length ? (r.reduce((s, x) => s + x.rating, 0) / r.length).toFixed(1) : p.rating.toFixed(1);
    body += `<td>★ ${avg}</td>`;
  });
  body += `</tr>`;
  specKeys.forEach((k) => {
    body += `<tr><td class="compare-row-title">${k}</td>`;
    prods.forEach((p) => { body += `<td>${p.specs[k] || "N/A"}</td>`; });
    body += `</tr>`;
  });
  wrapper.innerHTML = `<table class="compare-table"><thead><tr>${hdr}</tr></thead><tbody>${body}</tbody></table>`;
  document.getElementById("compare-modal").classList.add("open");
  scheduleLucide();
}
function clearCompare() {
  compareList = [];
  document.querySelectorAll(".compare-chk").forEach((c) => (c.checked = false));
  document.getElementById("compare-count").textContent = "0";
  document.getElementById("comparison-bar").classList.remove("active");
}

/* ─── Product Detail ─── */
function openProductDetail(id) {
  const prod = PRODUCTS.find((p) => p.id === id);
  if (!prod) return;
  let specsHTML = "";
  for (const [k, v] of Object.entries(prod.specs))
    specsHTML += `<div class="spec-item"><span class="spec-label">${k}</span><span class="spec-value">${v}</span></div>`;
  const pRevs = reviewsData[id] || [];
  const avg = pRevs.length
    ? (pRevs.reduce((s, r) => s + r.rating, 0) / pRevs.length).toFixed(1)
    : prod.rating.toFixed(1);
  let revsHTML = pRevs.length === 0
    ? `<p style="color:var(--text-secondary);font-size:13px;padding:10px 0;">No reviews yet.</p>`
    : pRevs.map((r) => {
        const stars = [1, 2, 3, 4, 5]
          .map((i) => `<i data-lucide="star" style="width:10px;height:10px;fill:${i <= r.rating ? "#ffb703" : "none"};color:${i <= r.rating ? "#ffb703" : "var(--text-secondary)"};"></i>`)
          .join("");
        return `<div class="review-card"><div class="review-card-header"><span class="review-user">${r.user}</span><div style="display:flex;gap:2px;">${stars}</div></div><p class="review-comment">${r.comment}</p></div>`;
      }).join("");

  const imgContent = prod.imageSrc
    ? `<img src="${prod.imageSrc}" alt="${prod.name}" loading="lazy">`
    : `<i data-lucide="${prod.icon}"></i>`;

  document.getElementById("product-modal-body").innerHTML = `
    <div class="modal-product-img"><div class="card-glow"></div>${imgContent}</div>
    <div class="modal-product-info">
      <button class="modal-scroll-btn" id="modal-scroll-btn">↓ Scroll to reviews</button>
      <div class="product-category-tag">${prod.category}</div>
      <h2>${prod.name}</h2>
      <div class="product-rating" style="margin-bottom:12px;">
        <i data-lucide="star" class="rating-star"></i>
        <span>${avg} (${pRevs.length} Reviews)</span>
      </div>
      <div class="price">$${prod.price.toFixed(2)}</div>
      <p class="desc">${prod.description}</p>
      <div class="specs-list">${specsHTML}</div>
      <button class="btn btn-primary btn-glow" id="modal-add-btn" data-id="${prod.id}">
        <i data-lucide="shopping-cart"></i> Add to Cart
      </button>
    </div>
    <div class="modal-reviews-section" id="modal-reviews-section">
      <div class="reviews-summary-row"><h3>Reviews</h3><span>Score: <strong>${avg}/5</strong></span></div>
      <div class="reviews-list">${revsHTML}</div>
      <div class="review-form"><h4>Submit Review</h4>
        <div class="rating-input-stars" id="star-selector">
          ${[1, 2, 3, 4, 5].map((i) => `<button class="star-input-btn active" data-val="${i}"><i data-lucide="star"></i></button>`).join("")}
        </div>
        <div class="review-submit-input-group">
          <input type="text" id="review-comment-input" placeholder="Your review...">
          <button class="btn btn-primary btn-sm" id="submit-review-btn">Submit</button>
        </div>
      </div>
    </div>`;

  document.getElementById("modal-add-btn").addEventListener("click", () => {
    addToCart(prod.id);
    animateFly(document.getElementById("modal-add-btn"), document.getElementById("cart-toggle"));
    closeProductModal();
  });
  document.getElementById("modal-scroll-btn").addEventListener("click", () => {
    document.getElementById("modal-reviews-section").scrollIntoView({ behavior: "smooth", block: "start" });
  });
  document.getElementById("submit-review-btn").addEventListener("click", () => submitReview(id));

  activeReviewStars = 5;
  document.querySelectorAll(".star-input-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      activeReviewStars = parseInt(btn.dataset.val);
      document.querySelectorAll(".star-input-btn").forEach((b) =>
        b.classList.toggle("active", parseInt(b.dataset.val) <= activeReviewStars)
      );
    });
  });

  document.getElementById("product-modal").classList.add("open");
  scheduleLucide();
}
function submitReview(pid) {
  const input = document.getElementById("review-comment-input");
  const c = input.value.trim();
  if (!c) { showToast("Please write a review first.", "warning"); return; }
  if (!reviewsData[pid]) reviewsData[pid] = [];
  reviewsData[pid].push({ user: userProfile.name || "Operative", rating: activeReviewStars, comment: c });
  saveReviewsToStorage();
  showToast("Review submitted!", "success");
  openProductDetail(pid);
  renderCatalog();
}
function closeProductModal() {
  document.getElementById("product-modal").classList.remove("open");
}

/* ─── Spin Wheel ─── */
function setupSpinWheel() {
  const openSpin = () => {
    document.getElementById("wheel-result-box").classList.add("hidden");
    document.getElementById("spin-modal").classList.add("open");
  };
  document.getElementById("hero-spin-btn").addEventListener("click", openSpin);
  const ctaSpin = document.getElementById("cta-spin-btn");
  if (ctaSpin) ctaSpin.addEventListener("click", openSpin);
  document.getElementById("close-spin-modal").addEventListener("click", () =>
    document.getElementById("spin-modal").classList.remove("open")
  );

  document.getElementById("wheel-spin-btn").addEventListener("click", () => {
    if (hasSpunWheel) { showToast("You already spun the wheel this cycle!", "warning"); return; }
    const rewards = [
      { title: "5% Off", desc: "Use code WHEEL5 for 5% off.", code: "WHEEL5" },
      { title: "Try Again", desc: "Signal lost. Try next cycle.", code: null },
      { title: "15% Off", desc: "Use code WHEEL15 for 15% off.", code: "WHEEL15" },
      { title: "Free Shipping", desc: "Use code FREESHIP.", code: "FREESHIP" },
      { title: "10% Off", desc: "Use code WHEEL10 for 10% off.", code: "WHEEL10" },
      { title: "Try Again", desc: "Quantum noise. Try again.", code: null },
      { title: "25% Off", desc: "Use code WHEEL25 for 25% off!", code: "WHEEL25" },
      { title: "Apex Gift", desc: "Use code APEXGIFT for credits.", code: "APEXGIFT" },
    ];
    const sector = Math.floor(Math.random() * 8);
    document.getElementById("wheel").style.transform = `rotate(${360 * 5 + sector * 45 + 22.5}deg)`;
    document.getElementById("wheel-spin-btn").disabled = true;

    setTimeout(() => {
      hasSpunWheel = true;
      localStorage.setItem("apex-has-spun", JSON.stringify(true));
      const r = rewards[sector];
      document.getElementById("wheel-result-title").textContent = r.title;
      document.getElementById("wheel-result-desc").textContent = r.desc;
      const claimBtn = document.getElementById("wheel-claim-btn");
      if (r.code) {
        claimBtn.classList.remove("hidden");
        claimBtn.onclick = () => {
          document.getElementById("promo-input").value = r.code;
          document.getElementById("promo-apply").click();
          document.getElementById("spin-modal").classList.remove("open");
          openCart();
        };
      } else {
        claimBtn.classList.add("hidden");
      }
      document.getElementById("wheel-result-box").classList.remove("hidden");
      document.getElementById("wheel-spin-btn").disabled = false;
    }, 5000);
  });
}

/* ─── Dashboard ─── */
function setupDashboard() {
  document.getElementById("nav-home-btn").addEventListener("click", (e) => { e.preventDefault(); showHomeView(); });
  document.getElementById("nav-shop-btn").addEventListener("click", (e) => { e.preventDefault(); showShopView(); });
  document.getElementById("nav-dashboard-btn").addEventListener("click", (e) => { e.preventDefault(); showDashboardView(); });
  document.getElementById("nav-whoweare-btn").addEventListener("click", (e) => { e.preventDefault(); showWhoWeAreView(); });
  document.getElementById("footer-whoweare-link").addEventListener("click", (e) => { e.preventDefault(); showWhoWeAreView(); });
  document.getElementById("back-from-whoweare").addEventListener("click", showHomeView);

  document.querySelectorAll(".db-menu-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".db-menu-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const tabId = btn.dataset.tab;
      document.querySelectorAll(".db-tab-content").forEach((t) => t.classList.toggle("active", t.id === tabId));
      if (tabId === "db-stats") updateStatsTab();
    });
  });

  document.getElementById("profile-edit-form").addEventListener("submit", (e) => {
    e.preventDefault();
    userProfile.name = document.getElementById("prof-name").value;
    userProfile.address = document.getElementById("prof-address").value;
    userProfile.city = document.getElementById("prof-city").value;
    userProfile.zip = document.getElementById("prof-zip").value;
    saveProfileToStorage();
    updateProfileUI();
    showToast("Profile updated successfully!", "success");
  });
}

function showHomeView() {
  ["nav-home-btn"].forEach((id) => document.getElementById(id).classList.add("active"));
  ["nav-shop-btn", "nav-dashboard-btn", "nav-whoweare-btn"].forEach((id) => document.getElementById(id).classList.remove("active"));
  ["hero", "features", "shop"].forEach((id) => document.getElementById(id).classList.remove("hidden"));
  ["dashboard", "whoweare"].forEach((id) => document.getElementById(id).classList.add("hidden"));
  document.querySelectorAll(".stats-section,.testimonials-section,.marquee-section,.cta-banner-section")
    .forEach((s) => s.classList.remove("hidden"));
  window.scrollTo({ top: 0, behavior: "smooth" });
}
function showShopView() {
  showHomeView();
  setTimeout(() => {
    const el = document.getElementById("shop");
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 100, behavior: "smooth" });
  }, 100);
}
function showDashboardView() {
  ["nav-home-btn", "nav-shop-btn", "nav-whoweare-btn"].forEach((id) => document.getElementById(id).classList.remove("active"));
  document.getElementById("nav-dashboard-btn").classList.add("active");
  ["hero", "features", "shop", "whoweare"].forEach((id) => document.getElementById(id).classList.add("hidden"));
  document.getElementById("dashboard").classList.remove("hidden");
  document.querySelectorAll(".stats-section,.testimonials-section,.marquee-section,.cta-banner-section")
    .forEach((s) => s.classList.add("hidden"));
  updateDashboardOrders();
  updateStatsTab();
  window.scrollTo({ top: 0, behavior: "smooth" });
}
function showWhoWeAreView() {
  ["nav-home-btn", "nav-shop-btn", "nav-dashboard-btn"].forEach((id) => document.getElementById(id).classList.remove("active"));
  document.getElementById("nav-whoweare-btn").classList.add("active");
  ["hero", "features", "shop", "dashboard"].forEach((id) => document.getElementById(id).classList.add("hidden"));
  document.getElementById("whoweare").classList.remove("hidden");
  document.querySelectorAll(".stats-section,.testimonials-section,.marquee-section,.cta-banner-section")
    .forEach((s) => s.classList.add("hidden"));
  window.scrollTo({ top: 0, behavior: "smooth" });
  setTimeout(() => {
    document.querySelectorAll("#whoweare [data-reveal]").forEach((el) => {
      el.classList.remove("revealed");
      setTimeout(() => el.classList.add("revealed"), 200);
    });
  }, 100);
}
function updateProfileUI() {
  document.getElementById("profile-display-name").textContent = userProfile.name;
  const pfNameEl = document.getElementById("prof-name");
  if (pfNameEl) pfNameEl.value = userProfile.name;
  const pfAddrEl = document.getElementById("prof-address");
  if (pfAddrEl) pfAddrEl.value = userProfile.address || "";
  const pfCityEl = document.getElementById("prof-city");
  if (pfCityEl) pfCityEl.value = userProfile.city || "";
  const pfZipEl = document.getElementById("prof-zip");
  if (pfZipEl) pfZipEl.value = userProfile.zip || "";
  const shipNameEl = document.getElementById("ship-name");
  if (shipNameEl) shipNameEl.value = userProfile.name;
  const shipAddrEl = document.getElementById("ship-address");
  if (shipAddrEl) shipAddrEl.value = userProfile.address || "";
  const shipCityEl = document.getElementById("ship-city");
  if (shipCityEl) shipCityEl.value = userProfile.city || "";
  const shipZipEl = document.getElementById("ship-zip");
  if (shipZipEl) shipZipEl.value = userProfile.zip || "";
}
function updateDashboardOrders() {
  const orders = JSON.parse(localStorage.getItem("apex-orders") || "[]");
  const list = document.getElementById("db-orders-list");
  list.innerHTML = "";
  if (!orders.length) {
    list.innerHTML = `<div class="no-orders"><i data-lucide="clipboard-list"></i><p>No transactions registered.</p></div>`;
    scheduleLucide();
    return;
  }
  const fragment = document.createDocumentFragment();
  [...orders].reverse().forEach((o) => {
    const card = document.createElement("div");
    card.className = "order-card";
    const itemsHTML = o.items
      .map((i) => `<div class="order-item-row"><span>${i.name} <span style="opacity:.6;">x${i.qty}</span></span><span>$${(i.price * i.qty).toFixed(2)}</span></div>`)
      .join("");
    card.innerHTML = `
      <div class="order-card-header">
        <span class="order-card-id">${o.id}</span>
        <span class="order-card-date">${o.date}</span>
      </div>
      <div class="order-card-items">${itemsHTML}</div>
      <div class="order-card-footer">
        <span class="order-status">${o.status}</span>
        <span class="order-total">$${o.total.toFixed(2)}</span>
      </div>`;
    fragment.appendChild(card);
  });
  list.appendChild(fragment);
  scheduleLucide();
}
function updateStatsTab() {
  const orders = JSON.parse(localStorage.getItem("apex-orders") || "[]");
  const total = orders.reduce((s, o) => s + o.total, 0);
  const avg = orders.length ? total / orders.length : 0;
  document.getElementById("stats-total-spent").textContent = `$${total.toFixed(2)}`;
  document.getElementById("stats-order-count").textContent = orders.length;
  document.getElementById("stats-avg-spent").textContent = `$${avg.toFixed(2)}`;
  const ranks = ["Initiate Member", "Field Agent", "Special Operative", "Syndicate Captain", "Apex Visionary"];
  const ri = Math.min(Math.floor(total / 1000), 4);
  userProfile.rank = ranks[ri];
  document.getElementById("profile-display-rank").textContent = userProfile.rank;
  const pfRank = document.getElementById("prof-rank");
  if (pfRank) pfRank.value = userProfile.rank;
  const prog = Math.min(((total - ri * 1000) / 1000) * 100, 100);
  document.getElementById("rank-progress-percent").textContent = `${prog.toFixed(0)}% to next rank`;
  document.getElementById("rank-progress-fill").style.width = `${prog}%`;
}

/* ─── Checkout ─── */
function setupCheckoutFlow() {
  const goTo = (step) => {
    checkoutStep = step;
    document.querySelectorAll(".checkout-step").forEach((el, i) => el.classList.toggle("active", i === step - 1));
    document.querySelectorAll(".step-indicator").forEach((el, i) => el.classList.toggle("active", i <= step - 1));
  };

  document.getElementById("btn-to-step-2").addEventListener("click", () => {
    const n = document.getElementById("ship-name").value.trim(),
      em = document.getElementById("ship-email").value.trim(),
      a = document.getElementById("ship-address").value.trim(),
      c = document.getElementById("ship-city").value.trim(),
      z = document.getElementById("ship-zip").value.trim();
    if (!n || !em || !a || !c || !z) { showToast("Fill in all shipping details.", "error"); return; }
    goTo(2);
  });
  document.getElementById("btn-back-to-step-1").addEventListener("click", () => goTo(1));

  document.getElementById("btn-to-step-3").addEventListener("click", () => {
    const num = document.getElementById("card-number").value.trim(),
      nm = document.getElementById("card-name").value.trim(),
      exp = document.getElementById("card-expiry").value.trim(),
      cvv = document.getElementById("card-cvv").value.trim();
    if (num.length < 16 || !nm || exp.length < 5 || cvv.length < 3) { showToast("Enter valid card details.", "error"); return; }
    document.getElementById("review-shipping-name").textContent = document.getElementById("ship-name").value;
    document.getElementById("review-shipping-address").textContent =
      `${document.getElementById("ship-address").value}, ${document.getElementById("ship-city").value}`;
    document.getElementById("review-shipping-email").textContent = document.getElementById("ship-email").value;
    document.getElementById("review-card-last4").textContent = num.replace(/\s/g, "").slice(-4);

    const list = document.getElementById("review-items-list");
    list.innerHTML = "";
    let sub = 0;
    const fragment = document.createDocumentFragment();
    cart.forEach((item) => {
      const p = PRODUCTS.find((x) => x.id === item.productId);
      if (!p) return;
      sub += p.price * item.quantity;
      const r = document.createElement("div");
      r.className = "review-item-row";
      r.innerHTML = `<span>${p.name} <span class="qty">x${item.quantity}</span></span><span>$${(p.price * item.quantity).toFixed(2)}</span>`;
      fragment.appendChild(r);
    });
    list.appendChild(fragment);

    document.getElementById("review-subtotal").textContent = `$${sub.toFixed(2)}`;
    let disc = 0;
    if (appliedPromo && PROMO_CODES[appliedPromo]) {
      disc = sub * PROMO_CODES[appliedPromo];
      document.getElementById("review-discount-row").classList.remove("hidden");
      document.getElementById("review-discount").textContent = `-$${disc.toFixed(2)}`;
    } else {
      document.getElementById("review-discount-row").classList.add("hidden");
    }
    const fin = sub - disc;
    document.getElementById("review-total").textContent = `$${fin.toFixed(2)}`;
    document.getElementById("btn-submit-order").textContent = `Place Order $${fin.toFixed(2)}`;
    goTo(3);
  });
  document.getElementById("btn-back-to-step-2").addEventListener("click", () => goTo(2));

  /* Credit card live preview */
  const cardNum = document.getElementById("card-number"),
    cardName = document.getElementById("card-name"),
    cardExp = document.getElementById("card-expiry"),
    cardCvv = document.getElementById("card-cvv"),
    ccVis = document.getElementById("credit-card-visual");

  cardNum.addEventListener("input", (e) => {
    let v = e.target.value.replace(/\D/g, ""), f = "";
    for (let i = 0; i < v.length; i++) { if (i > 0 && i % 4 === 0) f += " "; f += v[i]; }
    e.target.value = f;
    document.getElementById("cc-number-display").textContent = f || "•••• •••• •••• ••••";
  });
  cardName.addEventListener("input", (e) => {
    document.getElementById("cc-name-display").textContent = e.target.value.toUpperCase() || "YOUR NAME";
  });
  cardExp.addEventListener("input", (e) => {
    let v = e.target.value.replace(/\D/g, "");
    if (v.length > 2) v = v.slice(0, 2) + "/" + v.slice(2, 4);
    e.target.value = v;
    document.getElementById("cc-exp-display").textContent = v || "MM/YY";
  });
  cardCvv.addEventListener("focus", () => ccVis.classList.add("flipped"));
  cardCvv.addEventListener("blur", () => ccVis.classList.remove("flipped"));
  cardCvv.addEventListener("input", (e) => {
    document.getElementById("cc-cvv-display").textContent = e.target.value || "•••";
  });

  document.getElementById("checkout-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const orderId = `#APX-${Math.floor(100000 + Math.random() * 900000)}`;
    const orders = JSON.parse(localStorage.getItem("apex-orders") || "[]");
    let sub = 0;
    const items = cart.map((item) => {
      const p = PRODUCTS.find((x) => x.id === item.productId);
      sub += p.price * item.quantity;
      return { name: p.name, qty: item.quantity, price: p.price };
    });
    let disc = 0;
    if (appliedPromo && PROMO_CODES[appliedPromo]) disc = sub * PROMO_CODES[appliedPromo];
    orders.push({ id: orderId, date: new Date().toLocaleDateString(), items, total: sub - disc, status: "Processing" });
    localStorage.setItem("apex-orders", JSON.stringify(orders));
    cart = [];
    appliedPromo = null;
    saveCartToStorage();
    updateCartUI();
    document.getElementById("checkout-form").reset();
    document.getElementById("cc-number-display").textContent = "•••• •••• •••• ••••";
    document.getElementById("cc-name-display").textContent = "YOUR NAME";
    document.getElementById("cc-exp-display").textContent = "MM/YY";
    document.getElementById("cc-cvv-display").textContent = "•••";
    closeCheckoutModal();
    document.getElementById("success-order-id").textContent = orderId;
    document.getElementById("success-modal").classList.add("open");
  });
}

function openCheckoutModal() {
  if (!cart.length) { showToast("Add items to cart first!", "warning"); return; }
  closeCart();
  checkoutStep = 1;
  document.querySelectorAll(".checkout-step").forEach((el, i) => el.classList.toggle("active", i === 0));
  document.querySelectorAll(".step-indicator").forEach((el, i) => el.classList.toggle("active", i === 0));
  document.getElementById("checkout-modal").classList.add("open");
}
function closeCheckoutModal() {
  document.getElementById("checkout-modal").classList.remove("open");
}

/* ─── Global Events ─── */
function setupEventListeners() {
  document.getElementById("theme-toggle").addEventListener("click", toggleTheme);
  document.getElementById("cart-toggle").addEventListener("click", openCart);
  document.getElementById("cart-close").addEventListener("click", closeCart);
  document.getElementById("cart-overlay").addEventListener("click", closeCart);
  document.getElementById("wishlist-toggle").addEventListener("click", openWishlist);
  document.getElementById("wishlist-close").addEventListener("click", closeWishlist);
  document.getElementById("wishlist-overlay").addEventListener("click", closeWishlist);
  document.getElementById("add-wishlist-to-cart-btn").addEventListener("click", () => {
    wishlist.forEach((id) => addToCart(id, 1));
    wishlist = [];
    saveWishlistToStorage();
    updateWishlistUI();
    closeWishlist();
    openCart();
  });

  const featBtn = document.querySelector(".add-to-cart-featured");
  if (featBtn) featBtn.addEventListener("click", () => {
    addToCart(parseInt(featBtn.dataset.id));
    animateFly(featBtn, document.getElementById("cart-toggle"));
  });

  document.querySelectorAll(".category-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".category-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentFilters.category = btn.dataset.category;
      debouncedRenderCatalog();
    });
  });

  const pr = document.getElementById("price-range");
  pr.addEventListener("input", (e) => {
    document.getElementById("price-value").textContent = `$${e.target.value}`;
    currentFilters.maxPrice = parseFloat(e.target.value);
    debouncedRenderCatalog();
  });
  document.getElementById("sort-select").addEventListener("change", (e) => {
    currentFilters.sortBy = e.target.value;
    renderCatalog();
  });
  document.getElementById("search-input").addEventListener("input", (e) => {
    currentFilters.search = e.target.value;
    debouncedRenderCatalog();
  });
  document.getElementById("reset-filters").addEventListener("click", () => {
    currentFilters = { category: "all", maxPrice: 1200, search: "", sortBy: "featured" };
    pr.value = 1200;
    document.getElementById("price-value").textContent = "$1200";
    document.getElementById("sort-select").value = "featured";
    document.getElementById("search-input").value = "";
    document.querySelectorAll(".category-btn").forEach((b) => b.classList.remove("active"));
    document.querySelector('[data-category="all"]').classList.add("active");
    renderCatalog();
  });

  document.getElementById("close-product-modal").addEventListener("click", closeProductModal);
  document.getElementById("product-modal").addEventListener("click", (e) => {
    if (e.target === document.getElementById("product-modal")) closeProductModal();
  });
  document.getElementById("close-checkout-modal").addEventListener("click", closeCheckoutModal);
  document.getElementById("checkout-modal").addEventListener("click", (e) => {
    if (e.target === document.getElementById("checkout-modal")) closeCheckoutModal();
  });
  document.getElementById("checkout-btn").addEventListener("click", openCheckoutModal);
  document.getElementById("success-close-btn").addEventListener("click", () => {
    document.getElementById("success-modal").classList.remove("open");
    showDashboardView();
  });
  document.getElementById("success-modal").addEventListener("click", (e) => {
    if (e.target === document.getElementById("success-modal")) document.getElementById("success-modal").classList.remove("open");
  });
  document.getElementById("compare-clear-btn").addEventListener("click", clearCompare);
  document.getElementById("compare-open-btn").addEventListener("click", renderCompareModal);
  document.getElementById("close-compare-modal").addEventListener("click", () =>
    document.getElementById("compare-modal").classList.remove("open")
  );
  document.getElementById("compare-modal").addEventListener("click", (e) => {
    if (e.target === document.getElementById("compare-modal")) document.getElementById("compare-modal").classList.remove("open");
  });

  const promoApply = document.getElementById("promo-apply"),
    promoMsg = document.getElementById("promo-message");
  promoApply.addEventListener("click", () => {
    const code = document.getElementById("promo-input").value.trim().toUpperCase();
    if (!code) return;
    if (PROMO_CODES[code] !== undefined) {
      appliedPromo = code;
      promoMsg.textContent = `✓ ${PROMO_CODES[code] * 100}% discount applied!`;
      promoMsg.className = "promo-message success";
      updateCartUI();
      showToast(`Promo ${code} applied — ${PROMO_CODES[code] * 100}% off!`, "success");
    } else {
      promoMsg.textContent = "Invalid promo code.";
      promoMsg.className = "promo-message error";
      showToast("Invalid promo code.", "error");
    }
  });

  document.getElementById("promo-input").addEventListener("keydown", (e) => {
    if (e.key === "Enter") document.getElementById("promo-apply").click();
  });

  document.querySelectorAll(".cat-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const cat = link.dataset.cat;
      currentFilters.category = cat;
      document.querySelectorAll(".category-btn").forEach((b) => b.classList.toggle("active", b.dataset.category === cat));
      showHomeView();
      setTimeout(() => renderCatalog(), 150);
    });
  });

  document.querySelector(".logo").addEventListener("click", showHomeView);
}