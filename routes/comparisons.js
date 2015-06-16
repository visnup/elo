const route = require('koa-route');
const Comparison = require('mongoose').model('Comparison');

module.exports = function (app) {
  // POST /lists/:id/comparisons
  app.use(route.post('/lists/:id/comparisons', function *(id) {
    this.request.body.list = id;
    this.status = 201;
    this.body = yield Comparison.create(this.request.body);
  }));
};
