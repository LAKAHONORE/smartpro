/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        colorBlue : '#0f70b6',
        colorPurple : 'rgb(88, 16, 197)',
      },
    },
  },
  plugins: [],
}

