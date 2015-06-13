const path = require('path');
const koa = require('koa');
const app = koa();

// Models
require('./models');

// Middleware
app.use(require('koa-conditional-get')());
app.use(require('koa-etag')());
app.use(require('koa-static')(path.resolve(__dirname, 'public'), { maxage: 31536000 }));
app.use(require('koa-logger')());

// Routes
require('./routes')(app);

app.listen(process.env.PORT || 3000);
