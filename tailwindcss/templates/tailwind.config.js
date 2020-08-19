module.exports = {
    purge: [
        './src/**/*.html',
        './src/**/*.md',
        './src/**/*.svg',
        './src/**/*.js',
        './src/**/*.php',
    ],
    theme: {
      extend: {
        zIndex: {
          '-1': '-1',
        },
      },
    },
    variants: {},
    plugins: [
    ],
  }
