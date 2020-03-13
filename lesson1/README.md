## webpack
webpack 已是前端打包构建的不二选择。
- 基本配置
- 高级配置
- 优化打包效率
- 优化产出代码
- 构建流程概述
- babel 

#### 问题
- 前端代码为何要进行构建和打包？
- module chunk bundke 分别什么意思，有何区别？
- loader 和 plugin 的区别？
- webpack 如何实现懒加载？
- webpack 常见的性能优化？
- babel-runtime 和 babel-polyfill 的区别

设置淘宝源，会按照包时快一点
```shell
npm config set registry https://registry.npm.taobao.org
```

## webpack 基本配置
- 拆分配置和 merge
- 启动服务
- 处理es6
- 处理样式
- 处理图片
- 模块化

安装项目 webpack
```
npm i --save-dev webpack webpack-cli webpack-parallel-uglify-plugin
```

## 拆分配置和 merge
项目下有三个环境：
- webpack.dev.js 开发环境
- webpack.prod.js 生产环境
- webpack.common.js 公共代码

使用 webpack-merge 合并公共代码，webpack-merge 合并原理是把多个对象合并成一个对象，类似Object.assigin方法一样，发生重复，后者会覆盖前者。
```
npm i --save-dev webpack-merge

const {smart} = require('webpack-merge')
module.exports = smart(webpackCommonConf, {
  mode: 'production',
  // ..
}
```

## 启动服务
启动服务就是启动一个nodejs服务器，使用一个 webpack-dev-server 包完成：
```
npm i --save-dev webpack-dev-server

"scripts": {
    "dev": "webpack-dev-server --config webpack-config/webpack.dev.js"
},
```

## 处理es6
安装 babel
```
npm i --save-dev @babel/core @babel/cli @babel/preset-env
npm i --save @babel/polyfill
```
.babelrc
```js
{
  "presets": [
    "@babel/preset-enc"
  ],
  "plugins": []
}
```

.babel.config.js
```js
module.exports = {
  presets: [
    '@babel/env'
  ]
}
```
webpack.common.js
```
module: {
    rules: [
      {
        test: /\.js$/,
        loader: ['babel-loader'],
        include: srcPath,
        exclude: /node_modules/
      }
    ]
  },
```

## 处理样式
兼容浏览器前缀
```
npm i --save-dev autoprefixer style-loader css-loader postcss-loader
```
```js
module: {
    rules: [
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
```

## 处理图片
file-loader 
```
npm i --save-dev file-loader url-loader
```
url-loader 包含了 file-loader，url-loader 可以把小的图片打包压缩成 base64
```js
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
```

## 打包输出生成index.html文件

webpack.common.js
```
npm i --save-dev html-webpack-plugin clean-webpack-plugin 
```
```js
plugins: [
  new HtmlWebpackPlugin({
    template: path.join(srcPath, 'index.html'),
    filename: 'index.html'
  }),
  // 生产环境
  new CleanWebpackPlugin(),
  new webpack.DefinePlugin({
    ENV: JSON.stringify('development')
  })
]
```
