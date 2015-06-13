const path = require('path');

if (process.env.NODE_ENV === 'production') {
  const stats = require('../public/webpack.json');
  module.exports = stats.assets.map(function(asset) {
    return '/' + asset.name;
  });
} else {
  const webpack = require('webpack');
  const Server = require('webpack-dev-server');
  new Server(webpack(require('../webpack.config.js'))).listen(3001);
  module.exports = [
    '//localhost:3001/webpack-dev-server.js',
    '//localhost:3001/bundle.js'
  ];
}

