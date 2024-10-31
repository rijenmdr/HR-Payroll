import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        foreground: 'hsl(var(--foreground))',
        background: 'hsl(var(--background))',
        border: '#A2A1A833',
        primary: {
          '100': '#E6E2F8',
          '200': '#CEC4F6',
          '300': '#B2A2F9',
          '400': '#9178FA',
          '500': '#7152F3',
          '600': '#5D3DE7',
          '700': '#4F31D0',
          '800': '#3517B4',
          '900': '#250C92',
          DEFAULT: '#7152F3',
          foreground: '#FFF',
        },
        secondary: {
          '100': '#E1F1BC',
          '200': '#CEE993',
          '300': '#BCDE6B',
          '400': '#AFD751',
          '500': '#A3D139',
          '600': '#97BD33',
          '700': '#88A52A',
          '800': '#798D21',
          '900': '#626615',
          DEFAULT: '#A3D139',
          foreground: '#FFF',
        },
        gray: {
          '50': '#A2A1A8E5',
          '100': '#A2A1A81A',
          '200': '#A2A1A833',
          '300': '#A2A1A8CC',
          '400': '#A2A1A8E5',
          '500': '#A2A1A8',
          DEFAULT: '#A2A1A8',
        },
        white: {
          '50': '#FFFFFF0D',
          '100': '#FFFFFF1A',
          '200': '#A2A1A833',
          '300': '#A2A1A8CC',
          '400': '#A2A1A8E5',
          '500': '#FFFFFF',
          DEFAULT: '#FFFFFF',
        },
        success: {
          '100': '#3FC28A1A',
          DEFAULT: '#3FC28A',
          foreground: '#FFF',
        },
        destructive: {
          '100': '#F45B691A',
          DEFAULT: '#F45B69',
          foreground: '#FFF',
        },
        warning: {
          '100': '#EFBE121A',
          DEFAULT: '#EFBE12',
          foreground: '#FFF',
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          footer: 'hsl(var(--sidebar-footer-background))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))',
        },
      },
      fontFamily: {
        lexend: ['var(--font-lexend)'],
      },
      borderRadius: {
        lg: 'calc(var(--radius) - .4rem )',
        md: 'var(--radius)',
        sm: 'calc(var(--radius) - .2rem)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;
