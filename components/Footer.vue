<script setup>
import { ref, onMounted, onUnmounted } from "vue";

// Stagger visibility for 3 columns
const col1Ref = ref(null);
const col2Ref = ref(null);
const col3Ref = ref(null);
const col1Vis = ref(false);
const col2Vis = ref(false);
const col3Vis = ref(false);

let obs1 = null, obs2 = null, obs3 = null;

const makeObs = (target, visible) =>
  new IntersectionObserver(
    (entries) => { entries.forEach(e => { visible.value = e.isIntersecting; }); },
    { threshold: 0.1 }
  );

onMounted(() => {
  obs1 = makeObs(col1Ref.value, col1Vis); if (col1Ref.value) obs1.observe(col1Ref.value);
  obs2 = makeObs(col2Ref.value, col2Vis); if (col2Ref.value) obs2.observe(col2Ref.value);
  obs3 = makeObs(col3Ref.value, col3Vis); if (col3Ref.value) obs3.observe(col3Ref.value);
});

onUnmounted(() => {
  obs1?.disconnect(); obs2?.disconnect(); obs3?.disconnect();
});

const navLinks = [
  { label: "Home",     to: "#home"     },
  { label: "About",    to: "#about"    },
  { label: "Skills",   to: "#skills"   },
  { label: "Projects", to: "#projects" },
  { label: "Contact",  to: "#contact"  },
];

const socialLinks = [
  { icon: "fa-brands fa-github",    href: "https://github.com/Uzair-khane",                               label: "GitHub"   },
  { icon: "fa-brands fa-linkedin",  href: "https://www.linkedin.com/in/uzair-khan-1080772b1",             label: "LinkedIn" },
  { icon: "fa-brands fa-facebook",  href: "https://www.facebook.com/share/1VoQc6WuPP/",                  label: "Facebook" },
  { icon: "fa-brands fa-instagram", href: "https://www.instagram.com/uzairkhan32131?igsh=MWE3YmJvdGUxM2J0OQ==", label: "Instagram"},
];
</script>

<template>
  <footer class="relative w-full mt-20">
    <!-- Top gradient border -->
    <div class="h-px w-full bg-gradient-to-r from-[#00d4ff] via-[#7c3aed] to-[#00d4ff]"></div>

    <div class="section-inner py-14">
      <!-- 3-column grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">

        <!-- ── Column 1: Brand ── -->
        <div
          ref="col1Ref"
          class="flex flex-col gap-5 transition-all duration-700 ease-out"
          :class="col1Vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
          style="transition-delay: 0ms"
        >
          <h2 class="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#7c3aed]">
            Uzair Khan
          </h2>
          <p class="text-sm text-zinc-400 leading-relaxed max-w-[260px]">
            Frontend Developer based in Pakistan
          </p>

          <!-- Social icons -->
          <div class="flex flex-wrap gap-3 mt-1">
            <a
              v-for="social in socialLinks"
              :key="social.label"
              :href="social.href"
              target="_blank"
              :aria-label="social.label"
              class="social-icon-box group"
            >
              <i :class="social.icon" class="text-base text-zinc-300 group-hover:text-[#03050f] transition-colors duration-300"></i>
            </a>
          </div>
        </div>

        <!-- ── Column 2: Quick Links ── -->
        <div
          ref="col2Ref"
          class="flex flex-col gap-5 transition-all duration-700 ease-out"
          :class="col2Vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
          style="transition-delay: 120ms"
        >
          <span class="text-xs font-semibold tracking-[0.22em] text-[#00d4ff] uppercase">
            Quick Links
          </span>
          <nav class="flex flex-col gap-3">
            <a
              v-for="link in navLinks"
              :key="link.label"
              :href="link.to"
              class="footer-nav-link group"
            >
              <span class="footer-nav-arrow">→</span>
              {{ link.label }}
            </a>
          </nav>
        </div>

        <!-- ── Column 3: Contact Info ── -->
        <div
          ref="col3Ref"
          class="flex flex-col gap-5 transition-all duration-700 ease-out"
          :class="col3Vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
          style="transition-delay: 240ms"
        >
          <span class="text-xs font-semibold tracking-[0.22em] text-[#00d4ff] uppercase">
            Get In Touch
          </span>
          <div class="flex flex-col gap-4">
            <a href="mailto:uzairkhantaken1234@gmail.com" class="contact-row hover:text-[#00d4ff]">
              <i class="fa-solid fa-envelope text-[#00d4ff]/80 w-4 shrink-0"></i>
              <span>uzairkhantaken1234@gmail.com</span>
            </a>
            <a href="tel:+923149535884" class="contact-row hover:text-[#00d4ff]">
              <i class="fa-solid fa-phone text-[#00d4ff]/80 w-4 shrink-0"></i>
              <span>+92 3149535884</span>
            </a>
            <div class="contact-row">
              <i class="fa-solid fa-location-dot text-[#00d4ff]/80 w-4 shrink-0"></i>
              <span class="text-zinc-400">Pakistan</span>
            </div>
          </div>

          <!-- Contact Us button -->
          <a href="#contact" class="btn-primary mt-1 inline-flex w-fit">
            Contact Us
          </a>
        </div>

      </div>
    </div>

    <!-- Bottom bar -->
    <div class="border-t border-white/[0.07]">
      <div class="section-inner py-5 flex flex-col md:flex-row items-center justify-between gap-2">
        <p class="text-xs text-zinc-500">© 2026 Uzair Khan. All rights reserved.</p>
        <p class="text-xs text-zinc-500">Made with <span class="text-[#00d4ff]">♥</span> using Nuxt.js</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* Social icon box */
.social-icon-box {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 8px;
  border: 1px solid rgba(255,255,255,0.12);
  background: transparent;
  transition: background 0.25s ease, border-color 0.25s ease;
  text-decoration: none;
}
.social-icon-box:hover {
  background: #00d4ff;
  border-color: #00d4ff;
}

/* Nav links */
.footer-nav-link {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.875rem;
  color: rgba(228,228,231,0.7);
  text-decoration: none;
  transition: color 0.25s ease, transform 0.25s ease;
}
.footer-nav-link:hover {
  color: #00d4ff;
  transform: translateX(4px);
}
.footer-nav-arrow {
  font-size: 0.75rem;
  opacity: 0;
  transform: translateX(-4px);
  transition: opacity 0.25s ease, transform 0.25s ease;
  color: #00d4ff;
}
.footer-nav-link:hover .footer-nav-arrow {
  opacity: 1;
  transform: translateX(0);
}

/* Contact row */
.contact-row {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.875rem;
  color: rgba(228,228,231,0.7);
  text-decoration: none;
  transition: color 0.25s ease;
}
</style>
