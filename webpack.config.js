const path = require('path');
const isProduction = process.env.NODE_ENV === 'production';

module.exports = {

  devtool: 'source-map',

  entry: './app',

  output: {
    path: path.resolve(__dirname, 'public'),
    filename: isProduction ? '[name]-[hash].js' : '[name].js'
  },

  module: {
    loaders: [
      { test: /\.js$/, loader: 'ng-annotate!babel', exclude: /node_modules/ },
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.styl$/, loader: 'style!css!stylus' },
      { test: /\.jade$/, loader: 'jade' },
      //{ test: /\.(woff2?|ttf|eot)$/, loader: 'url' },
      //{ test: /\.svg$/, loader: 'url' }
    ]
  },

  resolve: {
    extensions: [ '', '.js' ]
  },

  plugins: [
    function() {
      if (isProduction)
        this.plugin('done', function(stats) {
          const assets = Object.keys(stats.compilation.assets);
          const manifest = path.join(__dirname, 'public', 'manifest.json');
          require('fs').writeFileSync(manifest, JSON.stringify(assets));
        });
    }
  ]

};
