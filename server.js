const koa = require('koa');
const app = koa();

// Logging
app.use(require('koa-logger')());
app.use(require('koa-conditional-get')());
app.use(require('koa-etag')());

// Models

// Routes
const route = require('koa-route');

app.use(require('koa-views')({ default: 'jade' }));

app.use(function *(next) {
  switch (this.accepts('json', 'html')) {
    case 'json':
      yield next;
      break;
    case 'html':
      yield this.render('index');
      break;
    default:
      this.throw(406);
  }
});

app.use(route.get('/lists', function *() {
  this.body = [];
}));

app.use(route.post('/lists', function *() {
}));

app.use(route.get('/lists/:id', function *() {
}));

app.use(route.post('/lists/:id/comparisons', function *() {
}));

app.listen(process.env.PORT || 3000);
