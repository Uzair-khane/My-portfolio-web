<script setup>
import { ref } from "vue";

const isMobileMenuOpen = ref(false);
</script>

<template>
  <div>
    <!-- Navbar -->
    <nav
      class="flex items-center justify-between opa px-6 py-4 text-white
             bg-none sm:bg-white sm:text-blue-950 bg-fixed  z-50 relative"
    >
      <!-- Logo -->
      <h1 class="font-bold text-3xl font-sans text-amber-400">Portfolio</h1>

      <!-- Hamburger for Mobile (shown on md and below) -->
      <button
        class="md:hidden text-blue-950 text-3xl"
        @click="isMobileMenuOpen = !isMobileMenuOpen"
      >
        ☰
      </button>

      <!-- Desktop Menu -->
      <ul
        class="hidden md:flex gap-10 font-semibold cursor-pointer text-blue-950"
      >
        <li class="hover:text-orange-400 transition duration-300">
          <nuxt-link to="/">Home</nuxt-link>
        </li>
        <li class="hover:text-orange-400 transition duration-300">
          <nuxt-link to="/about">About</nuxt-link>
        </li>
        <li class="hover:text-orange-400 transition duration-300">
          <nuxt-link to="/skill">Skill</nuxt-link>
        </li>
        <li class="hover:text-orange-400 relative group transition duration-300">
          <nuxt-link to="/myproject">Project</nuxt-link>

         
        </li>
        <li class="hover:text-orange-400 transition duration-300">
          <nuxt-link to="/contact">Contact</nuxt-link>
        </li>
      </ul>

      <!-- Contact Button (stylish) -->
      <div
        class="hidden md:block px-4 hover:cursor-pointer h-[55px] bg-gradient-to-r from-yellow-500 to-orange-500 
               rounded-full text-center  items-center justify-center text-white 
               font-semibold pt-4 shadow-lg hover:scale-105 transition duration-300 ease-in-out"
      >
        <a href="https://wa.me/923149535884">📞 0314-9535884</a>
      </div>
    </nav>

    <!-- Mobile Menu with Transition -->
    <transition name="fade">
      <div
        v-show="isMobileMenuOpen"
        class="md:hidden bg-slate-700 w-full h-screen pt-10 px-6 py-4 
               transition-all duration-500 ease-in-out transform 
               flex flex-col gap-[20px] text-white font-semibold "
      >
        <nuxt-link
          class="text-center hover:text-amber-500 transition duration-300 ease-in-out"
          to="/"
          @click="isMobileMenuOpen = false"
        >
          Home
        </nuxt-link>
        <nuxt-link
          class="text-center hover:text-amber-500 transition duration-300 ease-in-out"
          to="/about"
          @click="isMobileMenuOpen = false"
        >
          About
        </nuxt-link>
        <nuxt-link
          class="text-center hover:text-amber-500 transition duration-300 ease-in-out"
          to="/skill"
          @click="isMobileMenuOpen = false"
        >
          Skill
        </nuxt-link>
        <nuxt-link
          class="text-center hover:text-amber-500 transition duration-300 ease-in-out"
          to="/myproject"
          @click="isMobileMenuOpen = false"
        >
          Project
        </nuxt-link>
        <nuxt-link
          class="text-center hover:text-amber-500 transition duration-300 ease-in-out"
          to="/contact"
          @click="isMobileMenuOpen = false"
        >
          Contact
        </nuxt-link>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
