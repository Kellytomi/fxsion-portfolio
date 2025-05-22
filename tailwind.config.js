/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand colors extracted from Fxsion logo
        'primary': '#1a1b4b',     // Deep navy blue from logo
        'secondary': '#4338ca',   // Vibrant blue accent
        'accent': '#06b6d4',      // Cyan for highlights
        'success': '#10b981',     // Green for success states
        'warning': '#f59e0b',     // Orange for attention
        'surface': '#fafafa',     // Light background
        'text': '#1f2937',        // Dark text
        'muted': '#6b7280',       // Medium gray for secondary text
        'highlight': '#ffffff',   // White for highlights
        'gold': '#d4af37',        // Gold accent from existing config
        // Gradient colors for enhanced visual appeal
        'gradient': {
          'start': '#1a1b4b',
          'middle': '#4338ca', 
          'end': '#06b6d4'
        }
      },
      fontFamily: {
        sans: ['var(--font-jakarta)'],
        display: ['var(--font-syne)'],
      },
      fontSize: {
        '7xl': ['5rem', { lineHeight: '1.1' }],
        '8xl': ['6.5rem', { lineHeight: '1' }],
      },
      letterSpacing: {
        'tighter': '-0.05em',
        'tight': '-0.025em',
        'normal': '0',
        'wide': '0.025em',
        'wider': '0.05em',
        'widest': '0.1em',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-subtle': 'bounceSubtle 2s infinite',
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
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(26, 27, 75, 0.08)',
        'hover': '0 8px 30px rgba(26, 27, 75, 0.15)',
        'brand': '0 10px 40px rgba(26, 27, 75, 0.2)',
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #1a1b4b 0%, #4338ca 50%, #06b6d4 100%)',
        'gradient-hero': 'linear-gradient(135deg, #fafafa 0%, #f3f4f6 100%)',
      }
    },
  },
  plugins: [],
} 