<template>
  <section id="home" class="section-wrap">
    <div class="hero-wrap">
      <!-- Base dark bg -->
      <div class="hero-bg"></div>

      <!-- Aurora layers -->
      <div class="aurora aurora-1" aria-hidden="true"></div>
      <div class="aurora aurora-2" aria-hidden="true"></div>
      <div class="aurora aurora-3" aria-hidden="true"></div>
      <div class="aurora aurora-4" aria-hidden="true"></div>

      <!-- Dot grid -->
      <div class="hero-dots" aria-hidden="true"></div>

      <!-- Particle canvas -->
      <canvas ref="particlesCanvas" class="hero-particles" aria-hidden="true"></canvas>

      <!-- Bottom fade -->
      <div class="hero-bottom-fade" aria-hidden="true"></div>

      <div
        class="section-inner w-full flex flex-col-reverse md:flex-row justify-between items-center py-16 md:py-24 relative z-10 min-h-screen"
      >
        <!-- Intro Text -->
        <div class="p-2 md:p-4 w-full md:max-w-[55%] mb-8 md:mb-0 hero-text">
          <h1 class="text-xl md:text-3xl font-bold text-zinc-200">
            <span class="hello-soft text-[20px] md:text-[22px]">Hello</span> I'm
          </h1>
          <h1 class="font-extrabold mt-3 md:mt-5 text-4xl md:text-7xl text-zinc-50">
            Uzair Khan
          </h1>
          <h1 class="mt-4 md:mt-7 font-semibold text-2xl md:text-4xl frontend-soft">
            {{ typedText }}<span class="cursor-blink">|</span>
          </h1>

          <div class="mt-8 flex flex-wrap items-center gap-4">
            <a href="/CV.pdf" target="_blank">
              <button class="btn-primary hover:cursor-pointer">Download My CV</button>
            </a>
          </div>

          <!-- Social Icons -->
          <div class="mt-6 flex flex-wrap gap-4 ml-1 md:ml-2 hero-social">
            <a href="https://github.com/Uzair-khane" target="_blank" class="text-zinc-200 hover:text-white">
              <i class="fa-brands fa-github text-2xl hover:cursor-pointer"></i>
            </a>
            <a href="https://www.linkedin.com/in/uzair-khan-1080772b1" target="_blank" class="text-zinc-200 hover:text-white">
              <i class="fa-brands fa-linkedin text-2xl hover:cursor-pointer"></i>
            </a>
            <a href="https://www.facebook.com/share/1VoQc6WuPP/" target="_blank" class="text-zinc-200 hover:text-white">
              <i class="fa-brands fa-facebook text-2xl hover:cursor-pointer"></i>
            </a>
            <a href="https://www.instagram.com/uzairkhan32131?igsh=MWE3YmJvdGUxM2J0OQ==" target="_blank" class="text-zinc-200 hover:text-white">
              <i class="fa-brands fa-instagram text-2xl hover:cursor-pointer"></i>
            </a>
          </div>
        </div>

        <!-- Profile Image - Hexagon Design -->
        <div class="hero-image-area mb-10 md:mb-0">
          <!-- Outer glow blob -->
          <div class="hex-glow-blob" aria-hidden="true"></div>

          <!-- Rotating aurora ring -->
          <div class="hex-rotating-ring" aria-hidden="true"></div>

          <!-- Second counter-rotating ring -->
          <div class="hex-rotating-ring-2" aria-hidden="true"></div>

          <!-- Hexagon container -->
          <div class="hex-wrap animate-heroFloat">
            <div class="hex-inner">
              <img
                src="/profile.png"
                alt="Uzair Khan"
                class="hex-img"
              />
              <!-- Dark overlay -->
              <div class="hex-overlay" aria-hidden="true"></div>
            </div>
          </div>

          <!-- Floating glow dots -->
          <span class="float-dot dot-1 animate-pulseDot" style="animation-delay:0s"></span>
          <span class="float-dot dot-2 animate-pulseDot" style="animation-delay:0.7s"></span>
          <span class="float-dot dot-3 animate-pulseDot" style="animation-delay:1.4s"></span>
          <span class="float-dot dot-4 animate-pulseDot" style="animation-delay:2.1s"></span>
          <span class="float-dot dot-5 animate-pulseDot" style="animation-delay:2.8s"></span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const fullText = "Frontend Developer";
