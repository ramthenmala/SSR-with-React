const path = require('path');
const WebpackMerge = require('webpack-merge');
const CommonConfig = require('./webpack.base.js');

const clientConfig = {
    entry: './src/client/client.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
}

module.exports = WebpackMerge(CommonConfig, clientConfig);