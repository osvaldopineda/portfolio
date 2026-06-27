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
        raised: 'rgb(var(--raised) / <alpha-value>)',
        ink:    'rgb(var(--ink) / <alpha-value>)',
        muted:  'rgb(var(--muted) / <alpha-value>)',
        accent: 'rgb(var(--accent) / <alpha-value>)',
        clay:   'rgb(var(--clay) / <alpha-value>)',
        line:   'var(--line)',
        // Constant ink-slab surface (same in both themes) for the contrast band
        slab:     '#1C1A17',
        'slab-ink': '#ECE7DC',
        'slab-muted': '#9C9384',
      },
      letterSpacing: {
        tight2: '-0.03em',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to:   { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 38s linear infinite',
      },
    },
  },
  plugins: [],
}
