import { module } from 'angular';
import { pull } from 'lodash';

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
      constructor(List, $scope, $state) {
        this.list = new List({ items: [ {}, {}, {} ] });
        this.lists = $scope.root.lists;
        this.$state = $state;

        this.lists.unshift(this.list);

        $scope.$on('$destroy', () => {
          if (!this.list._id)
            pull(this.lists, this.list);
        });
      }

      submit() {
        this.$state.go('^.list', { id: this.list._id });
      }
    }
  });
})
.name;
