<script setup>
import { ref } from "vue";

const showMore = ref(false);
</script>

<template>
  <div
    class="flex flex-col md:flex-row justify-between items-center md:items-start px-6 md:px-24 py-10 gap-10"
  >
    <!-- Profile Image (Top on mobile, right on desktop) -->
    <div class="w-full md:w-[400px] animate-slide-right order-1 md:order-2">
      <img
        src="/profile.png"
        class="rounded-3xl rounded-b-full w-full shadow-xl"
        alt="Uzair Khan"
      />
    </div>

    <!-- About Section -->
    <div class="flex flex-col md:w-1/2 w-full animate-slide-left order-2 md:order-1">
      <h1
        class="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-amber-700"
      >
        About Us
      </h1>

      <!-- Always Visible Short Description -->
      <p
        class="mt-6 md:mt-9 font-sans font-semibold text-black text-base md:text-lg"
      >
        Hi, I'm Uzair Khan — a dedicated Frontend Developer. I build modern,
        responsive, and user-friendly websites. Skilled in Vue.js, Nuxt 3,
        Tailwind CSS, and clean code. I focus on performance, accessibility, and
        great UI/UX. I love turning ideas into interactive digital experiences.
        Always learning, growing, and exploring new technologies.
      </p>

      <!-- Extra Description -->
      <transition name="fade">
        <div
          v-if="showMore"
          class="mt-4 text-black font-sans font-semibold animate-fade-in text-base md:text-lg"
        >
          <p class="mt-2">
            I specialize in building responsive, user-friendly, and modern web
            interfaces using technologies like Vue.js, Nuxt 3, and Tailwind CSS.
          </p>
          <p class="mt-2">
            I love creating beautiful UIs that are not just visually appealing
            but also highly functional and fast.
          </p>
          <p class="mt-2">
            I'm skilled in reusable component development, performance
            optimization, and accessibility best practices.
          </p>
          <p class="mt-2">
            With a strong focus on clean code and performance, I turn creative
            ideas into responsive, cross-browser compatible apps.
          </p>
          <p class="mt-2">
            Whether it's building a complete UI from scratch or collaborating
            with teams, I bring a positive mindset and full dedication to every
            project.
          </p>
          <p class="mt-2">
            When I’m not coding, I enjoy exploring new technologies, improving
            my skills, and staying up-to-date with the latest trends in web
            development.
          </p>
          <p class="mt-2">Let’s build something amazing together!</p>
        </div>
      </transition>

      <!-- Toggle Button -->
      <button
        @click="showMore = !showMore"
        class="mt-6 md:mt-8 px-4 py-3 w-[180px] hover:cursor-pointer hover:bg-sky-600 bg-sky-700 text-white font-semibold rounded transition duration-300 ease-in-out"
      >
        {{ showMore ? "Read Less" : "Read More" }}
      </button>
    </div>
  </div>
</template>

<style scoped>
/* Fade animation for text */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Custom slide animations */
@keyframes slideLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-slide-left {
  animation: slideLeft 0.8s ease-out both;
}

.animate-slide-right {
  animation: slideRight 0.8s ease-out both;
}
</style>
