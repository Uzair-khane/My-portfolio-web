<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from "vue";
import { useRoute } from "vue-router";

const isMobileMenuOpen = ref(false);
const route = useRoute();

const activeId = ref("home");
const sectionIds = ["home", "about", "skills", "projects", "contact"];

let observer;

const closeMobile = () => {
  isMobileMenuOpen.value = false;
};

const toggleMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

watch(isMobileMenuOpen, (val) => {
  if (typeof document !== "undefined") {
    document.body.style.overflow = val ? "hidden" : "";
  }
});

const setupScrollSpy = () => {
  observer?.disconnect();
  if (route.path !== "/") return;

  const els = sectionIds
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  if (!els.length) return;

  observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => (b.intersectionRatio || 0) - (a.intersectionRatio || 0))[0];

      const id = visible?.target?.id;
      if (id) activeId.value = id;
    },
    {
      root: null,
      threshold: [0.2, 0.35, 0.5],
      rootMargin: "-20% 0px -65% 0px",
    }
  );

  els.forEach((el) => observer.observe(el));
};

onMounted(() => {
  setupScrollSpy();
});

watch(
  () => route.fullPath,
  () => {
    closeMobile();
    requestAnimationFrame(setupScrollSpy);
  }
);

onBeforeUnmount(() => {
  observer?.disconnect();
  if (typeof document !== "undefined") {
    document.body.style.overflow = "";
  }
});
</script>

<template>
  <div>
    <!-- ── Navbar ── -->
    <nav
      class="sticky top-0 z-50 flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-white/10"
      style="background: rgba(0, 0, 0, 0.6); backdrop-filter: blur(12px);"
    >
      <!-- Logo -->
      <h1
        class="font-extrabold text-2xl sm:text-3xl md:text-4xl font-sans text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] select-none"
      >
        Uzair Khan
      </h1>

      <!-- Desktop Menu -->
      <ul class="hidden md:flex gap-8 lg:gap-10 font-semibold cursor-pointer text-zinc-200">
        <li v-for="item in [
          { id: 'home',     label: 'Home',    href: '/#home'     },
          { id: 'about',    label: 'About',   href: '/#about'    },
          { id: 'skills',   label: 'Skill',   href: '/#skills'   },
          { id: 'projects', label: 'Project', href: '/#projects' },
          { id: 'contact',  label: 'Contact', href: '/#contact'  },
        ]" :key="item.id">
          <NuxtLink
            class="nav-link"
            :class="activeId === item.id ? 'nav-link-active' : ''"
            :to="item.href"
          >
            {{ item.label }}
          </NuxtLink>
        </li>
      </ul>

      <!-- Desktop Contact Button -->
      <a
        class="contact-btn hidden md:inline-flex items-center gap-2"
        href="https://wa.me/923149535884"
        target="_blank"
      >
        📞 Contact Us
      </a>

      <!-- ── Hamburger Button — NO border, NO bg, WHITE bars ── -->
      <button class="hamburger-btn md:hidden" @click="toggleMenu" aria-label="Toggle menu">
        <span class="hamburger-box">
          <span class="hamburger-bar" :class="isMobileMenuOpen ? 'bar-top-open' : 'bar-top'"></span>
          <span class="hamburger-bar" :class="isMobileMenuOpen ? 'bar-mid-open' : 'bar-mid'"></span>
          <span class="hamburger-bar" :class="isMobileMenuOpen ? 'bar-bot-open' : 'bar-bot'"></span>
        </span>
      </button>
    </nav>

    <!-- ── Mobile Menu Overlay ── -->
    <Transition name="menu-fade">
      <div
        v-if="isMobileMenuOpen"
        class="md:hidden fixed inset-0 z-40 flex flex-col"
        style="background: rgba(2, 4, 8, 0.97); backdrop-filter: blur(16px);"
      >
        <!-- Spacer -->
        <div class="h-[56px] sm:h-[64px] flex-shrink-0"></div>

        <!-- Accent line -->
        <div class="w-full h-[2px] bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] flex-shrink-0"></div>

        <!-- Nav Links -->
        <nav class="flex flex-col items-center justify-center flex-1 gap-2 px-6 py-8">
          <NuxtLink
            v-for="(item, i) in [
              { id: 'home',     label: 'Home',     href: '/#home'     },
              { id: 'about',    label: 'About',    href: '/#about'    },
              { id: 'skills',   label: 'Skills',   href: '/#skills'   },
              { id: 'projects', label: 'Projects', href: '/#projects' },
              { id: 'contact',  label: 'Contact',  href: '/#contact'  },
            ]"
            :key="item.id"
            :to="item.href"
            class="mobile-nav-link"
            :class="activeId === item.id ? 'mobile-nav-active' : ''"
            :style="{ animationDelay: `${i * 0.07}s` }"
            @click="closeMobile"
          >
            {{ item.label }}
          </NuxtLink>

          <a
            href="https://wa.me/923149535884"
            target="_blank"
            class="contact-btn-mobile mt-4"
            @click="closeMobile"
          >
            📞 Contact Us
          </a>
        </nav>

        <p class="text-center text-zinc-600 text-xs pb-6 flex-shrink-0">
          © 2026 Uzair Khan
        </p>
      </div>
    </Transition>
  </div>
