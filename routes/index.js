const route = require('koa-route');
const webpack = process.env.NODE_ENV === 'production' ?
  require('../public/webpack.json') :
  { assets: [ { name: 'http://localhost:8080/webpack-dev-server.js' },
              { name: 'http://localhost:8080/bundle.js' } ] };

module.exports = function(app) {
  app.use(require('koa-views')({ default: 'jade' }));

  app.use(function *(next) {
    switch (this.accepts('json', 'html')) {
      case 'json':
        yield next;
        break;
      case 'html':
        yield this.render('index', { webpack: webpack });
        break;
      default:
        this.throw(406);
    }
  });

  app.use(require('koa-body')());

  [ './lists', './comparisons' ].forEach(function(file) {
    require(file)(app);
  });
};
