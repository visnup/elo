import { module } from 'angular';
import { findIndex } from 'lodash';

export default angular.module('routes.list-edit', [
  require('angular-ui-router'),
  require('../directives/list-form')
])
.config(($stateProvider) => {
  $stateProvider.state('root.list.edit', {
    url: '/edit',
    template: require('./list-edit.jade'),
    controllerAs: 'listEdit',
    controller: class {
      constructor(list, $scope, $state) {
        this.list = list;
        this.lists = $scope.root.lists;
        this.$state = $state;
      }

      submit() {
        this.lists[findIndex(this.lists, { _id: this.list._id })] = this.list;
        this.$state.go('^');
      }
    }
  });
})
.name;
