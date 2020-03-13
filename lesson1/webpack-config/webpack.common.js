const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {srcPath} = require('./paths')

module.exports = {
  entry: path.join(srcPath, 'index'),
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: ['babel-loader'],
        include: srcPath,
        exclude: /node_modules/
      },
      {
        test: /\.css/,
        // loader 执行的顺序是从左到右的
        loader: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.less/,
        loader: ['style-loader', 'css-loader', 'less-loader']
      }
    ]
  },
plugins: [
  new HtmlWebpackPlugin({
    template: path.join(srcPath, 'index.html'),
    filename: 'index.html'
  })
]
}
