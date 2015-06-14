import { module } from 'angular';
import models from '../models';

const name = 'lists';
module(name, [])
  .directive(name, () => {
    return {
      template: require(`./${name}.jade`),
      link(scope) {
      }
    };
  });

export default name;
