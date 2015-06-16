const _ = require('lodash');
const route = require('koa-route');
const mongoose = require('mongoose');
const List = mongoose.model('List');

module.exports = function (app) {
  // GET /lists
  app.use(route.get('/lists', function *index() {
    this.body = yield List.find().sort('-_id');
  }));

  // POST /lists
  app.use(route.post('/lists', function *create() {
    delete this.request.body.id;
    delete this.request.body._id;
    this.request.body.items = _.filter(this.request.body.items, 'name');

    this.status = 201;
    this.body = yield new List(this.request.body).save();
  }));

  // GET /lists/:id
  app.use(route.get('/lists/:id', function *show(id) {
    this.body = yield List.findById(id);
    if (!this.body) this.throw(404);
  }));

  // PUT /lists/:id
  app.use(route.put('/lists/:id', function *update(id) {
    const list = yield List.findById(id);
    if (!list) this.throw(404);

    delete this.request.body.id;
    delete this.request.body._id;
    this.request.body.items = _.filter(this.request.body.items, 'name');

    _.forOwn(this.request.body, (value, key) => {
      if (key[0] !== '_')
        list[key] = value;
    });

    this.body = yield list.save();
  }));
};
