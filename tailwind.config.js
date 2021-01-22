module.exports = {
  purge: ['./src/**/*.html', './src/**/*.vue', './src/**/*.js', './src/**/*.postcss'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        steel: {
          '50': '#f8fafa',
          '100': '#f2f6f7',
          '200': '#e1e9ed',
          '300': '#cbd4e1',
          '400': '#a3afcc',
          '500': '#7687b0',
          '600': '#526488',
          '700': '#424b6c',
          '800': '#333a51',
          '900': '#282e3f',
        },
      },
      fontSize: {
        'xxxs': '.6rem',
        'xxs': '.7rem'
      },
      minWidth: {
        'screen': '100vw'
      },
      screens: {
        'portrait': { 'raw': '(orientation: portrait)' },
      },
    },
    backgroundColor: theme => ({
      ...theme('colors'),
    }),
  },
  variants: {
  },
  plugins: [],
}
