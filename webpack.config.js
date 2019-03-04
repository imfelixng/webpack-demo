const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devServer:{
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000,
    },
    stats: "errors-only",
    host: process.env.HOST,
    port: process.env.PORT,
    open: true,
    overlay: true,
  },
  plugins: [
      new HtmlWebpackPlugin({
        title: 'Webpack demo'
      }),
      new webpack.WatchIgnorePlugin([
        path.join(__dirname, "node_modules")
      ])
  ]
}