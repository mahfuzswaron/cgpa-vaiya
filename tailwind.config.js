/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#836FFF',
        secondary: '#211951',
        light: '#F0F3FF',
      },
    },
  },
  plugins: [],
}

