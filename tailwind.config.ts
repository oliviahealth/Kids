import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        OpenSans: ['OpenSans'],
        Oswald: ['Oswald'],
      },
      screens: {
        '1s-sm': '420px',
        '2s-sm': '550px',
        '1s-lg': '900px',
        '1l-lg': '1200px'
      },
    },
  },
  daisyui: {
    themes: ['light'],
    // styled: false,
  },
  corePlugins: {
    fontWeight: false,
  },
  plugins: [require('./fontVariationSettingsPlugin'), require('daisyui')],

};
export default config;