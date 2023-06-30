// /** @type {import('tailwindcss').Config} */

// const colors = require('tailwindcss/colors')


// module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx,css}"],
//   mode: 'jit',
//   theme: {
//     extend: {
//       animation: {
//         loader: 'loader 0.6s infinite alternate',
//       },
//       keyframes: {
//         loader: {
//           to: {
//             opacity: 0.1,
//             transform: 'translate3d(0, -1rem, 0)',
//           },
//         },
//       },
//     },
//   },
//   variants: {},
//   plugins: [],
// }


/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,css}"],
  mode: 'jit',
  theme: {
    extend: {
      animation: {
        loader: 'loader 0.6s infinite alternate',
        'fade-in-out': 'fadeInOut 3s ease-in-out infinite', // Added here
      },
      keyframes: {
        loader: {
          to: {
            opacity: 0.1,
            transform: 'translate3d(0, -1rem, 0)',
          },
        },
        fadeInOut: {  // Added this block
          '0%': { opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
    },
  },
  variants: {},
  plugins: [],
}

