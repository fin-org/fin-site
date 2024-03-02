/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,svelte,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Sono", ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
          { fontVariationSettings: '"MONO" 0' },
        ],
        mono: [
          '"Sono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
          { fontVariationSettings: '"MONO" 1' },
        ],
      },
    },
  },
  plugins: [],
};
