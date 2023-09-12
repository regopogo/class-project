/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily : {
        'nunito': ['Nunito', 'sans-serif'],
        'heebo': ['Heebo', 'sans-serif'],

      },
      colors : {
        "primary" : "#0bbbcc",
      },
      
     
    },
  },
  plugins: [],
}

