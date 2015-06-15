import { module } from 'angular';

export default angular.module('directives.main', [
  require('./lists'),
  require('../routes')
])
.directive('main', ($mdSidenav) => {
  return {
    template: require('./main.jade'),
    controllerAs: 'main',
    controller: class {
      toggleNav(sidenav) { $mdSidenav(sidenav).toggle() }
    }
  };
})
.name;
