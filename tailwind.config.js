const theme = {
  extend: {
    screens: {
      sm: '550px',
      md: '768px',
      lg: '1024px',
    },
    colors: {
      'yellow': '#FFCB05',
      'gray-dark': '#1E1E1E',
      'beish': '#FFFFEE',
      'gray': '#CCCCCC',
      'orange': '#FF7D05',
      'beish2': '#FBEAD9',
      'white': '#FFFFFF',
      'green': '#08AD05',
    },
    height: {
      '11/12': '95%',
    },
    fontWeight: {
      w100: 100,
      w200: 200,
      w300: 300,
      w400: 400,
      w500: 500,
      w600: 600,
      w700: 700,
      w800: 800,
      w900: 900,
    },
    fontSize: {
      8: ['0.5rem', '1rem'],
      10: ['0.625rem', '1rem'],
      11: ['0.6875rem', '1rem'],
      12: ['0.75rem', '1rem'],
      14: ['0.875rem', '1.25rem'],
      15: ['0.9375rem', '1.25rem'],
      16: ['1rem', '1.5rem'],
      18: ['1.125rem', '1.75rem'],
      20: ['1.25rem', '1.75rem'],
      21: ['1.3125rem', '1.75rem'],
      24: ['1.5rem', '2rem'],
      28: ['1.75rem', '2.25rem'],
      30: ['1.875rem', '2.25rem'],
      36: ['2.25rem', '2.5rem'],
      48: ['3rem', '1'],
      60: ['3.75rem', '1'],
      64: ['4rem', '1'],
      72: ['4.5rem', '1'],
      96: ['6rem', '1'],
      128: ['8rem', '1'],
    },
    borderWidth: {
      DEFAULT: '1px',
      0: '0',
      0.5: '0.5px',
      2: '2px',
      3: '3px',
      4: '4px',
      6: '6px',
      8: '8px',
    },
    extend: {
      minWidth: {
        1: '1rem',
        2: '2rem',
        3: '3rem',
        4: '4rem',
        5: '5rem',
        6: '6rem',
        7: '7rem',
        8: '8rem',
        9: '9rem',
        10: '10rem',
        11: '11rem',
        15: '15rem',
        20: '20rem',
        25: '25rem',
        30: '30rem',
      },
    },
  }
};


module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme,
  plugins: [],
  safelist: [
    ...Object.keys(theme.extend.colors).map(color => `bg-${color}`),
    ...Object.keys(theme.extend.colors).map(color => `bg-${color}/10`),
    ...Object.keys(theme.extend.colors).map(color => `text-${color}`),
    ...Object.keys(theme.extend.colors).map(color => `border-${color}`),
    ...Object.keys(theme.extend.colors).map(color => `fill-${color}`),
    ...Object.keys(theme.extend.colors).map(color => `stroke-${color}`),
    ...Object.keys(theme.extend.colors).map(color => `[&_*]:stroke-${color}`),
    ...Object.keys(theme.extend.colors).map(color => `[&_*]:fill-${color}`)
  ]
}

