// --Imports
const path = require('path');
const merge = require('webpack-merge');
const baseConfiguration = require('./webpack.base');
const webpackNodeExternals = require('webpack-node-externals');

/**
 * Server Side Webpack Configuration
 */
const serverConfiguration = {
    // Config Webpack to build a bundle for NodeJS rather than the browser
    target: 'node',

    // Setup root file for the server application
    entry: './src/server/index.js',

    // Setup output directory for generated files
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../dist'),
    },

    // Tell Webpack to not bundle any of the node_modules folders
    // This significantly reduces the size of the server-side webpack bundle and speed up it's execution
    externals: [webpackNodeExternals()],
};

// Merge the base and server webpack configurations and export the webpack configuration
module.exports = merge(baseConfiguration, serverConfiguration);
