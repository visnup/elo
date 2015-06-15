import { module } from 'angular';

export default module('routes.list', [
  require('angular-ui-router'),
  require('../models')
])
.config(($stateProvider) => {
  $stateProvider.state('list', {
    url: '/lists/:id',
    template: require('./list.jade'),
    resolve: {
      list($stateParams, List) {
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
