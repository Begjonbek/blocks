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
        'bg-gradient':"url('linear-gradient(180deg, rgba(36, 0, 255, 0) 0%, #FF00AA 100%)')",
        
      },
      colors:{
        black:{
          '200':'#1F2224',
          '300':'#1E1E1E',
          '400':'#17191B',
          '700':'#000000'
        },
        'white-300':'#E0E0FF99',
        'air':'#00BBFF',
        'pink':'#FF00AA',
        'apelsin':'#FF5E00',
        'violet':'#C32DE1',
        'gren':'#16B862',
        'air-100':'#00B8B9',
        'yellow':'#FFAB00',
        'blue':'#5D2DE1',
        'green-00':'#00FFAA'
      },
    },
  },
  plugins: [require("tailwindcss-text-fill-stroke")],
};
