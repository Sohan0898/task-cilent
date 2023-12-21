/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    ],
  theme: {
    extend: {

      colors:{
        first: '#3F77C4',
        second: '#AABAED'
      },

      fontFamily:{
       poppins: ['Poppins', 'sans-serif'],
      }

    },
  },
  plugins: [require("daisyui")],
}

