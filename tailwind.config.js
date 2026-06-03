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
        ink:     '#0E0E10', // near-black warm background
        surface: '#161619',
        line:    'rgba(236,234,227,0.10)',
        bone:    '#ECEAE3', // warm white text
        muted:   '#928F85',
        accent:  '#FF5C38', // vermilion
        'accent-soft': 'rgba(255,92,56,0.12)',
      },
      letterSpacing: {
        label: '0.18em',
      },
    },
  },
  plugins: [],
}
