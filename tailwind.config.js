/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "colors": {
        "green": "#0F9D58",
        "red": "#DB4437",
      }
    },
  },
  plugins: [],
}

