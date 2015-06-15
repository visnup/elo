import { module } from 'angular';

export default module('routes', [
  require('angular-ui-router'),
  require('./start'),
  require('./list')
])
.config(($locationProvider) => {
  $locationProvider.html5Mode({ enabled: true, requireBase: false });
})
.run(($rootScope, $state) => {
  $rootScope.$state = $state;

  $rootScope.$on('$stateChangeError', (e, to, toParams, from, fromParams, error) => {
    throw error;
  });
})
.name;
