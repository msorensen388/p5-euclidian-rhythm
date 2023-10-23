const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
require('@babel/register');

const config = {
  entry: ['@babel/polyfill', './src/index.js'],
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  module: {
    rules : [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'static' }
      ]
    })
  ],
  resolve: {
    modules: [
      path.resolve('./src'),
      path.resolve('./node_modules'),
      path.resolve('../../node_modules')
    ]
  },
  devServer: {
    static: path.join(__dirname, 'public'),
    compress: true,
    port: 3000,
    open: true,
    devMiddleware: {
      writeToDisk: true,
    },
  },
  // watch: false,
  devtool: 'source-map',
};

module.exports = config;
