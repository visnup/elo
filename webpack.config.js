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
  },
  resolve: {
    extensions: [ '', '.js', '.jsx' ]
  },
  plugins: [
    function() {
      if (process.env.NODE_ENV === 'production')
        this.plugin('done', function(stats) {
          const assets = Object.keys(stats.compilation.assets);
          const manifest = path.join(__dirname, 'public', 'manifest.json');
          require('fs').writeFileSync(manifest, JSON.stringify(assets));
        });
    }
  ]
};
