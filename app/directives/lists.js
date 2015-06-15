import { module } from 'angular';

export default module('directives.lists', [
  require('../models/list')
])
.directive('lists', (List) => {
  return {
    template: require('./lists.jade'),
    link(scope) { scope.lists = List.query() }
  };
}).name;
