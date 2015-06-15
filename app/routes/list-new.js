import { module } from 'angular';

export default angular.module('routes.list-new', [
  require('angular-ui-router'),
  require('../models/list'),
  require('../directives/list-form')
])
.config(($stateProvider) => {
  $stateProvider.state('root.listNew', {
    url: 'lists/new',
    template: require('./list-new.jade'),
    controllerAs: 'listNew',
    controller: class {
      constructor(List) {
        this.list = new List({ items: [ {}, {}, {} ] });
      }
    }
  });
})
.name;
