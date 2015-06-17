const mongoose = require('mongoose');

const ItemSchema = mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  rating: { type: Number, default: 1200 }
});

ItemSchema.methods.expectedScore = function(other) {
  return 1 / (1 + Math.pow(10, (other.rating - this.rating)/400));
};

const ListSchema = module.exports = mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  items: [ ItemSchema ]
});
ListSchema.plugin(require('mongoose-timestamp'));

mongoose.model('List', ListSchema);
