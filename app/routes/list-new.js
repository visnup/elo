import { module } from 'angular';

export default module('routes.list-new', [
  require('angular-ui-router'),
  require('../models')
])
.config(($stateProvider) => {
  $stateProvider.state('listNew', {
    url: '/lists/new',
    template: require('./list-new.jade'),
    controllerAs: 'listNew',
    controller: class {
      constructor(List, $state) {
        this.list = new List;
        this.$state = $state;
      }

      submit() {
        this.list.$save().then((list) => {
          this.$state.go('list', { id: list._id });
        });
      }
    }
  });
})
.name;
