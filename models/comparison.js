const _ = require('lodash');
const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const ComparisonSchema = module.exports = mongoose.Schema({
  list: { type: ObjectId, ref: 'List' },
  items: [ ObjectId ],  // item
  winner: ObjectId      // item
});
ComparisonSchema.plugin(require('mongoose-timestamp'));

ComparisonSchema.index({ list: 1, items: 1 });

ComparisonSchema.post('save', function(comparison) {
  comparison.populate('list', function(err, comparison) {
    if (err) return;

    const list = comparison.list;
    const items = comparison.items;
    const winner = comparison.winner;

    _.forEach(items, function(id, i) {
      const item = list.items.id(id);
      const other = list.items.id(i === 0 ? items[1] : items[0]);
      item.expected = item.expectedScore(other);
      item.actual = winner ? (winner.equals(id) ? 1 : 0) : 0.5;
    });
    _.forEach(list.items, function(item) {
      if ('actual' in item) {
        const rating = item.rating;
        item.rating = item.rating + 32 * (item.actual - item.expected);
        console.log(item.name, rating, item.rating, item.expected, item.actual);
      }
    });

    list.save();
  });
});

mongoose.model('Comparison', ComparisonSchema);
