/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef4ff',
          100: '#dbe7ff',
          200: '#b6ceff',
          300: '#7ea6ff',
          400: '#4b7bff',
          500: '#1E3A70',
          600: '#172f5c',
          700: '#11264b',
          800: '#0d1f3b',
          900: '#09152a',
        },
        growth: {
          50: '#effaf1',
          100: '#d7f4dc',
          200: '#b5e8b8',
          300: '#82d885',
          400: '#52c662',
          500: '#4CAF50',
          600: '#3c9a46',
          700: '#31813a',
          800: '#2a6d31',
          900: '#235a29',
        },
        logo: {
          blue: '#1E3A70',
          green: '#4CAF50',
        },
        neutral: '#F5F7FA',
        dark: '#111827',
        accent: {
          500: '#f97316',
          600: '#ea580c',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      boxShadow: {
        soft: '0 2px 15px rgba(16, 24, 40, 0.08)',
        medium: '0 4px 25px rgba(16, 24, 40, 0.12)',
        hard: '0 8px 40px rgba(16, 24, 40, 0.16)',
        'inner-soft': 'inset 0 2px 4px rgba(16, 24, 40, 0.06)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'bounce-subtle': 'bounceSubtle 0.6s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
    },
  },
  plugins: [],
};
