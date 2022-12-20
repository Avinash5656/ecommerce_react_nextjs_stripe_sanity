import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

import product from './product';
import banner from './banner';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([ product, banner ]),
})
// use index.js file
// this is outdated i have created it, manually because it was in the video you should use index.js to import and create scema