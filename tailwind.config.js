/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      content: {
        'image': 'url("https://res.cloudinary.com/cv-abdi-creative/image/upload/v1680905007/next-tree/icon/Vector_sk6692.png")'
      }
    },
  },
  plugins: [require("daisyui"), require('@tailwindcss/line-clamp'),],
}