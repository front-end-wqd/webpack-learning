const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'js/result.js',
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [
            // 处理css资源
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            // 处理样式中的图片资源
            {
                test: /\.jpeg$/,
                loader: 'url-loader',
                options: {
                    limit: 8 * 1024,
                    esModule: false,
                    outputPath: 'img',
                    name: '[hash:10].[ext]'
                },
                type: 'javascript/auto',
            },
            // 处理html中的图片资源
            {
                test: /\.html$/,
                loader: 'html-loader',
            },
            // 处理其余资源
            {
                exclude: /\.(css|js|html|jpeg)$/,
                loader: 'file-loader',
                type: 'javascript/auto',
                options: {
                    esModule: false,
                    outputPath: 'media',
                    name: '[hash:10].[ext]'
                },
            }
        ]
    },
    plugins: [
        // 处理html资源
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    mode: 'development',
    devServer: {
        compress: true,
        port: 5000,
        open: true,
        watchFiles: './src/index.html'
    }
}