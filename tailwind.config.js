module.exports = {
  purge: {
    content: ['./src/**/*.html', './src/**/*.vue', './src/**/*.js', './src/**/*.postcss'],

    options: {
      // safelist: ['bg-steel-100']
      safelist: [/bg-[a-z]{1,}-100$/, /bg-[a-z]{1,}-300$/, /bg-[a-z]{1,}-400$/]
    },
  },
  darkMode: false,
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
        orange: {
          '50': '#f9f6e6',
          '100': '#faf0c1',
          '200': '#f6e781',
          '250': '#f3dc57',
          '300': '#f1d43d',
          '400': '#ffc83d',
          '500': '#e09707',
          '600': '#cd7304',
          '700': '#ab5608',
          '800': '#8b430e',
          '900': '#703710',
        },
        chocolate: {
          '100': '#f6e9ca',
          '300': '#e9a953',
          '400': '#df8027',
        },
        zinc: {
          '100': '#e4e4e7',
          '300': '#a1a1aa',
          '400': '#3f3f46',
        },
      },
      fontSize: {
        'md': '1rem',
        '2xs': '.7rem',
        '3xs': '.6rem',
        '4xs': '.5rem',
      },
      minWidth: {
        'screen': '100vw'
      }
    },
    backgroundColor: theme => ({
      ...theme('colors'),
    }),
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      boxShadow: ['active'],
    }
  },
  plugins: [],
}
