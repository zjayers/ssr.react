// --Imports
const path = require('path');
const merge = require('webpack-merge');
const baseConfiguration = require('./webpack.base');

/**
 * Client Side Webpack Configuration
 */
const clientConfiguration = {
    // Setup root file for the server application
    entry: './src/client/index.js',

    // Setup output directory for generated files
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../public'),
    },
};

// Merge the base and client webpack configurations and export the webpack configuration
module.exports = merge(baseConfiguration, clientConfiguration);
