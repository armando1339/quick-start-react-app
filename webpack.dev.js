const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

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
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    stats: "errors-only",
    port: 8080,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.scss$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader"
        }, {
          loader: "sass-loader"
        }]
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
    new HtmlWebpackPlugin({
      title: 'My app',
      filename: './index.html',
      hash: true,
      chunks: ['vendor', 'commons', 'app'],
      template: './template.html'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendor', 'commons']
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}