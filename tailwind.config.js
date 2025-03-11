/ @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src//*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily:{
      'sans-serif':['Zen Kaku Gothic Antique'],
    },
    screens:{
      'mobile': '201px',
      'tablet': '501px',
      'laptop': '901px',
      'desktop': '1501px',
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

