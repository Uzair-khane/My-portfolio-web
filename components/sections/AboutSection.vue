<script setup>
import { ref, onMounted, onUnmounted } from "vue";

// ── Read More toggle ────────────────────────────────────────────
const isExpanded = ref(false);

// ── Stats count-up ──────────────────────────────────────────────
const stats = ref([
  { label: "Years of Experience", target: 2,   suffix: "+", current: 0 },
  { label: "Projects Completed",  target: 20,  suffix: "+", current: 0 },
  { label: "Technologies Used",   target: 15,  suffix: "+", current: 0 },
]);

let statsObserver = null;

function animateStats() {
  stats.value.forEach((stat, i) => {
    stat.current = 0;
    const duration = 1200;
    const step = stat.target / (duration / 16);
    let current = 0;
    const timer = setInterval(() => {
      current = Math.min(current + step, stat.target);
      stats.value[i].current = Math.floor(current);
      if (current >= stat.target) clearInterval(timer);
    }, 16);
  });
}

// ── Tech stack icons ────────────────────────────────────────────
const techIcons = [
  { name: "Vue.js",       icon: "fa-brands fa-vuejs",     color: "#42b883", delay: "0s",    x: "10%", y: "5%"  },
  { name: "Nuxt.js",      icon: "fa-brands fa-node-js",   color: "#00d4ff", delay: "0.4s",  x: "60%", y: "2%"  },
  { name: "HTML5",        icon: "fa-brands fa-html5",     color: "#e34f26", delay: "0.8s",  x: "80%", y: "18%" },
  { name: "CSS3",         icon: "fa-brands fa-css3-alt",  color: "#264de4", delay: "0.2s",  x: "5%",  y: "40%" },
  { name: "JavaScript",   icon: "fa-brands fa-js",        color: "#f7df1e", delay: "1.0s",  x: "50%", y: "30%" },
  { name: "Tailwind",     icon: "fa-brands fa-css3",      color: "#38bdf8", delay: "0.6s",  x: "25%", y: "55%" },
  { name: "Git",          icon: "fa-brands fa-git-alt",   color: "#f05032", delay: "1.2s",  x: "70%", y: "55%" },
  { name: "GitHub",       icon: "fa-brands fa-github",    color: "#a0a0a0", delay: "1.4s",  x: "88%", y: "40%" },
  { name: "React",        icon: "fa-brands fa-react",     color: "#61dafb", delay: "0.3s",  x: "38%", y: "78%" },
  { name: "Bootstrap",    icon: "fa-brands fa-bootstrap", color: "#7c3aed", delay: "0.9s",  x: "12%", y: "78%" },
  { name: "NPM",          icon: "fa-brands fa-npm",       color: "#cc3534", delay: "1.6s",  x: "65%", y: "82%" },
];

// ── Refs ────────────────────────────────────────────────────────
const leftRef  = ref(null);
const rightRef = ref(null);
const statsRef = ref(null);
const leftVisible  = ref(false);
const rightVisible = ref(false);

let leftObs  = null;
let rightObs = null;

onMounted(() => {
  const opts = { threshold: 0.15 };

  leftObs = new IntersectionObserver((entries) => {
    entries.forEach(e => { leftVisible.value = e.isIntersecting; });
  }, opts);
  if (leftRef.value) leftObs.observe(leftRef.value);

  rightObs = new IntersectionObserver((entries) => {
    entries.forEach(e => { rightVisible.value = e.isIntersecting; });
  }, opts);
  if (rightRef.value) rightObs.observe(rightRef.value);

  statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        animateStats();
      } else {
        stats.value.forEach(s => { s.current = 0; });
      }
    });
  }, { threshold: 0.3 });
  if (statsRef.value) statsObserver.observe(statsRef.value);
});

onUnmounted(() => {
  leftObs?.disconnect();
  rightObs?.disconnect();
  statsObserver?.disconnect();
});
</script>

