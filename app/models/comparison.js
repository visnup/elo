import { module } from 'angular';

export default angular.module('models.Comparison', [
  require('./resource')
])
.factory('Comparison', resource => resource('/lists/:id/comparisons', { id: '@list' }))
.name;
