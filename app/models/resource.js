import { module } from 'angular';

export default angular.module('models.resource', [
  require('angular-resource')
])
.factory('resource', ($resource) => {
  return (url, params, methods) => {
    const defaults = {
      update: { method: 'put', isArray: false },
      create: { method: 'post' }
    };

    methods = angular.extend(defaults, methods);

    const resource = $resource(url, params, methods);

    resource.prototype.$save = function() {
      if ( !this._id ) {
        return this.$create.apply(this, arguments);
      } else {
        return this.$update.apply(this, arguments);
      }
    };

    return resource;
  };
})
.name;
