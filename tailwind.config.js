/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
      fontFamily:{
          "anta":["Anta"],
          "monsterrat":["Montserrat"]
      },
    extend: {
        colors: {
        'bg': 'black',
        'text':"#F0EDCF",
        'secondary':"#40A2D8",
        'tertiary':"#FFB0B0"
      },
    },
  },
  plugins: [],
}