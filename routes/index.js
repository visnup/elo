const route = require('koa-route');
const assets = require('./assets');

module.exports = function(app) {
  app.use(require('koa-views')({ default: 'jade' }));

  app.use(function *(next) {
    try {
      yield next;
    } catch (err) {
      if (err.name !== 'ValidationError')
        throw err;
      this.status = 422;
      this.body = err;
      this.app.emit('error', err, this);
    }
  });

  app.use(function *(next) {
    switch (this.accepts('json', 'html')) {
      case 'json':
        yield next;
        break;
      case 'html':
        yield this.render('index', { assets: assets });
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
