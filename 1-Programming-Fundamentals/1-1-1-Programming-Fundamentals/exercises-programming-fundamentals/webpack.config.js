var webpack = require("webpack");
var path = require("path");

module.exports = {
  debug: "inline-sourcemaps",

  entry: {
    "0-exercises": "./src/exercises/0.js",
    "0-solutions": "./src/solutions/0.js",
  },

  output: {
    path: path.join(__dirname, "/public/"),
    publicPath: "/",
    filename: "[name].js"
  },

  module: {
    loaders: [{ test: /\.js$/, loader: "babel" }]
  }
};
