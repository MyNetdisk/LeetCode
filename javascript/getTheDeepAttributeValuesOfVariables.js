//实现一个函数 getData() ，可以获取变量的深层属性对应的值，如果不存在则返回 undefined
//例如：
const data = {
  a: {
    aa: {
      aaa: 'raaa'
    }
  },
  b: [{}, {}, {bb: 'rbb'}]
}

function getData(data,path) {
    let pathArr = path
    if(typeof path === 'string'){
       pathArr = path.split('.')
    }
    firstItem = data[pathArr.shift()]
    if(typeof firstItem === 'object' && pathArr.length!==0){
        return getData(firstItem,pathArr)
    }{
        return firstItem
    }
}

console.log(getData(data, 'a.aa.aaa'))
console.log(getData(data, 'b.2.bb'))
console.log(getData(data, 'c.cc.ccc'))
console.log(getData(data, 'd'))

getData(data, 'a.aa.aaa') // raaa
getData(data, 'b.2.bb') // rbb
getData(data, 'c.cc.ccc') // undefined
getData(data, 'd') // undefined