/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Instrument Serif"', 'serif'],
        sans:  ['"Schibsted Grotesk"', 'system-ui', 'sans-serif'],
        mono:  ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        // Light, warm, professional palette (matched to pinedawebstudio.com)
        paper:   '#F7F4ED', // warm cream background
        card:    '#FFFFFF', // surfaces / cards
        ink:     '#17213B', // deep navy text
        muted:   '#5C6573', // muted slate text
        line:    'rgba(23,33,59,0.12)',
        accent:  '#C0492E', // terracotta
        'accent-soft': 'rgba(192,73,46,0.10)',
        sand:    '#B79A78', // warm secondary
      },
      letterSpacing: {
        label: '0.18em',
      },
    },
  },
  plugins: [],
}
