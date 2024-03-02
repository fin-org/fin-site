import * as colors from "@radix-ui/colors";
import typography from "@tailwindcss/typography";

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
      typography: {
        DEFAULT: {
          css: {
            "--tw-prose-body": gray[11],
            "--tw-prose-headings": gray[12],
            "--tw-prose-lead": gray[10],
            "--tw-prose-links": bronze[10],
            "--tw-prose-bold": gray[12],
            "--tw-prose-counters": gray[8],
            "--tw-prose-bullets": gray[8],
            "--tw-prose-hr": gray[6],
            "--tw-prose-quotes": gray[12],
            "--tw-prose-quote-borders": gray[6],
            // '--tw-prose-captions': colors.gray[500],
            // '--tw-prose-kbd': colors.gray[900],
            // '--tw-prose-kbd-shadows': hexToRgb(colors.gray[900]),
            "--tw-prose-code": gray[12],
            "--tw-prose-pre-code": gray[12],
            "--tw-prose-pre-bg": gray[3],
            "--tw-prose-th-borders": gray[8],
            "--tw-prose-td-borders": gray[6],

            // invert
            "--tw-prose-invert-body": grayDark[11],
            "--tw-prose-invert-headings": grayDark[12],
            "--tw-prose-invert-lead": grayDark[10],
            "--tw-prose-invert-links": bronzeDark[10],
            "--tw-prose-invert-bold": grayDark[12],
            "--tw-prose-invert-counters": grayDark[8],
            "--tw-prose-invert-bullets": grayDark[8],
            "--tw-prose-invert-hr": grayDark[6],
            "--tw-prose-invert-quotes": grayDark[12],
            "--tw-prose-invert-quote-borders": grayDark[6],
            // '--tw-prose-invert-captions': colors.gray[400],
            // '--tw-prose-invert-kbd': colors.white,
            // '--tw-prose-invert-kbd-shadows': hexToRgb(colors.white),
            "--tw-prose-invert-code": grayDark[12],
            "--tw-prose-invert-pre-code": grayDark[12],
            "--tw-prose-invert-pre-bg": grayDark[4],
            "--tw-prose-invert-th-borders": grayDark[8],
            "--tw-prose-invert-td-borders": grayDark[6],

            // blockquote
            "blockquote p::before": { content: "none" },
            "blockquote p::after": { content: "none" },
          },
        },
      },
    },
  },
  plugins: [typography],
};
