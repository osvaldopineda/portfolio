/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  future: {
    // Gate every `hover:` utility behind @media (hover: hover) so a tap on
    // touch doesn't leave hover states stuck on.
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Bricolage Grotesque"', 'sans-serif'],
        sans:  ['"Archivo"', 'system-ui', 'sans-serif'],
        mono:  ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      transitionTimingFunction: {
        // Strong ease-out — the stock curves are too weak to read as intentional
        'out-strong': 'cubic-bezier(0.23, 1, 0.32, 1)',
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
        // Ink-slab surface for the contrast band. The ink stays constant, but
        // the surface has to move in dark: #1C1A17 against dark paper #171310
        // was an invisible seam, so the page's only structural break vanished
        // for everyone arriving in dark mode. Lifted, not themed (see index.css).
        slab:     'rgb(var(--slab) / <alpha-value>)',
        'slab-ink': '#ECE7DC',
        'slab-muted': '#9C9384',
      },
      letterSpacing: {
        tight2: '-0.03em',
      },
    },
  },
  plugins: [],
}
