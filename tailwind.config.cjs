module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      backgroundImage:{
          'banner': 'url("./src/assets/banner.jpg")',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
  
}