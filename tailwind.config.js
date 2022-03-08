module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    minWidth: {
      '1/2': '50%',
      '3/4': '75%',
      '1/3': '30%',
    },
    minHeight: {
      '1/2': '50%',
      '3/4': '75%',
      '1/3': '30%',
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
}
