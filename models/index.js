const mongoose = require('mongoose');
mongoose.set('debug', process.env.NODE_ENV === 'development');

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/elo_development');

require('./list');
require('./comparison');
