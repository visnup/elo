import { module } from 'angular';

export default angular.module('routes.root', [
  require('angular-ui-router'),
  require('angular-marked'),
  require('../models/list')
])
.config(($stateProvider) => {
  $stateProvider.state('root', {
    url: '/',
    template: require('./root.jade'),
    resolve: {
      lists(List) {
        return List.query().$promise;
      }
    },
    controllerAs: 'root',
    controller: class {
      constructor(lists, $mdSidenav) {
        this.lists = lists;
        this.$mdSidenav = $mdSidenav;
      }

      toggleNav(sidenav) { this.$mdSidenav(sidenav).toggle() }
    }
  });
})
.name;
