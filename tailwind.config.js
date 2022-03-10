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
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '660px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
}
