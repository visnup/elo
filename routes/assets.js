const path = require('path');

if (process.env.NODE_ENV === 'production') {
  module.exports = require('../public/manifest.json').map(asset => `/${asset}`);
} else {
  const compiler = require('webpack')(require('../webpack.config.js'));
  const Server = require('webpack-dev-server');
  new Server(compiler).listen(3001);

  module.exports = [
    '//localhost:3001/webpack-dev-server.js',
    '//localhost:3001/main.js'
  ];
}
