/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      maxWidth: {
        'xll': "1360px",
      },
      fontFamily: {
        'monst': ["Montserrat", "sans-serif"],
        'grotesk': ["Space Grotesk", "sans-serif"],
      },
      backgroundImage: {
        'hero-back':"url('../image/wrapper.png')",
        'back-mobile':"url('../image/wrapper-mobil.png')",
          'update':"url('../image/update.png')",
          'update-mobil':"url('../image/update-mobil.png')",
        'connec':"url('../image/connectivity.png')",
        'about':"url('../image/about.png')",
      },
      colors:{
        black:{
          '200':'#1F2224',
          '300':'#1E1E1E',
          '400':'#17191B',
          '700':'#000000'
        },
        'white-300':'#E0E0FF99',
      },
    },
  },
  plugins: [require("tailwindcss-text-fill-stroke")],
};
