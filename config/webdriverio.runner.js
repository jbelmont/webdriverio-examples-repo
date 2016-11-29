const {
    join,
    dirname
} = require('path');
require(join(dirname(resolve.sync('webdriverio')), 'lib/launcher'));