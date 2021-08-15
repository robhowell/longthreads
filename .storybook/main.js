const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  webpackFinal: async (config, {configType}) => {
    const tsPlugin = new TsconfigPathsPlugin({
      configFile: path.resolve(__dirname, '../tsconfig.json')
    })

    if (config.resolve.plugins) {
      config.resolve.plugins.push(tsPlugin);
    } else {
      config.resolve.plugins = [tsPlugin];
    }

    return config;
  },
}