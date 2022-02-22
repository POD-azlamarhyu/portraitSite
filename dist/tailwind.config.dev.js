"use strict";

module.exports = {
  mode: 'jit',
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        '84': '336px',
        '88': '352px',
        '100': '28rem',
        '104': '400px',
        '108': '416px',
        '112': '432px'
      }
    }
  },
  plugins: []
};