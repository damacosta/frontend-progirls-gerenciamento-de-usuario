/ @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily:{
      'sans':['Zen Kaku Gothic Antique'],
      'title': ['Zendaya']
    },
    colors:{
    "color-dark-green": "#0F3707",
    "color-green": "#1B7A08",
    "color-light-green": "#4CAF50",
    "color-lightest-green": "#F6FFF4",
    "color-white": "#FFFFFF",
    "color-pink": "#DB009F",
    "color-gray": "#504E4E",
    "color-light-gray": "#868686",
    "color-black": "#000000",
    },
    extend: {},
  },
  plugins: [],
}

