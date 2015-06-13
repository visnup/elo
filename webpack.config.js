const path = require('path');

module.exports = {
  entry: './app',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: process.env.NODE_ENV === 'production' ? 'bundle-[hash].js' : 'bundle.js'
  }
};
