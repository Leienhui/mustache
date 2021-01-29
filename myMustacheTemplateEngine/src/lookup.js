/*
用于解决打点问题
let a ={
    b:{
        c:{
            d:小明
        }
    }
}
a['b.c.d]是undefined，js不认识这个       "."
那么lookup(dataObj,'b.c.d')的结果就是小明
*/
export default function lookup(dataObj,keyName){
    // 判断keyName中有没有点符号,但是keyName不能是“.”
    if(keyName.indexOf('.')!==-1&&keyName!=='.'){
    // 将keyName变为数组
    let keys = keyName.split('.')  //["b", "c", "d"]
    console.log(keys)
    // 暂存dataObj
    let temp = dataObj
    // 遍历变为数组的keyName
    for(let i = 0;i<keys.length;i++){
        temp=temp[keys[i]]
    }
    console.log(temp)
    return temp
    }
    // 如果没有“.”
    console.log(dataObj[keyName])
    return dataObj[keyName]
}