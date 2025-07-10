<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-10 px-6 md:px-24 py-10">
    <!-- Row 1 - Col 1: Skills & Experience Text -->
    <div class="animate-slide-left">
      <h1
        class="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-amber-700 py-3"
      >
        Skills & Experience
      </h1>

      <p
        class="mt-6 md:mt-9 font-sans font-semibold text-black text-base md:text-lg"
      >
        Welcome to my Skills page! Here you'll find the tools and technologies I
        specialize in as a Frontend Developer. I focus on creating fast,
        responsive, and modern web interfaces using frameworks like Vue.js and
        Nuxt 3, styled beautifully with Tailwind CSS.
      </p>

      <p class="mt-4 font-sans font-semibold text-black text-base md:text-lg">
        From clean code practices to performance optimization and UI/UX design,
        I continuously improve my skillset to stay updated with the latest
        trends. This page reflects my strengths, experience, and dedication to
        building high-quality web applications.
      </p>

      <transition name="fade">
        <div
          v-if="showMore"
          class="mt-4 text-black font-sans font-semibold animate-fade-in text-base md:text-lg"
        >
          <p class="mt-2">
            In addition to frontend technologies, I have hands-on experience
            with version control systems like Git and platforms like GitHub.
          </p>
          <p class="mt-2">
            I believe in writing scalable and maintainable code with reusable
            components and following best practices across teams and solo work.
          </p>
        </div>
      </transition>

      <button
        @click="showMore = !showMore"
        class="mt-6 md:mt-8 px-4 py-3 w-[180px] hover:cursor-pointer hover:bg-sky-600 bg-sky-700 text-white font-semibold rounded transition duration-300 ease-in-out"
      >
        {{ showMore ? "Read Less" : "Read More" }}
      </button>
    </div>

    <!-- Row 1 - Col 2: Profile Image -->
    <div class="w-full animate-slide-right">
      <img
        src="../assets/images/img/capture.png"
        class="rounded-3xl rounded-b-full w-full shadow-xl"
        alt="Uzair Khan"
      />
    </div>

    <!-- Row 2 - Col 1: Skill Bars -->
    <div class="mt-10 animate-slide-left">
      <h2 class="text-2xl font-bold text-sky-700 mb-6">My Skills</h2>
      <div class="grid grid-cols-1 gap-2">
        <div v-for="(skill, index) in skills" :key="index" class="w-full">
          <div class="flex justify-between items-center mb-2">
            <div class="text-lg font-semibold text-gray-700">
              {{ skill.name }}
            </div>
            <div class="text-sm font-medium text-gray-500">
              {{ skill.level }}%
            </div>
          </div>
          <div class="w-full bg-gray-200 rounded-full h-3 overflow-hidden mb-1">
            <div
              class="h-full rounded-full transition-all duration-1000 ease-in-out"
              :class="skill.color"
              :style="{ width: skill.level + '%' }"
            ></div>
          </div>
          <p class="text-sm text-gray-600 mb-3">{{ skill.description }}</p>
        </div>
      </div>
    </div>

    <!-- Row 2 - Col 2: Experience -->
    <div class="mt-20 animate-slide-right">
      <h2 class="text-2xl font-bold text-amber-700 mb-4">Experience</h2>
      <ul class="space-y-4 text-gray-700 text-sm md:text-base font-medium">
        <li class="border-l-4 border-sky-500 pl-4">
          <span class="font-bold text-sky-700">Frontend Developer Intern</span>
           <br />
          NGEN & Coda Alpha & Interneee.PK & code &Saylani Mass IT Training Inernship (2024) Completed a frontend internship under NGEN’s
          Next Generation Circle program. Worked on real-time projects focused
          on UI/UX using Vue.js, Nuxt 3, and Tailwind CSS. Collaborated with
          senior developers at Coda Alpha to build modern web interfaces.
          Learned industry best practices, component-based architecture, and Git
          workflow. Gained hands-on experience in building responsive, scalable
          frontend systems.
        </li>
        <li class="border-l-4 border-sky-500 pl-4">
          <span class="font-bold text-sky-700">Freelance Projects</span> (2023 -
          Present)<br />
          Delivered multiple websites and dashboards with modern, user-friendly
          designs.
        </li>
        <li class="border-l-4 border-sky-500 pl-4">
          <span class="font-bold text-sky-700">GitHub Collaboration</span><br />
          Contributed to open-source projects, managed code via Git, and used
          GitHub for team collaboration.
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const showMore = ref(false);

const skills = [
  {
    name: "HTML",
    level: 95,
    color: "bg-orange-500",
    description: "Structure of web pages using semantic elements.",
  },
  {
    name: "CSS",
    level: 90,
    color: "bg-blue-500",
    description: "Styling and layout of websites with responsive design.",
  },
  {
    name: "JavaScript",
    level: 88,
    color: "bg-yellow-400",
    description: "Adds interactivity and dynamic features to the UI.",
  },
  {
    name: "Tailwind CSS",
    level: 90,
    color: "bg-cyan-500",
    description: "Utility-first CSS framework for fast UI development.",
  },
  {
    name: "Vue.js",
    level: 85,
    color: "bg-green-500",
    description:
      "Progressive JavaScript framework for building user interfaces.",
  },
  {
    name: "Nuxt 3",
    level: 80,
    color: "bg-lime-600",
    description: "Vue-based framework for building full-stack applications.",
  },
  {
    name: "Bootstrap",
    level: 75,
    color: "bg-purple-600",
    description: "Popular CSS framework for responsive design and components.",
  },
];
</script>

<style scoped>
/* Fade animation */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Slide animations */
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
