const mongoose = require('mongoose');

const ItemSchema = mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  score: Number
});

const ListSchema = module.exports = mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  items: [ ItemSchema ]
});

mongoose.model('List', ListSchema);
