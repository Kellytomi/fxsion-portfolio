/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#2D3047',  // Deep navy blue - more sophisticated than midnight
        'secondary': '#93B7BE', // Soft blue-gray - modern accent
        'accent': '#E4D9FF',   // Soft lavender - elegant highlight
        'surface': '#F7F7F9',  // Off-white with slight blue tint
        'text': '#2D3047',     // Matching primary for text
        'muted': '#6B7280',    // Subtle gray for secondary text
        'highlight': '#FFD700', // Pure gold for special highlights
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
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.05)',
        'hover': '0 8px 30px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
} 