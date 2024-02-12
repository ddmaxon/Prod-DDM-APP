/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["light"],
  },
  plugins: [
    require('daisyui'),
    require('flowbite/plugin')({
      charts: true,
    }),
  ],
}

