const {sync} = require('resolve');
const {
    join,
    dirname,
    resolve
} = require('path');
require(join(dirname(sync('webdriverio')), 'lib/launcher'));