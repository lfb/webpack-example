const webpack = require('webpack')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const webpackCommonConf = require('./webpack.common.js')
const {smart} = require('webpack-merge')
const {distPath, srcPath} = require('./paths')

console.log(`distPath = ${distPath}`)
console.log(`srcPath = ${srcPath}`)
module.exports = smart(webpackCommonConf, {
  mode: 'production',
  output: {
    filename: '[name].[contentHash:8].js',
    path: distPath
    // publicPath: 'http://cdn.boblog.com' // 修改所有静态文件的 url 的前缀（如cdn域名）
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 5 * 1024,
            outputPath: './images/'
            // 设置图片的 cdn 地址
            // publicPath: 'http://cdn.abc.com'
          }
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      ENV: JSON.stringify('production')
    })
  ]
})
