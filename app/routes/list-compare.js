import { module } from 'angular';
import { sample, pluck } from 'lodash';

export default angular.module('routes.list-compare', [
  require('angular-ui-router'),
  require('angular-marked'),
  require('../models/comparison')
])
.config(($stateProvider) => {
  $stateProvider.state('root.list.compare', {
    url: '/compare',
    template: require('./list-compare.jade'),
    controllerAs: 'listCompare',
    controller: class {
      constructor(list, Comparison) {
        this.list = list;
        this.items = sample(this.list.items, 2);
        this.Comparison = Comparison;
      }

      choose(item) {
        this.Comparison.save({
          list: this.list._id,
          items: pluck(this.items, '_id'),
          winner: item && item._id
        });
        this.items = sample(this.list.items, 2);
      }
    }
  });
})
.name;
