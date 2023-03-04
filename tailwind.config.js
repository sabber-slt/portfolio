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
    colors: {
      pink: "#F05189",
      white: "#fafafa",
      neutral100: "#f5f5f5",
      neutral200: "#e5e5e5",
      blue: "#004AAD"
    }
    ,
    extend: {},
  },
  plugins: [],
}