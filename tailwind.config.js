/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        sm: '480px',
      },
      fontFamily: {
        grotesk: ['Cabinet Grotesk', 'sans-serif'],
      },
      colors: {
        'surface-default': '#fff',
        'surface-subdued': '#FAFAFA',
        'text-subdued': '#A6A6A6',
        'text-default': '#151717',
        'text-secondary': '#2D3333',
        'text-alternate-secondary': '#F2F2F2',
        'action-primary-default': '#5523E7',
        'action-primary-hovered': '#4115C1',
        purple500: '#7B55E7',
        purple600: '#5523E7',
        'darkGray200': '#2D3333',
        'darkGrayBlack': '#0A0A0A',
        'border-default': '#E6E6E6',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
