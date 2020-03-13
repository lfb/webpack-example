import '../css/style1.css'
import '../css/style2.less'

import {sum} from '../js/math'

const sumRes = sum(30, 20)
console.log(`sumRes = ${sumRes}`)

console.log(ENV)

setTimeout(() => {
  import(/*webpackChunkName: "dynamic-data"*/ '../js/dynamic-data').then(res => {
    console.log(res)
  })
}, 1000)
