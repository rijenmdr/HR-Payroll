import { nextui } from '@nextui-org/react';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        foreground: 'var(--foreground)',
        border: '#A2A1A833',
        primary: {
          100: '#E6E2F8',
          200: '#CEC4F6',
          300: '#B2A2F9',
          400: '#9178FA',
          500: '#7152F3',
          600: '#5D3DE7',
          700: '#4F31D0',
          800: '#3517B4',
          900: '#250C92',
          DEFAULT: '#7152F3',
          foreground: '#7152F30D',
        },
        secondary: {
          100: '#E1F1BC',
          200: '#CEE993',
          300: '#BCDE6B',
          400: '#AFD751',
          500: '#A3D139',
          600: '#97BD33',
          700: '#88A52A',
          800: '#798D21',
          900: '#626615',
          DEFAULT: '#A3D139',
          foreground: '#A3D1390D',
        },
        success: {
          DEFAULT: '#3FC28A', // SUCCESS
          foreground: '#3FC28A1A',
        },
        destructive: {
          DEFAULT: '#F45B69', //ERROR
          foreground: '#F45B691A',
        },
      },
      fontFamily: {
        lexend: ['var(--font-lexend)'],
      },
    },
  },
  darkMode: 'class',
  plugins: [
    nextui({
      themes: {
        dark: {
          extend: 'dark',
          colors: {
            background: '#16151C',
            foreground: '#FFFFFF',
            content1: '#16151CCC',
            content2: '#16151C33',
            content3: '#16151C1A',
            content4: '#16151C0D',
          },
        },
        light: {
          extend: 'light',
          colors: {
            background: '#FFFFFF',
            foreground: '#16151C',
            content1: '#D9E1E1CC',
            content2: '#D9E1E133',
            content3: '#D9E1E11A',
            content4: '#D9E1E10D',
          },
        },
      },
    }),
  ],
};
export default config;
