import { module } from 'angular';
import { remove } from 'lodash';

export default angular.module('routes.list', [
  require('angular-ui-router'),
  require('angular-marked'),
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
      constructor(list, lists, $state, $mdDialog, $mdToast) {
        this.list = list;
        this.lists = lists;

        this.$state = $state;
        this.$mdDialog = $mdDialog;
        this.$mdToast = $mdToast;
      }

      confirmDelete(event) {
        const confirm = this.$mdDialog.confirm()
          .title(`Delete ${this.list.name}?`)
          .ok('Delete')
          .cancel('Cancel')
          .targetEvent(event);
        this.$mdDialog.show(confirm).then(() => this.delete());
      }

      delete() {
        this.$mdToast.showSimple('Deleting…');
        this.list.$delete().then(() => {
          remove(this.lists, { _id: this.list._id });
          this.$state.go('root');
          this.$mdToast.updateContent('Deleted');
        }, (response) => {
          this.$mdToast.showSimple(`Error: ${response.data.message || response.data}`);
        });
      }
    }
  });
})
.name;
