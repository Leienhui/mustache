/* 
    扫描器的类
*/
export default class Scanner {
    constructor(templateStr) {
        // 当前的指针
        this.pos = 0
        // 字符串的尾巴（包括当前指针以及后面的字符串,一开始没有扫描就是整个字符串）
        this.tail = templateStr
        // 将模板字符串写到实例上
        this.templateStr = templateStr
    }
    //    scan用于扫描{{ 或  }}
    // 也就是说，用于指定走过类容，没有返回值
    scan(tag) {
        if (this.tail.indexOf(tag) == 0) {
            // tag有多长，就让指针后移多少位
            this.pos += tag.length
            this.tail = this.templateStr.substring(this.pos)
        }
    }
    //    scanUtil用于扫描字符串
    // 也就是说，让指针进行扫描，直到遇见指定内容结束，并返回结束之前路过的文字
    scanUtil(stopTag) {
        // 记录一下执行该方法的时候pos的值
        const pos_backup = this.pos
        // 当尾巴的开头怒视stopTag的时候，就说明还没有扫到stopTag
        while (!this.eos()&&this.tail.indexOf(stopTag) != 0) {
            this.pos++
            // 从当前指针到字符串结束
            this.tail = this.templateStr.substring(this.pos)
        }
        // substring含头不含尾部
        return this.templateStr.substring(pos_backup, this.pos)
    }
    // 判断指针是否到头的函数
    eos() {
        return this.pos >= this.templateStr.length
    }
}
