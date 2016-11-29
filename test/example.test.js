const {join} = require('path');
const opts = require(join(__dirname, '../wdio.conf'));
const Launcher = require(join(__dirname, '../config/webdriverio.runner'));
const wdio = new Launcher(opts.config);

wdio.run().then(function (code) {
    console.log('Launcher started successfully.');
    process.exit(code);
}, function (error) {
    console.error('Launcher failed to start the test', error.stacktrace);
    process.exit(1);
});