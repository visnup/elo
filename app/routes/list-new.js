import { module } from 'angular';
import { every, filter } from 'lodash';

export default angular.module('routes.list-new', [
  require('angular-ui-router'),
  require('../models/list')
])
.config(($stateProvider) => {
  $stateProvider.state('listNew', {
    url: '/lists/new',
    template: require('./list-new.jade'),
    controllerAs: 'listNew',
    controller: class {
      constructor(List, $state, $scope) {
        this.items = [ {}, {}, {} ];
        this.list = new List({ items: this.items });
        this.$state = $state;

        $scope.$watch(() => this.items, this.addItemsIfNeeded.bind(this), true);
      }

      addItemsIfNeeded(items) {
        if (every(this.items, 'name'))
          this.items.push({});
      }

      submit() {
        this.list.items = filter(this.list.items, 'name');
        this.list.$save().then((list) => {
          this.$state.go('list', { id: list._id });
        });
      }
    }
  });
})
.name;
