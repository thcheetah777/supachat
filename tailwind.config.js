/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,svelte,ts}",
  ],
  theme: {
    colors: {
      // Theme colors
      "primary": "#29a372",

      // Basic colors
      "white": "#ffffff",
      "black": "#000000",
      "transparent": "transparent",
      "current": "currentColor",
      "error": "#da373c",
      "warning": "#fbbd23",
      "info": "#3abff8",

      // Neutral colors
      "neutral-darker": "#2b2d31",
      "neutral-dark": "#2d2f34",
      "neutral": "#323439",
      "neutral-light": "#40424a",
      "neutral-lighter": "#949aa4",
    },
    extend: {},
  },
  plugins: [],
}
