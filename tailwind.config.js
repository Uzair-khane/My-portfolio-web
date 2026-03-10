/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app.vue",
    "./pages/**/*.{vue,js,ts}",
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.{vue,js,ts}",
    "./plugins/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      keyframes: {
        heroGradient: {
          "0%,100%": { backgroundPosition: "0% 30%" },
          "50%": { backgroundPosition: "100% 70%" },
        },
        orbsMove: {
          "0%": { transform: "translate3d(-2%, -1%, 0) scale(1)" },
          "100%": { transform: "translate3d(2%, 1%, 0) scale(1.04)" },
        },
        gentleIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        heroFloat: {
          "0%,100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-15px) rotate(1deg)" },
        },
        floatIcon: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        rotateDash: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        pulseDot: {
          "0%,100%": { transform: "scale(1)", opacity: "0.7" },
          "50%": { transform: "scale(1.5)", opacity: "1" },
        },
        fadeInLeft: {
          "0%": { opacity: "0", transform: "translateX(-40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        fadeInRight: {
          "0%": { opacity: "0", transform: "translateX(40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        orbPulse: {
          "0%,100%": { transform: "scale(1)", opacity: "0.5" },
          "50%": { transform: "scale(1.12)", opacity: "0.75" },
        },
        gradientUnderline: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
      },
      animation: {
        heroGradient: "heroGradient 18s ease-in-out infinite",
        orbsMove: "orbsMove 14s ease-in-out infinite alternate",
        gentleIn: "gentleIn 0.8s ease both",
        heroFloat: "heroFloat 5s ease-in-out infinite",
        floatIcon: "floatIcon 4s ease-in-out infinite",
        rotateDash: "rotateDash 18s linear infinite",
        pulseDot: "pulseDot 2.5s ease-in-out infinite",
        fadeInLeft: "fadeInLeft 0.8s ease both",
        fadeInRight: "fadeInRight 0.8s ease both",
        orbPulse: "orbPulse 6s ease-in-out infinite",
        gradientUnderline: "gradientUnderline 1s ease forwards",
      },
    },
  },
  plugins: [],
};
