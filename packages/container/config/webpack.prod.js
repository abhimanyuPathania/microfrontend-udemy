const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const packageJson = require("../package.json");

// Domain on which the entire application is hosted. Currently the Cloudfront domain.
const PRODUCTION_DOMAIN = process.env.PRODUCTION_DOMAIN;
console.log(">>>>>>>>>>>>> PRODUCTION_DOMAIN", PRODUCTION_DOMAIN);
console.log(`marketing@${PRODUCTION_DOMAIN}/marketing/latest/remoteEntry.js`);
const prodConfig = {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
    publicPath: "/container/latest/",
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        marketing: `marketing@${PRODUCTION_DOMAIN}/marketing/latest/remoteEntry.js`,
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
