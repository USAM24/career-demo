/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        tertiary: 'var(--tertiary-color)',
        primaryText: 'var(--primary-text-color)',
        secondaryText: 'var(--secondary-text-color)',
        tertiaryText: 'var(--tertiary-text-color)',
        neutralWhite: 'var(--neutral-white-color)',
        neutralBlack: 'var(--neutral-black-color)',
      },
    },
  },
  plugins: [],
};
