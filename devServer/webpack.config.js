const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'result.js',
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            },
            // 打包其余资源
            {
                exclude: /\.(css|js|html)$/,
                loader: 'file-loader',
                type: 'javascript/auto',
                options: {
                    esModule: false,
                    name: '[hash:10].[ext]'
                },
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    mode: 'development',
    // 只会在内存中编译打包不会有任何输出
    // 指令为npx webpack-dev-server
    devServer: {
        // 启用压缩
        compress: true,
        // 端口号
        port: 5000,
        // 自动打开浏览器
        open: true,
        watchFiles: './src/index.html'
    }
}