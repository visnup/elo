import { module } from 'angular';

const name = 'models.List';
module(name, [
  require('angular-resource')
])
.factory('List', $resource => $resource('/lists/:id', { id: '@_id' }));

export default name;
