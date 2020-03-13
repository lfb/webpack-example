## webpack 如何抽离公共代码和第三方代码 
- 抽离公共代码
```js
// 代码分割
splitChunks: {
      /* initial 入口chunk不管异步 async 只管异步 all */
      chunks: 'all',
      cacheGroups: {
        // 第三方模块
        vendor: {
          name: 'vendor', // chunk 名称
          priority: 1, // 权限更高，有限抽离
          test: /node_modules/,
          minSize: 0, // 大小限制
          minChunks: 1 // 最少复用过几次
        },
        // 公共模块
        common: {
          name: 'common',
          priority: 0,
          minSize: 0, // 大小限制
          minChunks: 2 // 最少复用过几次
        }
      }
    }
```

```
plugins: [
    new HtmlWebpackPlugin({
      template: path.join(srcPath, 'index.html'),
      filename: 'index.html',
      // 引入哪个 js 文件，如果不写，都会引入
      chunks: ['index', 'vendor', 'common']
    }),
    new HtmlWebpackPlugin({
      template: path.join(srcPath, 'app.html'),
      filename: 'app.html',
      chunks: ['app', 'common']
    })
  ]
}
```
