module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  webpackFinal: async (config) => {
    const clone = { ...config };

    clone.module.rules = config.module.rules.filter((_, index) => index !== 8);
    
    clone.module.rules.push({
      test: /\.svg$/,
      exclude: /node_modules/,
      use: [
        'babel-loader',
        {
          loader: 'react-svg-loader',
          options: {
            svgo: {
              plugins: [
                {
                  removeViewBox: false,
                },
              ],
            }
          },
        }
      ]
    });
  
    clone.module.rules.push({
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
    });
  
    return clone;
  }
}