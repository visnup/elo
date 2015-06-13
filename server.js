const path = require('path');
const koa = require('koa');
const app = koa();

// Models
require('./models');

// Middleware
app.use(require('koa-conditional-get')());
app.use(require('koa-etag')());
app.use(require('koa-static-cache')(path.join(__dirname, 'public'), {
  maxAge: 365 * 24 * 60 * 60  // 1y
}));
app.use(require('koa-logger')());

// Routes
require('./routes')(app);

app.listen(process.env.PORT || 3000);
