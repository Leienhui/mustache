const path = require('path');

module.exports = {
// 模式
  mode:'development',
//   入口
  entry: './src/index.js',
//   出口(打包到什么文件中)
  output: {
    //   虚拟的文件
    filename: 'bundle.js' 
  },
//   配置webpack-dev-server
  devServer: {
    //   静态文件根目录
    contentBase: path.join(__dirname, "www"),
    // 不压缩
    compress: false,
    // 端口号
    port: 8080,
    // 虚拟打包路径，bundle.js没有真正的生成
    publicPath:"/xuni/"
  }
};