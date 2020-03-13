## webpack 如何抽离压缩css文件
```
npm i --save-dev mini-css-extract-plugin
```

```js
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = smart(webpackCommonConf, {
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: [
          MiniCssExtractPlugin.loader, // 不再是 style-loader
          'css-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.less$/,
        loader: [
          MiniCssExtractPlugin.loader,
          'less-loader',
          'postcss-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/main.[contentHash:8].css'
    })
  ]
})
```

压缩css文件
```
npm i terser-webpack-plugin optimize-css-assets-webpack-plugin --save-dev
```
```js
optimization: {
  // 压缩CSS
  minimizer: [
    new TerserJSPlugin({}),
    new OptimizeCssAssetsWebpackPlugin({})
  ]
}
```

