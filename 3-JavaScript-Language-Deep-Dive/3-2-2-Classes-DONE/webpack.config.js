var webpack = require("webpack");
var path = require("path");

module.exports = {
  debug: "inline-sourcemaps",

  entry: {
    "2-exercises": "./src/exercises/2-classes.js",
    "2-solutions": "./src/solutions/2-classes.js"
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
