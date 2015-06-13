const path = require('path');

module.exports = {
  entry: './app',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: process.env.NODE_ENV === 'production' ?
      '[name]-[hash].js' : '[name].js'
  }
};
