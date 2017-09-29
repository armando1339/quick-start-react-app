const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const extractCSS = new ExtractTextPlugin('[name]-one.css');
const extractSASS = new ExtractTextPlugin('[name]-two.css');

module.exports = {
  context: path.resolve(__dirname, 'app'),
  entry: { 
    app: './index.js',
    vendor: ['react', 'react-dom']
  },
  output: {
    filename: '[name]-bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: extractCSS.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      {
        test: /\.scss$/,
        use: extractSASS.extract({
          fallback: "style-loader",
          use: ["css-loader", "sass-loader"]
        })
      },
      { 
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][hash].[ext]'
            }  
          }
        ]
      }
    ]
  },
  plugins: [
    extractCSS,
    extractSASS,
    new HtmlWebpackPlugin({
      title: 'Quick Start React App',
      filename: './index.html',
      hash: true,
      chunks: ['vendor', 'commons', 'app'],
      template: './template.html'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendor', 'commons']
    })
  ]
}