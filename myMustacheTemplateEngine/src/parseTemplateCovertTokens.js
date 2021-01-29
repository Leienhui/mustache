// 引入Scanner类
import Scanner from './Scanner'
import nestTokens from './nestTokens'
export default function parseTemplateCovertTokens() {
    let tokens = []
    // 调用scanner来扫描字符串
    let scanner = new Scanner(templateStr)
    while (!scanner.eos()) {
        // 扫描大括号，收集出现标记之前的文字
        let returnWords = scanner.scanUtil('{{')
        if (returnWords != '') {
            if (returnWords[0] == '#') {
                tokens.push(['#', returnWords.substring(1)])
            } else if (returnWords[0] == '/') {
                tokens.push(['/', returnWords.substring(1)])

            } else {
                //  将文字token加入数组  
                tokens.push(['text', returnWords])
            }

        }

        // 度过大括号
        scanner.scan('{{')
        returnWords = scanner.scanUtil('}}')
        if (returnWords != '') {
            if (returnWords[0] == '#') {
                tokens.push(['#', returnWords.substring(1)])
            } else if (returnWords[0] == '/') {
                tokens.push(['/', returnWords.substring(1)])

            } else {
                //  将文字token加入数组  
                tokens.push(['name', returnWords])
            }

        }
        scanner.scan('}}')
    }
    // 返回折叠收集的tokens
    return nestTokens(tokens)
}