const path = require('path');

const babelrc = path.resolve('../', '.babelrc');

export default {
  title: '@knack/ui',
  description: 'Knack component library',
  themeConfig: {
    colors: {
      primary: '#3D428B'
    },
  },
  htmlContext: {
    head: {
      links: [{
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Open+Sans:400,600,700'
      }]
    }
  },
  wrapper: path.resolve(__dirname, 'Wrapper.js'),
  menu: ['Motivation', 'Installation', 'Components'],
  codeSandbox: false,
  modifyBundlerConfig: (config) => {
    const clone = { ...config };
    clone.module.rules = config.module.rules.filter((_, index) => index !== 4);
    clone.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            configFile: babelrc
          }
        },
        'react-svg-loader'
      ]
    });
    return clone;
  },
};
