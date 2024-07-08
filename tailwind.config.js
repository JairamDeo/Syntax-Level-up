/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'bg-b1',
    'bg-b2',
    'bg-b3',
    'bg-whyjava',
    'bg-full-stack-development',
    'bg-interview'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      boxShadow: {
        'coursebox': '0px 10px 30px 0px #0473EA26',
        'navsh': '0px 1px 1px 0px #0473EA26',
        'boxShadow1': '-5px -5px lightpink',
        'boxShadow2': '-5px -5px turquoise',
        'boxShadow3': '-5px -5px rgb(252, 212, 252)',
        'boxShadow4': '-5px -5px lightyellow'
      },
      backgroundImage: {
        'Logo': "url('/assets/Logo.png')",
        'FSDI': "url('/assets/FSD.png')",
        'FSDI1': "url('/assets/FSD1.png')",
        'MERNI': "url('/assets/MERN.png')",
        'MERNI1': "url('/assets/mern-img.png')",
        'MEANI': "url('/assets/MEAN.png')",
        'MEANI1': "url('/assets/mean-img.png')",
        'WEBI': "url('/assets/Webdev.jpg')",
        'WEBI1': "url('/assets/web-img.png')",
        'REACTI': "url('/assets/react.png')",
        'REACTI1': "url('/assets/react-img.png')",
        'UiUxI': "url('/assets/uiux.jpg')",
        'UiUxI1': "url('/assets/uiux-img.png')",
        'Companyi': "url('/assets/CompanyI.png')",
        'Collegei': "url('/assets/CollegeI.png')",
        'designi': "url('/assets/design.png')",
        'reacti': "url('/assets/react.png')",
        'homeblogi': "url('/assets/homeblog1.png')",
        'test1i': "url('/assets/carousal-img.png')",
        'test2i': "url('/assets/carousal-img2.png')",
        'test3i': "url('/assets/carousal-img3.png')",
        'hblog': "url('/assets/hblog.png')",
        'custom-gradient': "linear-gradient(180deg, rgba(56, 210, 0, 0.29) 0%, #0473EA 100%)",
        'b1': "url('/assets/b-1.png')",
        'b2': "url('/assets/b-2.png')",
        'b3': "url('/assets/b-3.png')",
        'whyjava': "url('/assets/b-4.png')",
        'full-stack-development': "url('/assets/bfsd.png')",
        'interview': "url('/assets/binterview.png')",
      },
    },
  },
  plugins: [],
}
