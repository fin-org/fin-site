import * as colors from "@radix-ui/colors";

function colorScale(color) {
  const scale = {};
  for (const [key, value] of Object.entries(color)) {
    scale[key.replace(/\D/g, "")] = value;
  }
  return scale;
}

const gray = colorScale(colors.gray);
const grayDark = colorScale(colors.grayDark);
const green = colorScale(colors.green);
const greenDark = colorScale(colors.greenDark);
const blue = colorScale(colors.blue);
const blueDark = colorScale(colors.blueDark);
const purple = colorScale(colors.purple);
const purpleDark = colorScale(colors.purpleDark);
const bronze = colorScale(colors.bronze);
const bronzeDark = colorScale(colors.bronzeDark);
const red = colorScale(colors.red);
const redDark = colorScale(colors.redDark);
const orange = colorScale(colors.orange);
const orangeDark = colorScale(colors.orangeDark);

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,svelte,ts,tsx}"],
  theme: {
    colors: {
      inherit: "inherit",
      current: "currentColor",
      transparent: "transparent",
      black: "#000",
      white: "#fff",
      gray,
      grayDark,
      green,
      greenDark,
      blue,
      blueDark,
      purple,
      purpleDark,
      bronze,
      bronzeDark,
      red,
      redDark,
      orange,
      orangeDark,
    },
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
