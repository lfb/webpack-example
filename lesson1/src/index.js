import '../css/style1.css'
import '../css/style2.less'

import {sum} from '../js/math'

const sumRes = sum(10, 20)
console.log(`sumRes = ${sumRes}`)

console.log(ENV)

import img1 from '../images/db.jpg'
import img2 from '../images/js.png'

function insertImgElem(imgFile) {
  const img = new Image()
  img.src = imgFile
  document.body.appendChild(img)
}

insertImgElem(img1)
insertImgElem(img2)


