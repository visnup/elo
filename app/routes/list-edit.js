import { module } from 'angular';

export default angular.module('routes.list-edit', [
  require('angular-ui-router'),
  require('../models/list'),
  require('../directives/list-form')
])
.config(($stateProvider) => {
  $stateProvider.state('root.list.edit', {
    url: '/edit',
    template: require('./list-edit.jade'),
    controllerAs: 'listEdit',
    controller: class {
      constructor(list) {
        this.list = this;
      }
    }
  });
})
.name;
