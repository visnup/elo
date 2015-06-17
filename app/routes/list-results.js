import { module } from 'angular';

export default angular.module('routes.list-results', [
  require('angular-ui-router'),
  require('angular-marked')
])
.config(($stateProvider) => {
  $stateProvider.state('root.list.results', {
    url: '/results',
    template: require('./list-results.jade'),
    controllerAs: 'listResults',
    controller: class {
      constructor(list) {
        this.list = list;
        this.list.$get();
      }
    }
  });
})
.name;
