/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // determina quais arquivos vão ter uso do tailwind
    "./index.html",
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}

