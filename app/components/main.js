import { module } from 'angular';

import lists from './lists';

const name = 'main';
module(name, [lists])
  .directive(name, () => {
    return { template: require(`./${name}.jade`) };
  });
/*
  .config(($stateProvider) => {
    $stateProvider.state('index', {
      url: '', template: require('./index.jade')
    });
  });
 */

export default name;
