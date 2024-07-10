/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  
  theme: {
    extend: {
      colors:{
        primary:"#4CAF4F",
        secondary:"#4D4D4D",
        threed:"#717171",
        bgPrimary:"#F5F7FA"
      },
      padding:{
        sectionLg:`7rem `,
        sectionMd:`2rem `

      },
      
    },
  },
  plugins: [],
}

