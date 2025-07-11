<template>
  <div class="px-6 md:px-24 py-10">
    <h1
      class="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-amber-700 font-sans py-3"
    >
      My Projects
    </h1>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-20">
      <div
        v-for="(project, index) in projects"
        :key="index"
        class="rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition duration-300 ease-in-out animate-fade-in"
      >
        <img
          :src="project.image"
          alt="Project image"
          class="w-full h-52 object-cover"
        />
        <div class="p-5">
          <h2 class="text-xl font-bold text-gray-800">{{ project.title }}</h2>
          <p class="text-sm text-gray-600 mt-2">{{ project.description }}</p>
          <a
            :href="project.link"
            target="_blank"
            class="inline-block mt-4 text-sm text-sky-600 font-semibold hover:underline"
          >
            View Project →
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

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
    description:
      "Developed a responsive website for best Jewllery Collection ",
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
    description:
      "Developed a responsive wheather app using html css and js ",
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
    description:
      "Developed a  responsive Website for Carvilla using tailwind css ",
    image: "/car.PNG",
    link: "https://uzair-khane.github.io/carvilla-website/",
  },
       {
    title: "Website For Health and care UI",
    description:
      "Developed a  responsive Website for Health and care  ",
    image: "/health.PNG",
    link: "https://uzair-khane.github.io/Health-and-care-porject-5th-semester/",
  },
      {
    title: "Website For Fitness Training UI",
    description:
      "Developed a  responsive Website For Fitness Training  ",
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
  // Add more projects here
];
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-in {
  animation: fadeIn 0.6s ease-out both;
}
</style>
