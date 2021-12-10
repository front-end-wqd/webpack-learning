const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'result.js',
        path: resolve(__dirname, "build")
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                // 多个loader的写法
                use: [
                    "style-loader",
                    "css-loader"
                ]
            },
            // 处理不了html中的图片
            {
                test: /\.jpeg$/,
                // 使用一个loader
                // 下载 url-loader file-loader
                loader: 'url-loader',
                options: {
                    // 图片小于8kb 转为base64处理
                    // 优点 可以减少请求数量
                    // 缺点 图片体积会更大
                    limit: 8 * 1024,
                    esModule: false,
                    // 给图片进行重命名
                    // 取哈希值的前10位并且使用原扩展名
                    name: '[hash:10].[ext]'
                },
                type: 'javascript/auto'
            },
            {
                test: /\.html$/,
                // 处理html中的img 负责引入后交由url-loader处理
                loader: 'html-loader',
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    mode: 'development'
}