/**
 * Base Webpack Configuration
 * Merges with Server / Client Webpack configurations with webpack-merge
 */
module.exports = {
    // Auto-resolve file extensions
    resolve: {
        extensions: ['.js', '.jsx'],
    },

    // Run Babel on every js|jsx file in the project
    module: {
        rules: [
            {
                test: /\.js|jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        'react',
                        'stage-0',
                        [
                            'env',
                            {
                                targets: {
                                    browsers: ['last 2 versions'],
                                },
                            },
                        ],
                    ],
                },
            },
        ],
    },
};
