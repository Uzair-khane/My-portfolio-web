<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from "vue";
import { useRoute } from "vue-router";

const isMobileMenuOpen = ref(false);
const route = useRoute();

const activeId = ref("home");
const sectionIds = ["home", "about", "skills", "projects", "contact"];

let observer;

const closeMobile = () => { isMobileMenuOpen.value = false; };
const toggleMenu  = () => { isMobileMenuOpen.value = !isMobileMenuOpen.value; };

watch(isMobileMenuOpen, (val) => {
  if (typeof document !== "undefined") {
    document.body.style.overflow = val ? "hidden" : "";
  }
});

const setupScrollSpy = () => {
  observer?.disconnect();
  if (route.path !== "/") return;
  const els = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);
  if (!els.length) return;
  observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => (b.intersectionRatio || 0) - (a.intersectionRatio || 0))[0];
      const id = visible?.target?.id;
      if (id) activeId.value = id;
    },
    { root: null, threshold: [0.2, 0.35, 0.5], rootMargin: "-20% 0px -65% 0px" }
  );
  els.forEach((el) => observer.observe(el));
};

onMounted(() => setupScrollSpy());

watch(() => route.fullPath, () => {
  closeMobile();
  requestAnimationFrame(setupScrollSpy);
});

onBeforeUnmount(() => {
  observer?.disconnect();
  if (typeof document !== "undefined") document.body.style.overflow = "";
});

const navItems = [
  { id: "home",     label: "Home",     href: "/#home"     },
  { id: "about",    label: "About",    href: "/#about"    },
  { id: "skills",   label: "Skills",   href: "/#skills"   },
  { id: "projects", label: "Projects", href: "/#projects" },
  { id: "contact",  label: "Contact",  href: "/#contact"  },
];
</script>

<template>
  <div>

    <!-- NAVBAR -->
    <nav class="navbar">

      <!-- Logo -->
      <NuxtLink to="/" class="logo">Uzair Khan</NuxtLink>

      <!-- Desktop Menu (hidden on mobile) -->
      <ul class="desktop-menu">
        <li v-for="item in navItems" :key="item.id">
          <NuxtLink
            :to="item.href"
            class="nav-link"
            :class="{ 'nav-link-active': activeId === item.id }"
          >
            {{ item.label }}
          </NuxtLink>
        </li>
      </ul>

      <!-- Desktop Contact Button (hidden on mobile) -->
      <a class="contact-btn" href="https://wa.me/923149535884" target="_blank" rel="noopener">
         Contact Us
      </a>

      <!-- Hamburger Button (ONLY on mobile, hidden on md+) -->
     <button
  class="hamburger border-none"
  :class="{ open: isMobileMenuOpen }"
  @click="toggleMenu"
  :aria-expanded="isMobileMenuOpen"
  aria-label="Toggle menu"
>
  <!-- Closed: hamburger icon -->
  <i v-if="!isMobileMenuOpen" class="fas fa-bars text-white text-4xl"></i>

  <!-- Open: cross icon -->
  <i v-else class="fas fa-xmark text-white text-4xl"></i>
</button>

    </nav>

    <!-- MOBILE MENU OVERLAY -->
    <Transition name="menu-fade">
      <div v-if="isMobileMenuOpen" class="mobile-overlay">

        <div class="accent-line"></div>

        <nav class="mobile-nav">
          <NuxtLink
            v-for="(item, i) in navItems"
            :key="item.id"
            :to="item.href"
            class="mobile-link"
            :class="{ 'mobile-link-active': activeId === item.id }"
            :style="{ animationDelay: `${i * 0.07}s` }"
            @click="closeMobile"
          >
            {{ item.label }}
          </NuxtLink>

          <a
            href="https://wa.me/923149535884"
            target="_blank"
            rel="noopener"
            class="mobile-contact"
            :style="{ animationDelay: `${navItems.length * 0.07}s` }"
            @click="closeMobile"
          >
            📞 Contact Us
          </a>
        </nav>

        <p class="footer-text">© 2026 Uzair Khan</p>
      </div>
    </Transition>

  </div>
</template>

<style scoped>

/* NAVBAR */
.navbar {
  position: sticky;
  top: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 24px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(0, 0, 0, 0.65);
  backdrop-filter: blur(14px);
}

