/*
折叠tokens
将#与/之间的tokens能够整合起开作为他的下标为3的项
*/
export default function nestTokens(tokens) {
    // 结果数组
    let nestTokens = []
    // 创建一个收集器,这个收集器的指向会变化，当云间#号的时候，收集器会指向这个token下标为2的新数组
    let collector = nestTokens
    // 栈结构,存放小tokens，也就是栈顶（最后入栈的这一个）的token数组中当前操作的这个小数组
    let sections = []
    // 遍历tokens
    for (let i = 0; i < tokens.length; i++) {
        let token = tokens[i]
        switch (token[0]) {
            case '#':
                // 往收集器中放入token
                collector.push(token)
                // 入栈
                sections.push(token)
                // 收集器要换人
                // 给token下标为2的项创建一个数组，让收集器指向它，以收集子元素
                collector = token[2] = []
                break
            case '/':
                // 出栈,pop()返回刚刚弹出的项
                sections.pop()
                // 改变收集器栈结构队尾（栈顶）那一项的下标为2的数组
                collector = sections.length > 0 ? sections[sections.length - 1][2] : nestTokens
                break
            default:
                collector.push(token)
        }
    }
    console.log(nestTokens)
    return nestTokens;
}