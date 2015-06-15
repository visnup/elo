import { module } from 'angular';
import { every } from 'lodash';

export default angular.module('directives.list-form', [
  require('angular-ui-router'),
  require('../models/list')
])
.directive('listForm', (List) => {
  return {
    scope: { list: '=' },
    template: require('./list-form.jade'),
    controllerAs: 'listForm',
    controller: class {
      constructor(List, $state, $scope) {
        this.list = $scope.list;
        this.$state = $state;
        this.items = this.list.items;

        $scope.$watch(() => this.items, this.addItemsIfNeeded.bind(this), true);
      }

      addItemsIfNeeded(items) {
        if (every(this.items, 'name'))
          this.items.push({});
      }

      submit() {
        this.list.$save().then((list) => {
          this.$state.go('list', { id: list._id });
        });
      }
    }
  };
})
.name;
