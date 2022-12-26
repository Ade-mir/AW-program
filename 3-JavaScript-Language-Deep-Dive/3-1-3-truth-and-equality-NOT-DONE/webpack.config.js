var webpack = require("webpack");
var path = require("path");

module.exports = {
  debug: "inline-sourcemaps",

  entry: {
    "3-exercises": "./src/exercises/3-truth-and-equality.js",
    "3-solutions": "./src/solutions/3-truth-and-equality.js"
  },

  output: {
    path: path.join(__dirname, "/public/"),
    publicPath: "/",
    filename: "[name].js",
  },

  module: {
    loaders: [{ test: /\.js$/, loader: "babel" }],
  },
};
