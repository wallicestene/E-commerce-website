/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        verydarkblue: 'hsl(var(--Very-dark-blue))',
        darkGrayishblue: 'hsl(var(--Dark-grayish-blue))',
        Grayishblue: 'hsl(var(--Grayish-blue))',
        Lightgrayishblue: 'hsl(var( --Light-grayish-blue))',
        White: 'hsl(var(--White))',

        Paleorange:'hsl(var( --Pale-orange))',
        Orange:'hsl(var(--Orange))',
      },
      fontFamily:{
        body: ["Kumbh Sans"]
      }
    },
  },
  plugins: [],
} 