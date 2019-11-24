/* eslint-disable */
const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(tsx?)|(jsx?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'react-docgen-typescript-loader',
            options: {
              propFilter: (prop) => {
                if (prop.parent) {
                  return !prop.parent.fileName.includes('node_modules');
                }
                
                return true;
              }
            }
          }
        ]
      }
    ]
  }
});
