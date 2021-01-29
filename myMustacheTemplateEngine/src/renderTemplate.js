import lookup from './lookup'
import parseArray from './parseArray'

/*
renderTemplate,让tokens数组变为dom字符串
*/
export default function renderTemplate(tokens, data) {
    // 结果字符串，用于保存token
    let resultStr = ''
    // 遍历tokens
    for (let i = 0; i < tokens.length; i++) {
        let token = tokens[i]
        // 判断类型
        if (token[0] == 'text') {
            resultStr += token[1]

        } else if (token[0] == 'name') {
            // 去数据对象中寻找想要的变量
            resultStr += lookup(data, token[1])
        } else if (token[0] == '#') {
            // 遇到token下标为0的项的值为#应该进行递归他的下标为2的这个小数组
            resultStr += parseArray(token, data)
        }
    }
    // console.log(resultStr)
    return resultStr
}