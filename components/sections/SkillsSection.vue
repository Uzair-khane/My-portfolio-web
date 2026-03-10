<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const showMore = ref(false);
const sectionEl = ref(null);
const headingVisible = ref(false);
const lineVisible = ref(false);
const barsVisible = ref(false);
const expVisible = ref(false);

let io;

const skillWidths = ref([]);

const resetAnimations = () => {
  headingVisible.value = false;
  lineVisible.value = false;
  barsVisible.value = false;
  expVisible.value = false;
  skillWidths.value = skills.map(() => 0);
};

const playAnimations = () => {
  headingVisible.value = true;
  // decorative line replays width animation
  lineVisible.value = false;
  requestAnimationFrame(() => {
    lineVisible.value = true;
  });

  // skill bars replay with stagger
  barsVisible.value = true;
  skillWidths.value = skills.map(() => 0);
  skills.forEach((s, i) => {
    setTimeout(() => {
      // if user has scrolled away, don't animate
      if (!barsVisible.value) return;
      skillWidths.value[i] = s.level;
    }, i * 100);
  });

  // experience items replay
  expVisible.value = true;
};

onMounted(() => {
  io = new IntersectionObserver(
    (entries) => {
      const entry = entries[0];
      if (!entry) return;
      if (entry.isIntersecting) {
        playAnimations();
      } else {
        resetAnimations();
      }
    },
    { threshold: 0.1 }
  );
  if (sectionEl.value) io.observe(sectionEl.value);
  resetAnimations();
});

onBeforeUnmount(() => {
  io?.disconnect();
});

const skills = [
  {
    name: "HTML",
    level: 95,
    color: "from-orange-500 to-amber-400",
    description: "Structure of web pages using semantic elements.",
  },
  {
    name: "CSS",
    level: 90,
    color: "from-blue-500 to-cyan-400",
    description: "Styling and layout of websites with responsive design.",
  },
  {
    name: "JavaScript",
    level: 88,
    color: "from-yellow-400 to-amber-300",
    description: "Adds interactivity and dynamic features to the UI.",
  },
  {
    name: "Tailwind CSS",
    level: 90,
    color: "from-cyan-500 to-sky-400",
    description: "Utility-first CSS framework for fast UI development.",
  },
  {
    name: "Vue.js",
    level: 85,
    color: "from-green-500 to-emerald-400",
    description: "Progressive JavaScript framework for building user interfaces.",
  },
  {
    name: "Nuxt 3",
    level: 80,
    color: "from-lime-500 to-green-400",
    description: "Vue-based framework for building full-stack applications.",
  },
  {
    name: "Bootstrap",
    level: 75,
    color: "from-purple-600 to-fuchsia-500",
    description: "Popular CSS framework for responsive design and components.",
  },
];

const experiences = [
  {
    date: "(2024)",
    title: "Frontend Developer Intern",
    company: "NGEN & Code Alpha & Interneee.PK & code &Saylani Mass IT Training Inernship",
    description:
      "Completed a frontend internship under NGEN’s Next Generation Circle program. Worked on real-time projects focused on UI/UX using Vue.js, Nuxt 3, and Tailwind CSS. Collaborated with senior developers at Coda Alpha to build modern web interfaces. Learned industry best practices, component-based architecture, and Git workflow. Gained hands-on experience in building responsive, scalable frontend systems.",
  },
  {
    date: "(2023 - Present)",
    title: "Freelance Projects",
    company: "",
    description:
      "Delivered multiple websites and dashboards with modern, user-friendly designs.",
  },
  {
    date: "",
    title: "GitHub Collaboration",
    company: "",
    description:
      "Contributed to open-source projects, managed code via Git, and used GitHub for team collaboration.",
  },
];
</script>

