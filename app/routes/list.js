import { module } from 'angular';

export default angular.module('routes.list', [
  require('angular-ui-router'),
  require('../models/list')
])
.config(($stateProvider) => {
  $stateProvider.state('root.list', {
    url: 'lists/:id',
    template: require('./list.jade'),
    resolve: {
      list($stateParams, List) {
        if ($stateParams.id)
          return List.get({ id: $stateParams.id }).$promise;
      }
    },
    controllerAs: 'list',
    controller: class {
      constructor(list) {
        this.list = list;
      }
    }
  });
})
.name;
