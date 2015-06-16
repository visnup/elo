import { module } from 'angular';

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
        this.$state = $state;
      }
    }
  });
})
.name;
