import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/ui/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        body: `'EB Garamond', serif`,
        heading: `'Titillium Web', sans-serif`,
      },
      colors: {
        white: '#FEFEFE',
        primary: {
          50: `#E9F2F1`,
          100: `#BCD7D4`,
          200: `#9CC4BF`,
          300: `#6EA9A2`,
          400: `#529890`,
          500: `#277E74`,
          600: `#23736A`,
          700: `#1C5952`,
          800: `#154540`,
          900: `#103531`,
        },
        black: {
          50: `#E7E7E6`,
          100: `#B3B3B3`,
          200: `#8F8F8E`,
          300: `#5C5C5A`,
          400: `#3C3C3A`,
          500: `#0B0B09`,
          600: `#0A0A08`,
          700: `#080806`,
          800: `#060605`,
          900: `#050504`,
          rgba_5: 'rgba(0, 0, 0, 0.54)',
        },
        green: {
          50: '#E9F2F1',
          500: '#277E74',
        },
      },
      borderRadius: {
        // primary: `20px`,
      },
      boxShadow: {
        'shadow-primary': `0px 0px 40px 0px rgba(0, 0, 0, 0.05)`,
      },
      borderWidth: {
        tiny: '0.5px',
      },
    },
  },
  plugins: [],
};
export default config;
