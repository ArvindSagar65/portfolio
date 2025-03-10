module.exports = {
    theme: {
      extend: {
        animation: {
          'orbit-mercury': 'orbit 3s linear infinite',
          'orbit-venus': 'orbit 5s linear infinite',
          'orbit-earth': 'orbit 7s linear infinite',
          'orbit-mars': 'orbit 10s linear infinite',
          'orbit-jupiter': 'orbit 15s linear infinite',
          'orbit-saturn': 'orbit 20s linear infinite',
          'orbit-uranus': 'orbit 25s linear infinite',
          'orbit-neptune': 'orbit 30s linear infinite',
          'orbit-pluto': 'orbit 40s linear infinite',
        },
        keyframes: {
          orbit: {
            '0%': { transform: 'rotate(0deg) translateX(50%) rotate(0deg)' },
            '100%': { transform: 'rotate(360deg) translateX(50%) rotate(-360deg)' },
          },
        },
      },
    },
  };
  