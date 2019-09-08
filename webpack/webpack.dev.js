/* eslint-disable */
const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    // rules: [
    //   {
    //     test: /\.(tsx?)|(jsx?)$/,
    //     exclude: /node_modules/,
    //     use: [
    //       'react-docgen-typescript-loader'
    //     ]
    //   },
    // ]
  }
});
