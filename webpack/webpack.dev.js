/* eslint-disable */
const { merge } = require('webpack-merge');
const path = require('path');

const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: path.resolve('./src'),
        use: [
          {
            loader: 'react-docgen-typescript-loader',
            options: {
              tsconfigPath: path.resolve('./tsconfig.json'),
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
      },
    ]
  }
});
