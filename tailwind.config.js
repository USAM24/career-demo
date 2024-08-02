/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {backgroundColor: {
      'teal-Nav': '#F6FAFB',
      'green-button': '#20B486'
    },
textColor: {
    'green-text': '#56BC80'}
}},
  plugins: [],
};