<template>
  <section id="skills" ref="sectionEl" class="section-wrap">
    <div class="section-inner py-16 md:py-20">
      <!-- Heading -->
      <div
        class="mb-10 md:mb-14"
        :class="headingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'"
        style="transition: all 0.8s ease;"
      >
        <h1 class="text-5xl md:text-6xl font-extrabold text-white py-3">
          Skills & Experience
        </h1>
        <div
          class="h-[3px] mt-3 rounded-full bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] transition-[width] duration-700 ease-out"
          :class="lineVisible ? 'w-28 md:w-40' : 'w-0'"
        ></div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
        <!-- Left: Intro + Skills -->
        <div>
          <p class="font-sans font-semibold text-zinc-200/95 text-base md:text-lg">
            Welcome to my Skills page! Here you'll find the tools and technologies I
            specialize in as a Frontend Developer. I focus on creating fast,
            responsive, and modern web interfaces using frameworks like Vue.js and
            Nuxt 3, styled beautifully with Tailwind CSS.
          </p>

          <p class="mt-4 font-sans font-semibold text-zinc-200/95 text-base md:text-lg">
            From clean code practices to performance optimization and UI/UX design,
            I continuously improve my skillset to stay updated with the latest
            trends. This page reflects my strengths, experience, and dedication to
            building high-quality web applications.
          </p>

          <Transition
            enter-active-class="transition-opacity duration-500 ease-out"
            enter-from-class="opacity-0"
            enter-to-class="opacity-100"
            leave-active-class="transition-opacity duration-300 ease-in"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
          >
            <div v-if="showMore" class="mt-4 text-zinc-200/95 font-sans font-semibold text-base md:text-lg">
              <p class="mt-2">
                In addition to frontend technologies, I have hands-on experience
                with version control systems like Git and platforms like GitHub.
              </p>
              <p class="mt-2">
                I believe in writing scalable and maintainable code with reusable
                components and following best practices across teams and solo work.
              </p>
            </div>
          </Transition>

          <button @click="showMore = !showMore" class="mt-6 md:mt-8 w-[180px] btn-primary hover:cursor-pointer">
            {{ showMore ? "Read Less" : "Read More" }}
          </button>

          <!-- Skills -->
          <div class="mt-10">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div v-for="(skill, index) in skills" :key="index" class="w-full">
                <div class="flex items-center justify-between">
                  <div class="text-base font-semibold text-white">{{ skill.name }}</div>
                  <div class="text-sm font-medium text-zinc-400">{{ skill.level }}%</div>
                </div>
                <div class="mt-3 h-2 w-full rounded-full bg-white/10 overflow-hidden">
                  <div
                    class="h-full rounded-full bg-gradient-to-r transition-[width] duration-700 ease-out"
                    :class="skill.color"
                    :style="{
                      width: (barsVisible ? skillWidths[index] : 0) + '%',
                      transitionDelay: `${index * 0.1}s`,
                    }"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Experience Timeline -->
        <div class="relative">
          <div class="absolute left-3 top-0 bottom-0 w-px bg-white/10"></div>

          <div class="space-y-8">
            <div
              v-for="(exp, idx) in experiences"
              :key="idx"
              class="relative pl-12"
              :class="expVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'"
              :style="{
                transition: 'all 0.7s ease',
                transitionDelay: `${idx * 0.2}s`,
              }"
            >
              <div
                class="absolute left-[10px] top-2 h-3 w-3 rounded-full bg-[#00d4ff]"
                style="box-shadow: 0 0 18px rgba(0, 212, 255, 0.35);"
              ></div>

              <div v-if="exp.date" class="text-sm font-semibold text-[#00d4ff]">
                {{ exp.date }}
              </div>
              <div class="text-white font-bold text-lg mt-1">
                {{ exp.title }}
              </div>
              <div v-if="exp.company" class="text-zinc-400 text-sm mt-1">
                {{ exp.company }}
              </div>
              <div class="text-zinc-300/80 text-sm md:text-base mt-3 leading-relaxed">
                {{ exp.description }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
