import { module } from 'angular';

export default angular.module('routes', [
  require('angular-ui-router'),
  require('./root'),
  require('./list-new'),
  require('./list'),
  require('./list-edit'),
  require('./list-compare'),
])
.config(($locationProvider) => {
  $locationProvider.html5Mode({ enabled: true, requireBase: false });
})
.run(($rootScope, $state) => {
  $rootScope.$state = $state;

  /*
  $rootScope.$on('$stateChangeSuccess', (e, to, toParams, from, fromParams) => {
    console.log('state', from.name, '>', to.name);
  });
  */

  $rootScope.$on('$stateChangeError', (e, to, toParams, from, fromParams, error) => {
    throw error;
  });
})
.name;
