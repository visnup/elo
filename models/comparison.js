const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const ComparisonSchema = module.exports = mongoose.Schema({
  list: { type: ObjectId, ref: 'List' },
  items: [ ObjectId ],  // item
  winner: ObjectId      // item
});
ComparisonSchema.plugin(require('mongoose-timestamp'));

ComparisonSchema.index({ list: 1, items: 1 });

mongoose.model('Comparison', ComparisonSchema);
