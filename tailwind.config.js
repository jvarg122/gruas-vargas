/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#D4560F',
          'orange-warm': '#E8651A',
          'green-dark': '#1B3D2B',
          green: '#2E6B4A',
          'green-light': '#4A9B6E',
        },
        surface: {
          base: '#080808',
          steel: '#111111',
          iron: '#1E1E1E',
          raised: '#1A1A1A',
        },
        ink: {
          cream: '#F0EBE3',
          fog: '#9A9A9A',
          ash: '#5A5A5A',
        },
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'sans-serif'],
        heading: ['"Barlow Condensed"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
      fontSize: {
        hero: ['clamp(4rem, 10vw, 10rem)', { lineHeight: '0.9' }],
        display: ['clamp(3rem, 6vw, 5rem)', { lineHeight: '0.95' }],
        '4xl': ['clamp(2.25rem, 4vw, 3rem)', { lineHeight: '1.05' }],
        '3xl': ['clamp(1.75rem, 3vw, 2.25rem)', { lineHeight: '1.1' }],
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'cinematic': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'in-quart': 'cubic-bezier(0.5, 0, 0.75, 0)',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
      },
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}