const typedText = ref("");
let index = 0;
let typingInterval = null;

const particlesCanvas = ref(null);
let rafId = 0;
let ctx;
let particles = [];
let lastT = 0;
let dpr = 1;

const resize = () => {
  const canvas = particlesCanvas.value;
  if (!canvas) return;
  dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
  const rect = canvas.getBoundingClientRect();
  canvas.width = Math.floor(rect.width * dpr);
  canvas.height = Math.floor(rect.height * dpr);
  ctx = canvas.getContext("2d");
  if (ctx) ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  const area = rect.width * rect.height;
  const count = Math.max(60, Math.min(140, Math.floor(area / 14000)));
  particles = Array.from({ length: count }).map(() => ({
    x: Math.random() * rect.width,
    y: Math.random() * rect.height,
    r: 0.7 + Math.random() * 1.8,
    vx: (Math.random() - 0.5) * 0.22,
    vy: (Math.random() - 0.5) * 0.22,
    a: 0.2 + Math.random() * 0.45,
  }));
};

const tick = (t) => {
  const canvas = particlesCanvas.value;
  if (!canvas || !ctx) return;
  const w = canvas.getBoundingClientRect().width;
  const h = canvas.getBoundingClientRect().height;
  const dt = Math.min(32, t - lastT || 16);
  lastT = t;
  ctx.clearRect(0, 0, w, h);
  for (const p of particles) {
    p.x += p.vx * (dt / 16);
    p.y += p.vy * (dt / 16);
    if (p.x < -10) p.x = w + 10;
    if (p.x > w + 10) p.x = -10;
    if (p.y < -10) p.y = h + 10;
    if (p.y > h + 10) p.y = -10;
    const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 8);
    grad.addColorStop(0, `rgba(0, 212, 255, ${p.a})`);
    grad.addColorStop(1, "rgba(0, 212, 255, 0)");
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r * 8, 0, Math.PI * 2);
    ctx.fill();
  }
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const a = particles[i];
      const b = particles[j];
      const dx = a.x - b.x;
      const dy = a.y - b.y;
      const dist = Math.hypot(dx, dy);
      if (dist > 130) continue;
      const alpha = (1 - dist / 130) * 0.12;
      ctx.strokeStyle = `rgba(124, 58, 237, ${alpha})`;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(a.x, a.y);
      ctx.lineTo(b.x, b.y);
      ctx.stroke();
    }
  }
  rafId = requestAnimationFrame(tick);
};

onMounted(() => {
  typingInterval = setInterval(() => {
    typedText.value += fullText[index];
    index++;
    if (index === fullText.length) clearInterval(typingInterval);
  }, 100);
  resize();
  window.addEventListener("resize", resize, { passive: true });
  rafId = requestAnimationFrame(tick);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", resize);
  if (rafId) cancelAnimationFrame(rafId);
  if (typingInterval) clearInterval(typingInterval);
});
</script>

<style scoped>

/* ── Base ── */
.hero-wrap {
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
}

/* Layer 1 - Deep dark base */
.hero-bg {
  position: absolute;
  inset: 0;
  background: #020408;
}

/* ── Aurora Layers ── */
.aurora {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  filter: blur(100px);
  mix-blend-mode: screen;
}

/* Aurora 1 - Top left cyan sweep */
.aurora-1 {
  width: 800px;
  height: 400px;
  top: -120px;
  left: -200px;
  background: linear-gradient(
    135deg,
    rgba(0, 255, 200, 0.18) 0%,
    rgba(0, 180, 255, 0.14) 50%,
    transparent 100%
  );
  animation: auroraMove1 12s ease-in-out infinite alternate;
  border-radius: 60% 40% 50% 50%;
}

/* Aurora 2 - Top right purple */
.aurora-2 {
  width: 700px;
  height: 500px;
  top: -80px;
  right: -150px;
  background: linear-gradient(
    225deg,
    rgba(160, 0, 255, 0.16) 0%,
    rgba(100, 0, 200, 0.12) 50%,
    transparent 100%
  );
  animation: auroraMove2 15s ease-in-out infinite alternate;
  border-radius: 40% 60% 60% 40%;
}

