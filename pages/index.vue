<template>
  <div
    class="bg-[url('/bg-header.png')] bg-no-repeat  min-h-[600px] w-full flex flex-col-reverse md:flex-row justify-between items-center px-6 md:px-10 py-10"
  >
    <!-- intro -->
    <div class="p-4 text-white w-full md:max-w-[50%] mb-8 md:ml-12">
      <h1 class="text-xl md:text-3xl font-bold text-sky-500">
        <span class="text-green-500 text-[20px] md:text-[22px]">Hello</span> I'm
      </h1>
      <h1 class="font-bold text-slate-900 mt-3 md:mt-5 text-4xl md:text-7xl">Uzair Khan</h1>
      <h1 class="mt-4 md:mt-7 font-semibold text-2xl md:text-4xl text-slate-800">
        {{ typedText }}
      </h1>

      <a href="/CV.pdf" target="_blank">
        <button
          class="mt-6 md:mt-8 px-4 py-3 hover:cursor-pointer hover:bg-sky-600 bg-sky-700 text-white font-semibold rounded"
        >
          Download My CV
        </button>
      </a>

      <!-- icons -->
      <div class="mt-6 flex flex-wrap gap-4 ml-1 md:ml-2">
        <a href="https://github.com/Uzair-khane" target="_blank">
          <i class="fa-brands fa-github hover:text-slate-800600  text-black text-2xl hover:cursor-pointer"></i>
        </a>
        <a href="https://www.linkedin.com/in/uzair-khan-1080772b1" target="_blank">
          <i class="fa-brands fa-linkedin hover:text-sky-600  text-sky-700 text-2xl hover:cursor-pointer"></i>
        </a>
        <a href="https://www.facebook.com/share/1VoQc6WuPP/" target="_blank">
          <i class="fa-brands fa-facebook hover:text-sky-600  text-sky-700 text-2xl hover:cursor-pointer"></i>
        </a>
        <a href="https://www.instagram.com/uzairkhan32131?igsh=MWE3YmJvdGUxM2J0OQ==" target="_blank">
          <i class="fa-brands fa-instagram hover:text-pink-400  text-pink-600 text-2xl hover:cursor-pointer"></i>
        </a>
      </div>
    </div>

    <!-- profile image -->
    <div class="w-[280px] md:w-[400px] h-auto bg-no-repeat bg-contain bg-center mb-6 md:mb-0">
      <img
        src="/capture.png"
        class="rounded-3xl rounded-b-full animate-fade-in w-full"
        alt="Uzair Khan"
      />
    </div>
  </div>
</template>


<style scoped>
@keyframes fade-in {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 1s ease-out forwards;
}
</style>

<script setup>
import { ref, onMounted } from "vue";

const fullText = "Frontend Developer";
const typedText = ref("");
let index = 0;

onMounted(() => {
  const interval = setInterval(() => {
    typedText.value += fullText[index];
    index++;
    if (index === fullText.length) {
      clearInterval(interval);
    }
  }, 100);
});
</script>