/* LOGO */
.logo {
  font-size: clamp(1.2rem, 3vw, 1.8rem);
  font-weight: 900;
  background: linear-gradient(90deg, #00d4ff, #7c3aed);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-decoration: none;
  user-select: none;
  flex-shrink: 0;
}

/* DESKTOP MENU — hidden by default (mobile first) */
.desktop-menu {
  display: none;
  list-style: none;
  gap: 36px;
  margin: 0;
  padding: 0;
}

.nav-link {
  position: relative;
  font-size: 15px;
  font-weight: 600;
  color: rgba(228, 228, 231, 0.85);
  text-decoration: none;
  padding-bottom: 4px;
  transition: color 0.3s ease;
}
.nav-link::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -4px;
  width: 0%;
  height: 2px;
  background: linear-gradient(90deg, #00d4ff, #7c3aed);
  border-radius: 2px;
  transition: width 0.35s ease;
}
.nav-link:hover { color: #fff; }
.nav-link:hover::after,
.nav-link-active::after { width: 100%; }
.nav-link-active { color: #fff; }

/* DESKTOP CONTACT BUTTON — hidden by default (mobile first) */
.contact-btn {
  display: none;
  align-items: center;
  gap: 6px;
  padding: 8px 18px;
  font-size: 14px;
  font-weight: 500;
  color: #fff;
  border: 1.5px solid rgba(255, 255, 255, 0.4);
  border-radius: 6px;
  background: transparent;
  text-decoration: none;
  white-space: nowrap;
  transition: all 0.3s ease;
  flex-shrink: 0;
}
.contact-btn:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: #fff;
  transform: translateY(-1px);
}

/* HAMBURGER — visible on mobile only */
.hamburger {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  /* width: 36px;
  height: 36px;
  padding: 6px;
  background: transparent; */
  border: none;
  outline: none;
  cursor: pointer;
  flex-shrink: 0;
  -webkit-tap-highlight-color: transparent;
}
.hamburger:focus { outline: none; }

.hamburger span {
  display: block;
  height: 2px;
  
  /* background: #ffffff; */
  border-radius: 2px;
  transition: transform 0.3s ease, opacity 0.3s ease, width 0.3s ease;
  transform-origin: center;
}
.hamburger span:nth-child(1) { width: 100%; }
.hamburger span:nth-child(2) { width: 100%; }
.hamburger span:nth-child(3) { width: 65%; }

/* Open = X */
.hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg);  width: 100%; }
.hamburger.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
.hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); width: 100%; }

/* MOBILE OVERLAY */
.mobile-overlay {
  position: fixed;
  inset: 0;
  z-index: 40;
  display: flex;
  flex-direction: column;
  background: rgba(2, 4, 8, 0.97);
  backdrop-filter: blur(16px);
  padding-top: 58px;
}

.accent-line {
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, #00d4ff, #7c3aed);
  flex-shrink: 0;
}

.mobile-nav {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 32px 24px;
}

.mobile-link {
  display: block;
  width: 100%;
  max-width: 340px;
  text-align: center;
  padding: 14px 24px;
  font-size: 18px;
  font-weight: 600;
  color: rgba(228, 228, 231, 0.85);
  text-decoration: none;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.06);
  background: rgba(255, 255, 255, 0.03);
  transition: color 0.3s, background 0.3s, border-color 0.3s, transform 0.3s;
  animation: slideIn 0.4s ease both;
}
.mobile-link:hover {
  color: #00d4ff;
  background: rgba(0, 212, 255, 0.06);
  border-color: rgba(0, 212, 255, 0.2);
  transform: translateY(-2px);
}
.mobile-link-active {
  color: #00d4ff !important;
  border-color: rgba(0, 212, 255, 0.3) !important;
  background: rgba(0, 212, 255, 0.07) !important;
}

.mobile-contact {
  display: block;
  width: 100%;
  max-width: 340px;
  text-align: center;
  padding: 13px 24px;
  font-size: 15px;
  font-weight: 600;
  color: #fff;
  text-decoration: none;
  border-radius: 8px;
  border: 1.5px solid rgba(255, 255, 255, 0.35);
  background: transparent;
  transition: all 0.3s ease;
  animation: slideIn 0.4s ease both;
}
.mobile-contact:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.7);
  transform: translateY(-2px);
}

.footer-text {
  text-align: center;
  color: rgba(161, 161, 170, 0.5);
  font-size: 12px;
  padding-bottom: 24px;
  flex-shrink: 0;
}

/* DESKTOP BREAKPOINT — 768px+ */
@media (min-width: 768px) {
  .desktop-menu { display: flex; }        /* show desktop menu */
  .contact-btn  { display: inline-flex; } /* show contact button */
  .hamburger    { display: none; }        /* hide hamburger */
}

/* TRANSITIONS */
.menu-fade-enter-active,
.menu-fade-leave-active { transition: opacity 0.3s ease; }
.menu-fade-enter-from,
.menu-fade-leave-to     { opacity: 0; }

@keyframes slideIn {
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
}
</style>