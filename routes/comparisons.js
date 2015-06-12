const route = require('koa-route');

module.exports = function (app) {
  app.use(route.post('/lists/:id/comparisons', function *(id) {
  }));
};
