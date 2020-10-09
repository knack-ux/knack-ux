/* eslint-disable */
const path = require('path');
const glob = require('glob');

const nodeExternals = require('webpack-node-externals');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const outputPath = path.resolve('./lib');
// const entry = path.resolve('src');

const entry = glob
    .sync("src/*.tsx")
    .reduce((acc, curr) => {
        const filename = path.parse(curr).base.split('.')[0];
        return {
          ...acc,
          [filename]: path.resolve(curr)
        }
    }, {})

module.exports = {
  resolve: {
    extensions: [
      '.ts', '.tsx', '.js', '.jsx', '.json'
    ]
  },
  entry,
  output: {
    filename: "[name].js",
    path: outputPath,
    publicPath: '/',
    library: ['knack-ux', '[name]'],
    libraryTarget: 'umd'
  },
  externals: [
    nodeExternals({
      modulesFromFile: {
        include: ['dependencies', 'peerDependencies']
      }
    })
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          'ts-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              mimetype: 'image/png',
              name: 'images/[name].[ext]',
            }
          }
        ],
      },
      {
        test: /\.svg$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          {
            loader: 'react-svg-loader',
            options: {
              svgo: {
                plugins: [
                  {removeViewBox: false}
                ]
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    // new ForkTsCheckerWebpackPlugin(),
    // new BundleAnalyzerPlugin()
  ]
};
