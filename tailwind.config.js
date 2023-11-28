/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'pop': ['Poppins'],
        'roboto': ['Roboto'],
      },
      maxWidth: {
        'container': '1320px',
      }
    },
  },
  plugins: [],
}

