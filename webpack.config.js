/*

# webpack config

https://webpack.js.org
https://webpack.js.org/configuration

*/

const path = require("path");
const webpack = require("webpack");
const { NODE_ENV, DB_URL } = process.env;
const env = NODE_ENV;
const prd = env === "production";
const dev = env === "development";
const entryPath = path.join(__dirname, "src", "index.js");
const outputPath = path.join(__dirname, "dist");

const opts = {
  target: "web",
  mode: env,
  entry: entryPath,
  output: {
    path: outputPath,
    filename: "index.js"
  },
  module: {
    rules: [
      {
        test: /\.imba$/,
        loader: "imba/loader"
      },
      {
        test: /\.js$/,
        loader: "babel-loader"
      }
    ]
  },
  resolve: {
    extensions: [".js", ".imba"]
  },
  watch: false,
  cache: dev,
  performance: {
    hints: false
  },
  stats: {
    assets: false,
    colors: dev,
    errors: true,
    errorDetails: true,
    hash: false
  }
};

if (dev === true) {
  opts.devtool = "source-map";
}

module.exports = opts;
