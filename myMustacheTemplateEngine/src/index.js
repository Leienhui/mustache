import parseTemplateCovertTokens from './parseTemplateCovertTokens'
import renderTemplate from './renderTemplate'
// 全局提供myTemplateEngine对象
window.myTemplateEngine = {
    // 渲染方法
    render(templateStr, data) {
        /*
         1、将模板字符串编译为tokens
            1.1寻找双大括号
            实例化一个扫描器，构造的时候提供一个参数，这个参数就是模板字符串
            也就是说这个扫描器时针对模板字符串工作的
         */
        // 将模板字符串转换为tokens数据
        let tokens = parseTemplateCovertTokens(templateStr)
        // 调用renderTemplate函数，让tokens数组变为dom字符串
        let domStr = renderTemplate(tokens,data)
        // console.log(domStr)
        return domStr
    },
}