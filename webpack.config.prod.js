const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  stats: {
    colors: true,
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json', '.coffee'],
    root: [
      path.resolve('./src')
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false
    }),
    new HtmlWebpackPlugin({
      inject: true,
      title: 'test',
      targetId: 'root',
      template: './template.ejs'
    })
  ]
};