/* Aurora 3 - Middle green teal band */
.aurora-3 {
  width: 900px;
  height: 300px;
  top: 35%;
  left: 10%;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(0, 220, 180, 0.09) 30%,
    rgba(0, 150, 255, 0.11) 60%,
    transparent 100%
  );
  animation: auroraMove3 18s ease-in-out infinite alternate;
  border-radius: 50%;
  filter: blur(80px);
}

/* Aurora 4 - Bottom glow */
.aurora-4 {
  width: 600px;
  height: 350px;
  bottom: 0px;
  left: 30%;
  background: linear-gradient(
    0deg,
    rgba(80, 0, 180, 0.14) 0%,
    rgba(0, 180, 255, 0.08) 60%,
    transparent 100%
  );
  animation: auroraMove4 10s ease-in-out infinite alternate;
  border-radius: 50% 50% 40% 60%;
  filter: blur(90px);
}

/* Layer 3 - Dot grid */
.hero-dots {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(rgba(255, 255, 255, 0.045) 1px, transparent 1px);
  background-size: 28px 28px;
  pointer-events: none;
  z-index: 1;
}

/* Layer 4 - Bottom fade */
.hero-bottom-fade {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 200px;
  background: linear-gradient(to bottom, transparent, #020408);
  pointer-events: none;
  z-index: 2;
}

/* Particles canvas */
.hero-particles {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  pointer-events: none;
  z-index: 1;
}

/* ── Text ── */
.hero-text {
  animation: gentleIn 0.9s ease both;
}
.hello-soft {
  color: rgba(0, 220, 200, 0.85);
}
.frontend-soft {
  color: #8ab4c0;
}
.cursor-blink {
  display: inline-block;
  color: rgba(0, 212, 255, 0.8);
  animation: blinkCursor 1s step-end infinite;
  font-weight: 300;
  margin-left: 2px;
}

/* ── Buttons ── */
.btn-primary {
  background: transparent !important;
  border: 1.5px solid rgba(255, 255, 255, 0.38) !important;
  color: #ffffff !important;
  border-radius: 6px !important;
  padding: 10px 24px !important;
  font-size: 14px !important;
  box-shadow: none !important;
  filter: none !important;
  transition: all 0.3s ease !important;
}
.btn-primary:hover {
  background: rgba(255, 255, 255, 0.08) !important;
  border-color: rgba(255, 255, 255, 0.8) !important;
  transform: translateY(-1px);
}

/* ── Social ── */
.hero-social a {
  transition: color 0.3s ease, transform 0.3s ease;
}
.hero-social a:hover {
  color: #00d4ff !important;
  transform: translateY(-2px);
}

/* ══════════════════════════════
   HEXAGON IMAGE DESIGN
══════════════════════════════ */
.hero-image-area {
  position: relative;
  width: 300px;
  height: 340px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

@media (min-width: 768px) {
  .hero-image-area {
    width: 420px;
    height: 480px;
  }
}

/* Glow blob behind hex */
.hex-glow-blob {
  position: absolute;
  width: 120%;
  height: 120%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: radial-gradient(
    ellipse at center,
    rgba(0, 212, 255, 0.18) 0%,
    rgba(124, 58, 237, 0.14) 50%,
    transparent 75%
  );
  filter: blur(40px);
  border-radius: 50%;
  z-index: 0;
  animation: blobPulse 6s ease-in-out infinite;
}

/* Outer rotating ring 1 */
.hex-rotating-ring {
  position: absolute;
  width: 110%;
  height: 110%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  background: transparent;
  border: 2px dashed rgba(0, 212, 255, 0.3);
  animation: rotateHex 20s linear infinite;
  z-index: 5;
  pointer-events: none;
  /* Simulate hex border with outline via pseudo trick using box approach */
  outline: 2px dashed rgba(0, 212, 255, 0.25);
  outline-offset: 8px;
  border-radius: 4px;
}

/* Counter rotating ring 2 */
.hex-rotating-ring-2 {
  position: absolute;
  width: 105%;
  height: 105%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  outline: 1.5px dashed rgba(124, 58, 237, 0.25);
  outline-offset: 4px;
  border-radius: 4px;
  animation: rotateHex 14s linear infinite reverse;
  z-index: 5;
  pointer-events: none;
}

/* Hexagon wrapper - float animation applied here */
.hex-wrap {
  position: relative;
  z-index: 3;
  width: 260px;
  height: 300px;
  /* Gradient border trick */
  background: linear-gradient(
    135deg,
    rgba(0, 212, 255, 0.7),
    rgba(124, 58, 237, 0.7)
  );
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  padding: 3px;
  animation: heroFloat 5s ease-in-out infinite;
}

@media (min-width: 768px) {
  .hex-wrap {
    width: 360px;
    height: 416px;
  }
}

/* Hexagon inner - clips the image */
.hex-inner {
  position: relative;
  width: 100%;
  height: 100%;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  overflow: hidden;
  background: #020408;
}

/* Image inside hex */
.hex-img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  filter: brightness(0.95) contrast(1.05) saturate(1.05);
}

/* Dark overlay inside hex */
.hex-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    170deg,
    rgba(0, 10, 30, 0.05) 0%,
    rgba(0, 0, 0, 0.25) 60%,
    rgba(0, 5, 20, 0.65) 100%
  );
  z-index: 2;
}

