var webpack = require("webpack");
var path = require("path");

module.exports = {
  debug: "inline-sourcemaps",

  entry: {
    "1-exercises": "./src/exercises/1-basic-syntax.js",
    "1-solutions": "./src/solutions/1-basic-syntax.js"
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
