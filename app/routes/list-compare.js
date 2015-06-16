import { module } from 'angular';
import { sample } from 'lodash';

export default angular.module('routes.list-compare', [
  require('angular-ui-router'),
  require('angular-marked')
])
.config(($stateProvider) => {
  $stateProvider.state('root.list.compare', {
    url: '/compare',
    template: require('./list-compare.jade'),
    controllerAs: 'listCompare',
    controller: class {
      constructor(list, $state) {
        this.list = list;
        this.items = sample(this.list.items, 2);
        this.$state = $state;
      }

      choose(item) {
        console.log(item);
        this.items = sample(this.list.items, 2);
      }
    }
  });
})
.name;
