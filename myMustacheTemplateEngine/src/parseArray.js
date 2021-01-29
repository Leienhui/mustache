/*
处理数组，结合renderTemplate实现递归
这个函数的调用次数由data决定：
比如：
let data = {
            arr: [{
                    "name": "小明",
                    "age": 18,
                    "sex": "男",
                    "hobbies": ['吃瓜', '烫头', '打豆豆', '学习']
                },
                {
                    "name": "小红",
                    "age": 20,
                    "sex": "女",
                    "hobbies": ['吃瓜', '烫头', '打豆豆']
                },
                {
                    "name": "小芳",
                    "age": 15,
                    "sex": "女",
                    "hobbies": ['吃瓜', '烫头', '打豆豆', '睡觉']
                }
            ]
        }
        这个函数就要调用3次，因为data的数组长度为3
*/ 
import lookup from './lookup'
import renderTemplate from './renderTemplate'
export default function parseArray(token,data){
    // 得到整体数据中data要使用的数据
    let v=lookup(data,token[1])
    console.log(v)
    // 结果字符串
    let resultStr = ''
    // 遍历v
    for(let i =0;i<v.length;i++){
        resultStr+=renderTemplate(token[2],{
            ...v[i],
            '.':v[i]
        })
    }
    console.log(resultStr)

    return resultStr

}