/* Floating glow dots */
.float-dot {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  z-index: 6;
}
.dot-1 { width: 10px; height: 10px; top: 8%;   left: -4%;  background: rgba(0, 212, 255, 0.85); }
.dot-2 { width: 8px;  height: 8px;  top: 72%;  left: -5%;  background: rgba(0, 212, 255, 0.7); }
.dot-3 { width: 12px; height: 12px; top: 15%;  right: -4%; background: rgba(124, 58, 237, 0.85); }
.dot-4 { width: 7px;  height: 7px;  bottom: 12%; right: -5%; background: rgba(0, 212, 255, 0.7); }
.dot-5 { width: 9px;  height: 9px;  bottom: -3%; left: 42%;  background: rgba(124, 58, 237, 0.85); }

/* ── Keyframes ── */
@keyframes auroraMove1 {
  0%   { transform: translate(0px, 0px) scale(1) rotate(0deg); opacity: 0.7; }
  33%  { transform: translate(60px, 40px) scale(1.1) rotate(5deg); opacity: 1; }
  66%  { transform: translate(-30px, 80px) scale(0.95) rotate(-3deg); opacity: 0.8; }
  100% { transform: translate(40px, -20px) scale(1.05) rotate(2deg); opacity: 0.9; }
}

@keyframes auroraMove2 {
  0%   { transform: translate(0px, 0px) scale(1); opacity: 0.6; }
  40%  { transform: translate(-70px, 50px) scale(1.15); opacity: 0.9; }
  100% { transform: translate(30px, -40px) scale(0.9); opacity: 0.7; }
}

@keyframes auroraMove3 {
  0%   { transform: translateX(0px) scaleY(1); opacity: 0.5; }
  50%  { transform: translateX(80px) scaleY(1.3); opacity: 0.85; }
  100% { transform: translateX(-40px) scaleY(0.9); opacity: 0.6; }
}

@keyframes auroraMove4 {
  0%   { transform: translate(0, 0) scale(1); opacity: 0.5; }
  50%  { transform: translate(-50px, -30px) scale(1.2); opacity: 0.8; }
  100% { transform: translate(60px, -10px) scale(0.95); opacity: 0.55; }
}

@keyframes heroFloat {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50%       { transform: translateY(-16px) rotate(1deg); }
}

@keyframes rotateHex {
  0%   { transform: translate(-50%, -50%) rotate(0deg); }
  100% { transform: translate(-50%, -50%) rotate(360deg); }
}

@keyframes blobPulse {
  0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.8; }
  50%       { transform: translate(-50%, -50%) scale(1.15); opacity: 1; }
}

@keyframes pulseDot {
  0%, 100% { transform: scale(1); opacity: 0.8; }
  50%       { transform: scale(1.6); opacity: 0.3; }
}

@keyframes gentleIn {
  0%   { opacity: 0; transform: translateY(22px); }
  100% { opacity: 1; transform: translateY(0); }
}

@keyframes blinkCursor {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0; }
}

/* dot pulse utility */
.animate-pulseDot {
  animation: pulseDot 2s ease-in-out infinite;
}

/* ── Mobile ── */
@media (max-width: 768px) {
  .aurora-1 { width: 350px; height: 200px; }
  .aurora-2 { width: 300px; height: 250px; }
  .aurora-3 { width: 400px; height: 150px; }
  .aurora-4 { width: 280px; height: 180px; }
}
</style>