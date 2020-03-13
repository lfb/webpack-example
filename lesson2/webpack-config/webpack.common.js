const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {srcPath} = require('./paths')

module.exports = {
  entry: {
    index: path.join(srcPath, 'index'),
    app: path.join(srcPath, 'app')
  },
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
      filename: 'index.html',
      // 引入哪个 js 文件，如果不写，都会引入
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      template: path.join(srcPath, 'app.html'),
      filename: 'app.html',
      chunks: ['app']
    })
  ]
}
