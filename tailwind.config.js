/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Instrument Serif"', 'serif'],
        sans:  ['"Schibsted Grotesk"', 'system-ui', 'sans-serif'],
        mono:  ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        // Themed via CSS variables (see index.css :root / .dark)
        paper:  'rgb(var(--paper) / <alpha-value>)',
        card:   'rgb(var(--card) / <alpha-value>)',
        ink:    'rgb(var(--ink) / <alpha-value>)',
        muted:  'rgb(var(--muted) / <alpha-value>)',
        accent: 'rgb(var(--accent) / <alpha-value>)',
        sand:   'rgb(var(--sand) / <alpha-value>)',
        line:   'var(--line)',
        'accent-soft': 'var(--accent-soft)',
      },
      letterSpacing: {
        label: '0.18em',
      },
    },
  },
  plugins: [],
}