<template>
  <section id="about" class="section-wrap overflow-hidden">
    <div class="section-inner py-16 md:py-24">
      <div class="flex flex-col md:flex-row gap-12 md:gap-16 items-start px-0">

        <!-- ══ LEFT SIDE (60%) ══ -->
        <div
          ref="leftRef"
          class="w-full md:w-[60%] transition-all duration-700 ease-out"
          :class="leftVisible
            ? 'opacity-100 translate-x-0'
            : 'opacity-0 -translate-x-10'"
        >
          <!-- Section label -->
          <span class="text-xs font-semibold tracking-[0.25em] text-[#00d4ff] uppercase mb-3 block">
            Who I Am
          </span>

          <!-- Big heading with gradient underline -->
          <div class="relative inline-block mb-8">
            <h2 class="text-4xl md:text-5xl font-extrabold text-zinc-50">
              About Me
            </h2>
            <span
              class="absolute left-0 -bottom-2 h-[3px] rounded-full bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] transition-all duration-700"
              :class="leftVisible ? 'w-full' : 'w-0'"
            ></span>
          </div>

          <!-- Bio paragraphs with Read More/Less -->
          <div class="space-y-4 text-zinc-300/90 text-base md:text-lg leading-relaxed font-sans">

            <!-- Always visible: first 2 paragraphs -->
            <p>
              Hi, I'm Uzair Khan — a dedicated Frontend Developer. I build modern,
              responsive, and user-friendly websites. Skilled in Vue.js, Nuxt 3,
              Tailwind CSS, and clean code. I focus on performance, accessibility, and
              great UI/UX. I love turning ideas into interactive digital experiences.
              Always learning, growing, and exploring new technologies.
            </p>
            <p>
              I specialize in building responsive, user-friendly, and modern web
              interfaces using technologies like Vue.js, Nuxt 3, and Tailwind CSS.
            </p>

            <!-- Collapsible extra paragraphs -->
            <div class="bio-collapse" :class="{ 'bio-expanded': isExpanded }">
              <div class="bio-collapse-inner">
                <p>
                  I love creating beautiful UIs that are not just visually appealing
                  but also highly functional and fast.
                </p>
                <p>
                  I'm skilled in reusable component development, performance
                  optimization, and accessibility best practices.
                </p>
                <p>
                  With a strong focus on clean code and performance, I turn creative
                  ideas into responsive, cross-browser compatible apps.
                </p>
                <p>
                  Whether it's building a complete UI from scratch or collaborating
                  with teams, I bring a positive mindset and full dedication to every
                  project.
                </p>
                <p>
                  When I'm not coding, I enjoy exploring new technologies, improving
                  my skills, and staying up-to-date with the latest trends in web
                  development.
                </p>
                <p>Let's build something amazing together!</p>
              </div>
            </div>
          </div>

          <!-- Read More / Read Less Button -->
          <button
            class="btn-readmore mt-6"
            @click="isExpanded = !isExpanded"
          >
            <span>{{ isExpanded ? 'Read Less' : 'Read More' }}</span>
            <i
              class="fa-solid fa-chevron-down btn-arrow"
              :class="{ 'arrow-up': isExpanded }"
            ></i>
          </button>

          <!-- ── Stat boxes ── -->
          <div ref="statsRef" class="mt-10 flex flex-wrap gap-4">
            <div
              v-for="(stat, i) in stats"
              :key="i"
              class="flex-1 min-w-[130px] border border-white/10 rounded-lg p-5 text-center
                     hover:border-[#00d4ff]/40 hover:shadow-[0_0_20px_rgba(0,212,255,0.12)]
                     transition-all duration-300 cursor-default"
            >
              <div class="text-3xl font-extrabold text-[#00d4ff]">
                {{ stat.current }}{{ stat.suffix }}
              </div>
              <div class="mt-1 text-xs text-zinc-400 font-medium tracking-wide">
                {{ stat.label }}
              </div>
            </div>
          </div>
        </div>

        <!-- ══ RIGHT SIDE (40%) ══ -->
        <div
          ref="rightRef"
          class="w-full md:w-[40%] transition-all duration-700 ease-out relative min-h-[420px]"
          :class="rightVisible
            ? 'opacity-100 translate-x-0'
            : 'opacity-0 translate-x-10'"
        >
          <!-- Faint grid overlay -->
          <div class="absolute inset-0 tech-grid-bg rounded-2xl pointer-events-none z-0" aria-hidden="true"></div>

          <!-- Tech icon cloud -->
          <div class="relative z-10 w-full h-full min-h-[420px] md:min-h-[500px]">
            <div
              v-for="(tech, i) in techIcons"
              :key="i"
              class="absolute flex flex-col items-center gap-1 group"
              :style="{ left: tech.x, top: tech.y, animationDelay: tech.delay }"
            >
              <div
                class="tech-icon-box animate-floatIcon group-hover:scale-110 transition-transform duration-300"
                :style="{ animationDelay: tech.delay, '--glow-color': tech.color }"
              >
                <i
                  :class="tech.icon"
                  class="text-3xl transition-all duration-300"
                  :style="{ color: tech.color }"
                ></i>
              </div>
              <span class="text-[10px] text-zinc-400 group-hover:text-zinc-200 transition-colors duration-300 tracking-wide whitespace-nowrap">
                {{ tech.name }}
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>

/* ── Read More Collapse ── */
.bio-collapse {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.55s cubic-bezier(0.4, 0, 0.2, 1);
}
.bio-collapse-inner {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 1rem;
}
.bio-expanded {
  max-height: 800px;
}

/* ── Read More Button ── */
.btn-readmore {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: transparent;
  border: 1.5px solid rgba(255, 255, 255, 0.38);
  color: #ffffff;
  border-radius: 6px;
  padding: 10px 24px;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.5px;
  cursor: pointer;
  transition: all 0.3s ease;
}
.btn-readmore:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.8);
  transform: translateY(-1px);
}

/* Arrow rotation */
.btn-arrow {
  font-size: 12px;
  transition: transform 0.35s ease;
}
.arrow-up {
  transform: rotate(180deg);
}

/* ── Tech grid bg ── */
.tech-grid-bg {
  background-image: radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px);
  background-size: 22px 22px;
}

/* ── Tech icon box ── */
.tech-icon-box {
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  transition: box-shadow 0.3s ease, transform 0.3s ease;
}
.tech-icon-box:hover,
.group:hover .tech-icon-box {
  box-shadow: 0 0 18px 4px var(--glow-color, rgba(0,212,255,0.3));
  border-color: rgba(255,255,255,0.18);
}

@keyframes floatIcon {
  0%,100% { transform: translateY(0px); }
  50%      { transform: translateY(-10px); }
}
.animate-floatIcon {
  animation: floatIcon 4s ease-in-out infinite;
}
</style>