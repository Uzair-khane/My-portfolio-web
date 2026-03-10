import AOS from 'aos'
import 'aos/dist/aos.css'

export default defineNuxtPlugin(() => {
  if (process.server) return

  const init = () => {
    AOS.init({
      duration: 900,
      easing: 'ease-out-cubic',
      once: false,
      mirror: true,
      offset: 80,
    })
  }

  // init after first paint
  requestAnimationFrame(init)
})

