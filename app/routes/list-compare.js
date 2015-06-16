import { module } from 'angular';

export default angular.module('routes.list-edit', [
  require('angular-ui-router')
])
.config(($stateProvider) => {
  $stateProvider.state('root.list.compare', {
    url: '/edit',
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
