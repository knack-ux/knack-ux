/* eslint-disable */
const path = require('path');
const glob = require('glob');

const nodeExternals = require('webpack-node-externals');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const outputPath = path.resolve('./lib');
// const entry = path.resolve('src');
const babelrc = path.resolve('../../', '.babelrc');
const tsconfig = path.resolve('./tsconfig.json');

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
    library: ['knack', '[name]'],
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
        test: /\.(tsx?)|(jsx?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              configFile: babelrc
            }
          },
          {
            loader: 'ts-loader',
            options: {
              configFile: tsconfig
            }
          }
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
          {
            loader: 'babel-loader',
            options: {
              configFile: babelrc
            }
          },
          'react-svg-loader'
        ]
      }
    ]
  },
  plugins: [
    // new BundleAnalyzerPlugin()
  ]
};
