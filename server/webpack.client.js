const path = require('path');
const WebpackMerge = require('webpack-merge');
const CommonConfig = require('./webpack.base.js');

const clientConfig = {
    entry: './src/client/client.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        'react',
                        'stage-0',
                        ['env', { targets: { browsers: ['last 2 versions'] } }]
                    ]
                }
            }
        ]
    }
}

module.exports = WebpackMerge(CommonConfig, clientConfig);