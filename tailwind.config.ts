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
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        brand: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb', // Trust Corporate Blue
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        accent: {
          50: '#eef2ff',
          500: '#6366f1',
          600: '#4f46e5',
        },
        surface: {
          canvas: '#f8fafc', // Soft warm light mesh canvas (not stark white)
          card: '#ffffff',
          subtle: '#f1f5f9',
          border: '#e2e8f0',
          dark: '#0f172a',
        }
      },
      backgroundImage: {
        'mesh-light': 'radial-gradient(at 0% 0%, rgba(219, 234, 254, 0.5) 0px, transparent 50%), radial-gradient(at 100% 0%, rgba(224, 231, 255, 0.45) 0px, transparent 50%), radial-gradient(at 50% 50%, rgba(241, 245, 249, 0.8) 0px, transparent 50%), radial-gradient(at 0% 100%, rgba(224, 242, 254, 0.4) 0px, transparent 50%)',
      }
    },
  },
  plugins: [],
};
export default config;
