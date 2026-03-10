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
});
</script>

<template>
  <div>
    <!-- Navbar -->
    <nav
      class="sticky top-0 z-50 flex items-center justify-between px-6 py-4 border-b border-white/10"
      style="background: rgba(0, 0, 0, 0.5); backdrop-filter: blur(10px);"
    >
      <!-- Logo -->
      <h1
        class="font-extrabold text-3xl md:text-4xl font-sans text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#7c3aed]"
      >
        Uzair Khan
      </h1>

      <!-- Toggle Button (Font Awesome Icons) -->
      <button
        class="md:hidden text-zinc-100 text-3xl focus:outline-none transition duration-300"
        @click="isMobileMenuOpen = !isMobileMenuOpen"
      >
        <i
          :class="isMobileMenuOpen ? 'fas fa-xmark' : 'fas fa-bars'"
          :style="{ transform: isMobileMenuOpen ? 'rotate(90deg)' : 'rotate(0deg)' }"
        ></i>
      </button>

      <!-- Desktop Menu -->
      <ul class="hidden md:flex gap-10 font-semibold cursor-pointer text-zinc-200">
        <li>
          <NuxtLink
            class="nav-link"
            :class="activeId === 'home' ? 'nav-link-active' : ''"
            to="/#home"
          >
            Home
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            class="nav-link"
            :class="activeId === 'about' ? 'nav-link-active' : ''"
            to="/#about"
          >
            About
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            class="nav-link"
            :class="activeId === 'skills' ? 'nav-link-active' : ''"
            to="/#skills"
          >
            Skill
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            class="nav-link"
            :class="activeId === 'projects' ? 'nav-link-active' : ''"
            to="/#projects"
          >
            Project
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            class="nav-link"
            :class="activeId === 'contact' ? 'nav-link-active' : ''"
            to="/#contact"
          >
            Contact
          </NuxtLink>
        </li>
      </ul>

      <!-- Contact Button -->
      <div
        class="hidden md:flex items-center justify-center"
      >
        <a class="contact-btn" href="https://wa.me/923149535884">📞 Contact Us</a>
      </div>
    </nav>

    <!-- Mobile Menu -->
    <transition name="slide">
      <div
        v-show="isMobileMenuOpen"
        class="md:hidden fixed inset-0 bg-black/70 backdrop-blur-sm pt-20 px-6 py-6 flex flex-col gap-6 text-white font-semibold"
        @click.self="closeMobile"
      >
        <NuxtLink class="text-center nav-link-mobile" to="/#home" @click="closeMobile">
          Home
        </NuxtLink>
        <NuxtLink class="text-center nav-link-mobile" to="/#about" @click="closeMobile">
          About
        </NuxtLink>
        <NuxtLink class="text-center nav-link-mobile" to="/#skills" @click="closeMobile">
          Skill
        </NuxtLink>
        <NuxtLink class="text-center nav-link-mobile" to="/#projects" @click="closeMobile">
          Project
        </NuxtLink>
        <NuxtLink class="text-center nav-link-mobile" to="/#contact" @click="closeMobile">
          Contact
        </NuxtLink>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.contact-btn {
  border: 2px solid #00d4ff;
  color: #00d4ff;
  background: transparent;
  border-radius: 8px;
  padding: 8px 20px;
  font-weight: 700;
  transition: all 0.3s ease;
}
.contact-btn:hover {
  background: #00d4ff;
  color: #050510;
  transform: translateY(-1px);
}

.nav-link {
  position: relative;
  padding: 0.35rem 0.15rem;
  transition: color 0.35s ease, transform 0.35s ease;
}
.nav-link:hover {
  color: white;
  transform: translateY(-1px);
}
.nav-link::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -6px;
  height: 2px;
  width: 0%;
  background: linear-gradient(90deg, var(--accent), var(--accent-2));
  transition: width 0.35s ease;
}
.nav-link:hover::after {
  width: 100%;
}
.nav-link-active {
  color: white;
}
.nav-link-active::after {
  width: 100%;
}

.nav-link-mobile {
  padding: 1rem 1rem;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: transform 0.45s cubic-bezier(0.2, 0.8, 0.2, 1), background 0.45s ease;
}
.nav-link-mobile:hover {
  transform: translateY(-2px);
  background: rgba(255, 255, 255, 0.06);
}

.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.45s ease, transform 0.45s ease;
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateX(12px);
}
</style>
