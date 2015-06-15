import { module } from 'angular';

export default angular.module('models.List', [
  require('./resource')
])
.factory('List', resource => resource('/lists/:id', { id: '@_id' }))
.name;
