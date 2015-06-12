const route = require('koa-route');
const mongoose = require('mongoose');
const List = mongoose.model('List');

module.exports = function (app) {
  app.use(route.get('/lists', function *() {
    this.body = yield List.find();
  }));

  app.use(route.post('/lists', function *() {
    delete this.request.body.id;
    delete this.request.body._id;
    this.body = yield new List(this.request.body).save();
  }));

  app.use(route.get('/lists/:id', function *(id) {
    this.body = yield List.findById(id);
  }));
};