</template>

<style scoped>

/* ── Desktop nav link ── */
.nav-link {
  position: relative;
  padding: 0.35rem 0.15rem;
  transition: color 0.3s ease, transform 0.3s ease;
  color: rgba(228, 228, 231, 0.85);
}
.nav-link:hover { color: white; transform: translateY(-1px); }
.nav-link::after {
  content: "";
  position: absolute;
  left: 0; bottom: -6px;
  height: 2px; width: 0%;
  background: linear-gradient(90deg, #00d4ff, #7c3aed);
  border-radius: 2px;
  transition: width 0.35s ease;
}
.nav-link:hover::after,
.nav-link-active::after { width: 100%; }
.nav-link-active { color: white; }

/* ── Desktop contact button ── */
.contact-btn {
  border: 1.5px solid rgba(255,255,255,0.4);
  color: #ffffff;
  background: transparent;
  border-radius: 6px;
  padding: 8px 20px;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.3s ease;
  white-space: nowrap;
}
.contact-btn:hover {
  background: rgba(255,255,255,0.08);
  border-color: #ffffff;
  transform: translateY(-1px);
}

/* ══════════════════════════════
   HAMBURGER BUTTON
   — zero border
   — zero background
   — pure white bars
══════════════════════════════ */
.hamburger-btn {
  all: unset;           /* reset ALL browser button defaults */
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  cursor: pointer;
  position: relative;
  z-index: 60;
  /* Make absolutely sure no border/bg leaks in */
  border: none !important;
  outline: none !important;
  background: transparent !important;
  box-shadow: none !important;
  -webkit-tap-highlight-color: transparent;
}
.hamburger-btn:focus,
.hamburger-btn:focus-visible,
.hamburger-btn:active {
  border: none !important;
  outline: none !important;
  background: transparent !important;
  box-shadow: none !important;
}

.hamburger-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 24px;
  pointer-events: none;
}

.hamburger-bar {
  display: block;
  height: 2px;
  background: #ffffff;      /* ← PURE WHITE */
  border-radius: 2px;
  transition: transform 0.3s ease, opacity 0.3s ease, width 0.3s ease;
  transform-origin: center;
}

/* Closed */
.bar-top { width: 100%; transform: none; }
.bar-mid { width: 100%; transform: none; opacity: 1; }
.bar-bot { width: 65%;  transform: none; }

/* Open → X */
.bar-top-open { width: 100%; transform: translateY(7px) rotate(45deg); }
.bar-mid-open { width: 100%; opacity: 0; transform: scaleX(0); }
.bar-bot-open { width: 100%; transform: translateY(-7px) rotate(-45deg); }

/* ── Mobile nav links ── */
.mobile-nav-link {
  display: block;
  width: 100%;
  max-width: 320px;
  text-align: center;
  padding: 14px 24px;
  font-size: 18px;
  font-weight: 600;
  color: rgba(228, 228, 231, 0.85);
  border-radius: 10px;
  border: 1px solid rgba(255,255,255,0.06);
  background: rgba(255,255,255,0.03);
  transition: color 0.3s ease, background 0.3s ease,
              border-color 0.3s ease, transform 0.3s ease;
  animation: linkSlideIn 0.4s ease both;
}
.mobile-nav-link:hover {
  color: #00d4ff;
  background: rgba(0,212,255,0.06);
  border-color: rgba(0,212,255,0.2);
  transform: translateY(-2px);
}
.mobile-nav-active {
  color: #00d4ff !important;
  border-color: rgba(0,212,255,0.3) !important;
  background: rgba(0,212,255,0.07) !important;
}

/* ── Mobile contact button ── */
.contact-btn-mobile {
  display: block;
  width: 100%;
  max-width: 320px;
  text-align: center;
  padding: 13px 24px;
  font-size: 15px;
  font-weight: 600;
  color: #ffffff;
  border-radius: 8px;
  border: 1.5px solid rgba(255,255,255,0.35);
  background: transparent;
  transition: all 0.3s ease;
  animation: linkSlideIn 0.4s ease 0.35s both;
}
.contact-btn-mobile:hover {
  background: rgba(255,255,255,0.08);
  border-color: rgba(255,255,255,0.7);
  transform: translateY(-2px);
}

/* ── Transitions ── */
.menu-fade-enter-active,
.menu-fade-leave-active { transition: opacity 0.3s ease; }
.menu-fade-enter-from,
.menu-fade-leave-to { opacity: 0; }

@keyframes linkSlideIn {
  0%   { opacity: 0; transform: translateY(16px); }
  100% { opacity: 1; transform: translateY(0); }
}
</style>