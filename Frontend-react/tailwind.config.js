/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  darkMode : 'class', 
  theme: {
    extend: {
      colors : {
        "color-primary-light" : "#F4F7FD",
        "color-white" : "#FFFFFF",
        "color-primay-dark" : "#E4EBFA",
        "color-gray" : "#828FA3",
        "color-black" : "#000112",
        "color-black-primary" : "#20212C",
        "color-black-light" : "#2B2C37",
        "color-gray-dark" : "#3E3F4E",
        "color-red" : "#EA5555",
        "color-red-light" : "#FF9898",
        "color-bob" : "#635fc7",
        'color-brown' : '#121212',
        'color-browwn' : '#121217',
        'color-yellow' : '#FFF8E7',
      }
    },
    container: {
       center : true,
      padding: {
        DEFAULT: '20px',
        md:"50px"  
      }
    }
  },
  plugins: [
    
  ],
}

