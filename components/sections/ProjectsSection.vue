<script setup>
const projects = [
  {
    title: "Portfolio Website",
    description:
      "Designed and developed my personal portfolio using Nuxt 3 and Tailwind CSS.",
    image: "/project1.PNG",
    link: "https://your-portfolio-link.com",
  },
  {
    title: "Password Generator",
    description:
      "Created a modern UI tool that generates strong passwords. Built with JavaScript.",
    image: "/password.PNG",
    link: "https://uzair-khane.github.io/password-genrater/",
  },
  {
    title: "TO Do List",
    description:
      "Created a modern UI tool that generates To Do List. Built with JavaScript.",
    image: "/ToDOList.PNG",
    link: "https://uzair-khane.github.io/To-Do-List/",
  },
  {
    title: "Dashboard UI",
    description:
      "Developed a responsive admin dashboard with chart and card components.",
    image: "/dashbord.PNG",
    link: "#",
  },
  {
    title: "Timer-in-javascript",
    description:
      "Developed a responsive timer with start and stop and reset button.",
    image: "/timer.PNG",
    link: "https://uzair-khane.github.io/Timer-in-javascript/",
  },
  {
    title: "Website Best Jewllery Collection UI",
    description: "Developed a responsive website for best Jewllery Collection ",
    image: "/Bestjwellarycollection.PNG",
    link: "https://uzair-khane.github.io/Healet/",
  },
  {
    title: "QR Code Generator",
    description:
      "Developed a responsive Generator also add resize and Download function ",
    image: "/QR.PNG",
    link: "https://uzair-khane.github.io/QR-Code-Generator/",
  },
  {
    title: "Wheather App",
    description: "Developed a responsive wheather app using html css and js ",
    image: "/Wheather.PNG",
    link: "https://uzair-khane.github.io/weatherapp/",
  },
  {
    title: "Website For Education UI",
    description:
      "Developed a Website for education school system laptop screen only using tailwind css ",
    image: "/education.PNG",
    link: "https://uzair-khane.github.io/education-web-by-tailwind-css/",
  },
  {
    title: "Website For Carvilla UI",
    description: "Developed a  responsive Website for Carvilla using tailwind css ",
    image: "/car.PNG",
    link: "https://uzair-khane.github.io/carvilla-website/",
  },
  {
    title: "Website For Health and care UI",
    description: "Developed a  responsive Website for Health and care  ",
    image: "/health.PNG",
    link: "https://uzair-khane.github.io/Health-and-care-porject-5th-semester/",
  },
  {
    title: "Website For Fitness Training UI",
    description: "Developed a  responsive Website For Fitness Training  ",
    image: "/fitness.PNG",
    link: "https://uzair-khane.github.io/website-for-JYM/",
  },
  {
    title: "Website Repaire and Maintainance Services UI",
    description:
      "Developed a  Website for  Repaire and Maintainance Services only for laptop screen  ",
    image: "/repair.PNG",
    link: "https://uzair-khane.github.io/repaire-and-maintance-services/",
  },
  {
    title: "HRDN Official Website",
    description:
      "Collaborated with a team to design and develop the official website for HRDN.",
    image: "/HRDN.PNG",
    link: "https://hrdn.net/",
  },
];
</script>

<template>
  <section id="projects" class="section-wrap">
    <div class="section-inner py-16 md:py-20">
      <div class="flex items-end justify-between gap-6 flex-wrap">
        <h1
          class="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] font-sans py-3"
          data-aos="fade-right"
        >
          My Projects
        </h1>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-12 md:pt-16">
        <div
          v-for="(project, index) in projects"
          :key="index"
          class="glass lift rounded-2xl overflow-hidden border border-white/10"
          data-aos="fade-up"
          :data-aos-delay="(index % 6) * 70"
        >
          <div class="relative">
            <img :src="project.image" alt="Project image" class="w-full h-52 object-cover" />
            <div
              class="absolute inset-0 opacity-0 hover:opacity-100 transition duration-500"
              style="background: linear-gradient(180deg, rgba(0,0,0,0.0), rgba(0,0,0,0.75));"
            ></div>
          </div>

          <div class="p-5">
            <h2 class="text-xl font-bold text-zinc-100">{{ project.title }}</h2>
            <p class="text-sm text-zinc-400 mt-2">{{ project.description }}</p>
            <a
              :href="project.link"
              target="_blank"
              class="inline-flex items-center gap-2 mt-4 text-sm font-semibold text-[#00d4ff] hover:text-white"
            >
              View Project →
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

