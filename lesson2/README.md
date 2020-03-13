## webpack 高级配置
多入口文件 entry
```js
module.exports = {
  entry: {
    index: path.join(srcPath, 'index'),
    app: path.join(srcPath, 'app')
  },
  // ...
```

打包产出文件 output：
```js
output: {
    filename: '[name].[contentHash:8].js',
    path: distPath
  },
  // ..
```

生成多个的html文件配置：
```js
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
```
