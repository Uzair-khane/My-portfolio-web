<script setup>
import { ref } from "vue";

const name = ref("");
const email = ref("");
const message = ref("");

const sendToWhatsApp = () => {
  const nameValue = name.value.trim();
  const emailValue = email.value.trim();
  const messageValue = message.value.trim();

  if (!nameValue || !emailValue || !messageValue) {
    alert("Please fill out all fields.");
    return;
  }

  const fullMessage = `New Contact Form Submission:%0AName: ${nameValue}%0AEmail: ${emailValue}%0AMessage: ${messageValue}`;
  const phoneNumber = "923149535884";

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${fullMessage}`;
  window.open(whatsappURL, "_blank");

  setTimeout(() => {
    alert(" Message was successfully sent to Uzair Khan!");
  }, 1000);

  name.value = "";
  email.value = "";
  message.value = "";
};
</script>

<template>
  <section id="contact" class="section-wrap">
    <div class="section-inner py-16 md:py-20">
      <div class="p-8 md:p-12">
        <div class="flex flex-col md:flex-row justify-between gap-12">
          <!-- Contact Info -->
          <div class="flex-1" data-aos="fade-right">
            <h1
              class="text-4xl py-3 md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] font-extrabold mb-8"
            >
              Let's Work Together
            </h1>

            <div class="mb-6" data-aos="fade-up">
              <p class="text-lg text-zinc-300 mb-1">Mail Me:</p>
              <a
                href="mailto:uzairkhantaken1234@gmail.com"
                class="text-[#00d4ff] text-xl font-semibold hover:text-white"
              >
                uzairkhantaken1234@gmail.com
              </a>
            </div>

            <hr class="border-white/10 my-4 w-full" data-aos="fade" />

            <div class="mb-6" data-aos="fade-up">
              <p class="text-lg text-zinc-300 mb-1">Call Now:</p>
              <a href="tel:+923149535884" class="text-[#00d4ff] text-xl font-semibold hover:text-white">
                +923149535884
              </a>
            </div>

            <hr class="border-white/10 my-4 w-full" data-aos="fade" />

            <div data-aos="fade-up">
              <p class="text-lg text-zinc-300 mb-3">Follow Me:</p>
              <div class="flex gap-4 text-2xl">
                <a href="https://github.com/Uzair-khane" target="_blank" class="text-zinc-200 hover:text-white">
                  <i class="fab fa-github"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/uzair-khan-1080772b1"
                  target="_blank"
                  class="text-zinc-200 hover:text-white"
                >
                  <i class="fab fa-linkedin"></i>
                </a>
                <a
                  href="https://www.facebook.com/share/1VoQc6WuPP/"
                  target="_blank"
                  class="text-zinc-200 hover:text-white"
                >
                  <i class="fab fa-facebook"></i>
                </a>
                <a
                  href="https://www.instagram.com/uzairkhan32131"
                  target="_blank"
                  class="text-zinc-200 hover:text-white"
                >
                  <i class="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="flex-1" data-aos="zoom-in-up">
            <p class="text-zinc-300 text-lg mb-6">
              Have a project in mind or want to work together? Fill out the form
              below with your details. I'll get back to you soon. Let's create
              something great together!
            </p>

            <div class="flex flex-col gap-5">
              <input
                v-model="name"
                type="text"
                placeholder="Enter Your Name"
                class="px-4 py-3 border border-white/10 bg-white/5 rounded-xl outline-none w-full text-zinc-100 placeholder:text-zinc-500"
                data-aos="fade-left"
              />

              <input
                v-model="email"
                type="email"
                placeholder="Enter Your Email"
                class="px-4 py-3 border border-white/10 bg-white/5 rounded-xl outline-none w-full text-zinc-100 placeholder:text-zinc-500"
                data-aos="fade-left"
              />

              <textarea
                v-model="message"
                rows="5"
                placeholder="Message"
                class="px-4 py-3 border border-white/10 bg-white/5 rounded-xl outline-none w-full resize-none text-zinc-100 placeholder:text-zinc-500"
                data-aos="fade-left"
              ></textarea>

              <button @click="sendToWhatsApp" class="btn-primary w-max" data-aos="fade-up">Send Message</button>
            </div>
          </div>
        </div>

        <!-- Google Map -->
        <div class="mt-20" data-aos="fade-up">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.718252376575!2d71.53304971096898!3d33.99976997306483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d917a3438ff01f%3A0x52a02b4c496ef60c!2sState%20Life%20Building!5e0!3m2!1sen!2s!4v1752140723623!5m2!1sen!2s"
            width="100%"
            height="450"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            class=""
          ></iframe>
        </div>
      </div>
    </div>
  </section>
</template>

