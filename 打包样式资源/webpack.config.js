// 用来拼接绝对路径的方法
const { resolve } = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "result.js",
        // 代表当前文件的绝对路径
        path: resolve(__dirname, "build")
    },
    // loader配置
    module: {
        rules: [
            {
                test: /\.css$/,
                // 从下到上依次执行
                use: [
                    "style-loader",
                    "css-loader"
                ]
            }
        ]
    },
    // 插件
    plugins: [],
    // 打包模式
    mode: "development",
    // mode: "production",
}