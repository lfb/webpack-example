const webpack = require('webpack')
const webpackCommonConf = require('./webpack.common.js')
const {smart} = require('webpack-merge')
const {distPath} = require('./paths')

module.exports = smart(webpackCommonConf, {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: 'file-loader'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      ENV: JSON.stringify('development')
    })
  ],
  devServer: {
    port: 8080,
    progress: true, // 显示打包进度条
    contentBase: distPath, // 根目录
    open: true, // 自动打开浏览器
    compress: true, // 启动 gzip 压缩
    // 设置代理
    proxy: {
      // 将本地 /api/xx 代理到 localhost:3000/api/xx
      '/api': 'http://localhost:3000',
      // 将本地 /api2/xx 代理到 localhost:3000/api/xx
      '/api2': {
        target: 'https://localhost:3000',
        pathRewrite: {
          '/api2': ''
        }
      }
    }
  }
})
