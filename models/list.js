const mongoose = require('mongoose');

const Item = mongoose.model('Item', {
  name: String,
  description: String,
  score: Number
});

const List = mongoose.model('List', {
  name: String,
  description: String,
  items: [ Item ]
});

module.export = List;
