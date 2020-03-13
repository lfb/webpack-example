## webpack 如何实现异步加载JS 
webpack 支持异步加载js，组件等，还可以指定名字，编译出来是单独一个文件
```js
setTimeout(() => {
  import(/*webpackChunkName: "dynamic-data"*/ '../js/dynamic-data').then(res => {
    console.log(res)
  })
}, 1000)
```
