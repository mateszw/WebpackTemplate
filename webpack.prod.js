const path = require("path");
const common = require("./webpack.config");
const add = require("webpack-merge");

module.exports = add(common, {
  mode: "production",
  output: {
    filename: "main.[contentHash].js",
    path: path.resolve(__dirname, "dist")
  }
});
