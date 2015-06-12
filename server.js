const koa = require('koa');
const app = koa();

// Middleware
app.use(require('koa-logger')());
app.use(require('koa-conditional-get')());
app.use(require('koa-etag')());

// Models
require('./models');

// Routes
require('./routes')(app);

app.listen(process.env.PORT || 3000);
