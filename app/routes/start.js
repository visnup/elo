import { module } from 'angular';

export default module('routes.start', [
  require('angular-ui-router')
])
.config(($stateProvider) => {
  $stateProvider.state('start', {
    url: '',
    template: require('./start.jade')
  });
})
.name;
