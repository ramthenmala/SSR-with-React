const path = require('path')
const WebpackMerge = require('webpack-merge')
const CommonConfig = require('./webpack.base.js')

const serverConfig = {
    target: 'node',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
}

module.exports = WebpackMerge(serverConfig, CommonConfig);