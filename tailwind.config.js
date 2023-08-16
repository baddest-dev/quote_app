/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/**/*.{jsx,js}"],
  theme: {
    screens:{
      sm:"640px",
      
    },
    container:{
      center:true,
      padding:{
        DEFAULT:"1rem"
      }
    },
    extend: {},
  },
  plugins: [],
}

