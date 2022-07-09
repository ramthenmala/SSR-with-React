const path = require('path')
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');

const config = {
  // Inform webpack we are building a bundle for
  // nodejs, not for browser
  target: 'node',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
};

module.exports = merge(baseConfig, config);