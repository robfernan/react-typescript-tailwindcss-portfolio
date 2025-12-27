/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        'xs': '475px',
      },
      colors: {
        'theme-bg': 'var(--color-background)',
        'theme-bg-dark': 'var(--color-background-dark)',
        'theme-header': 'var(--color-header)',
        'theme-header-dark': 'var(--color-header-dark)',
        'theme-footer': 'var(--color-footer)',
        'theme-footer-dark': 'var(--color-footer-dark)',
        'theme-primary': 'var(--color-primary)',
        'theme-primary-dark': 'var(--color-primary-dark)',
        'theme-secondary': 'var(--color-secondary)',
        'theme-secondary-dark': 'var(--color-secondary-dark)',
        'theme-accent': 'var(--color-accent)',
        'theme-accent-dark': 'var(--color-accent-dark)',
        'theme-card': 'var(--color-card)',
        'theme-card-dark': 'var(--color-card-dark)',
        'theme-action': 'var(--color-action)',
        'theme-action-dark': 'var(--color-action-dark)',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    function({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
          '&::-webkit-scrollbar': {
            display: 'none'
          }
        }
      })
    }
  ],
};
