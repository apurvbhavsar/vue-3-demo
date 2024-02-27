/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts}'],
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        // Color palette from Vue.js theme
        white: {
          DEFAULT: '#ffffff',
          soft: '#f8f8f8',
          mute: '#f2f2f2'
        },
        black: {
          DEFAULT: '#181818',
          soft: '#222222',
          mute: '#282828'
        },
        indigo: '#2c3e50',

        // Divider colors
        divider: {
          light: {
            1: 'rgba(60, 60, 60, 0.29)',
            2: 'rgba(60, 60, 60, 0.12)'
          },
          dark: {
            1: 'rgba(84, 84, 84, 0.65)',
            2: 'rgba(84, 84, 84, 0.48)'
          }
        },

        // Text colors
        text: {
          light: {
            1: 'var(--vt-c-indigo)', // Use existing variable
            2: 'rgba(60, 60, 60, 0.66)'
          },
          dark: {
            1: 'var(--vt-c-white)', // Use existing variable
            2: 'rgba(235, 235, 235, 0.64)'
          }
        }
      },

      // Semantic project colors
      backgroundColor: {
        DEFAULT: 'var(--color-background)',
        soft: 'var(--color-background-soft)',
        mute: 'var(--color-background-mute)'
      },
      borderColor: {
        DEFAULT: 'var(--color-border)',
        hover: 'var(--color-border-hover)'
      },
      textColor: {
        DEFAULT: 'var(--color-text)',
        heading: 'var(--color-heading)'
      }
    },
    screens: {
      // Other screens can be added here if needed
    }
  },
  plugins: []
}
