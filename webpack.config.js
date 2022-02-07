const path = require('path');
const PRODUCTION = process.argv[process.argv.indexOf('--mode') + 1] === 'production';

module.exports = {
    resolve: {
        alias: {
            '@': path.resolve('resources/js'),
        },
    },
    devtool: !PRODUCTION ? "inline-source-map" : false,
};
