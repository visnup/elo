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

    try {
      this.body = yield new List(this.request.body).save();
    } catch (err) {
      this.status = 422;
      this.body = err;
      this.app.emit('error', err, this);
    }
  }));

  app.use(route.get('/lists/:id', function *(id) {
    this.body = yield List.findById(id);
  }));
};
