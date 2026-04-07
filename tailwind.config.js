tailwind.config = {
  theme: {
    extend: {
      animation: {
        'ambient-breath': 'breath 8s ease-in-out infinite',
      },
      keyframes: {
        breath: {
          '0%, 100%': { transform: 'scale(1) translate(0px, 0px)', opacity: 0.3 },
          '50%': { transform: 'scale(1.1) translate(10px, -10px)', opacity: 0.5 },
        }
      }
    }
  }
}
