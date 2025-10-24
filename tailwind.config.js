/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          400: '#8B5CF6',
          500: '#7C3AED',
          600: '#6D28D9',
          900: '#1e1b4b'
        },
        // Neopop color palette
        neopop: {
          purple: '#8B5CF6',
          purpleDark: '#7C3AED',
          purpleLight: '#A78BFA',
          blue: '#3B82F6',
          green: '#10B981',
          yellow: '#F59E0B',
          red: '#EF4444',
          orange: '#F97316',
          teal: '#14B8A6',
          indigo: '#6366F1',
        },
        // Neopop semantic colors
        semantic: {
          success: '#10B981',
          warning: '#F59E0B',
          error: '#EF4444',
          info: '#3B82F6',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        neopop: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'bounce-gentle': 'bounceGentle 2s infinite',
        'neopop-bounce': 'neopopBounce 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'neopop-pulse': 'neopopPulse 2s infinite',
        'neopop-slide': 'neopopSlide 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        neopopBounce: {
          '0%': { transform: 'scale(0.3)', opacity: '0' },
          '50%': { transform: 'scale(1.05)' },
          '70%': { transform: 'scale(0.9)' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        neopopPulse: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.05)', opacity: '0.8' },
        },
        neopopSlide: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      boxShadow: {
        'neopop': '0 8px 32px rgba(139, 92, 246, 0.3)',
        'neopop-lg': '0 16px 64px rgba(139, 92, 246, 0.4)',
        'neopop-xl': '0 24px 96px rgba(139, 92, 246, 0.5)',
      },
      backdropBlur: {
        'neopop': '20px',
      },
    },
  },
  plugins: [],
}
