import { module } from 'angular';
import { every } from 'lodash';

export default angular.module('directives.list-form', [
  require('angular-material')
])
.directive('listForm', ($mdToast) => {
  return {
    scope: {
      list: '=',
      onSubmit: '&'
    },
    template: require('./list-form.jade'),
    controllerAs: 'listForm',
    controller: class {
      constructor($scope) {
        this.list = $scope.list;
        this.onSubmit = $scope.onSubmit;
        this.items = this.list.items;

        $scope.$watch(() => this.items, this.addItemsIfNeeded.bind(this), true);
      }

      addItemsIfNeeded(items) {
        if (every(this.items, 'name'))
          this.items.push({});
      }

      submit() {
        $mdToast.showSimple('Saving…');

        this.list.$save().then((response) => {
          this.onSubmit();
          $mdToast.updateContent('Saved');
        }, (response) => {
          $mdToast.showSimple(`Error: ${response.data.message || response.data}`);
        });
      }
    }
  };
})
.name;
