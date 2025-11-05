  tailwind.config = {
    theme: {
      extend: {
        colors: {
          primary: '#6366f1',
          'primary-hover': '#4f46e5',
          success: '#10b981',
          glass: 'rgba(255, 255, 255, 0.1)',
        },
        animation: {
          'float': 'float 6s ease-in-out infinite',
          'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        },
        keyframes: {
          float: {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-10px)' }
          }
        }
      }
    }
  }