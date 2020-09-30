/* eslint-disable */
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  watch: true,
  module: {
    rules: [
      {
        test: /\.(tsx?)|(jsx?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'react-docgen-typescript-loader',
            options: {
              propFilter: prop => {
                // Currently not working, prop.parent is always null.
                if (prop.parent) {
                  return !prop.parent.fileName.includes('node_modules/@types/react/') && !prop.parent.fileName.includes('node_modules/framer-motion/');
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
