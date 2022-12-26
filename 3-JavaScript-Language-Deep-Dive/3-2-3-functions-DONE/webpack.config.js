var webpack = require('webpack');
var path = require('path');

module.exports = {
  debug: 'inline-sourcemaps',

  entry: {
    '4-exercises': './src/exercises/4-functions.js',
    '4-solutions': './src/solutions/4-functions.js'
  },

  output: {
    path: path.join(__dirname, '/public/'),
    publicPath: '/',
    filename: '[name].js'
  },

  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel' }
    ]
  }
};
