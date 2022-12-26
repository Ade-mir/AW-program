var webpack = require('webpack');
var path = require('path');

module.exports = {
  debug: 'inline-sourcemaps',

  entry: {
    '3-exercises': './src/exercises/3-composition.js',
    '3-solutions': './src/solutions/3-composition.js'
  },

  output: {
    path: path.join(__dirname, '/public/'),
    publicPath: '/',
    filename: '[name].js'
  },

  plugins: [
    new webpack.OldWatchingPlugin()
  ],

  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel', exclude: /(node_modules|bower_components)/ }
    ]
  }
};
