const mongoose = require('mongoose');

const ItemSchema = mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  score: { type: Number, default: 1000 }
});

const ListSchema = module.exports = mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  items: [ ItemSchema ]
});
ListSchema.plugin(require('mongoose-timestamp'));

mongoose.model('List', ListSchema);
