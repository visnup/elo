const path = require('path');

module.exports = {
  entry: './app',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: process.env.NODE_ENV === 'production' ?
      '[name]-[hash].js' : '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel'
      }
    ]
  }
};
