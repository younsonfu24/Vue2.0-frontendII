const path = require('path');
const htmlWP = require('html-webpack-plugin');
const devServer = require('webpack-dev-server');
// 小型的 nodeJS Express 服务器

module.exports = {
    // 页面的入口文件：从哪个文件开始打包
    entry: path.resolve(__dirname, './src/main.js'),

    // 输出
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },

    // 插件配置：
    plugins: [
        new htmlWP({
            template: path.resolve(__dirname, './src/index.html'),
            filename: 'index.html'
        })
    ],

    // devServer: {
    //     contentBase: 'dist',
    //     open: true,
    //     post: 6666,
    //     host: '127.0.0.24'
    // } // 实时打包运行代码~

    // 模块配置
    module: {
        // 配置 loader ...
        rules: [
            // 添加 CSS 模块的处理，css-loader 的作用是打包 css，style-loader 则是解析执行 css
            {
                test: /\.css$/, // 配置要打包的文件类型
                use: ['style-loader', 'css-loader'] // 匹配到的文件使用什么 loader 来处理（倒着来匹配）
            },
            // 添加 less 模块的处理
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            // 添加静态资源模块的打包
            {
                test: /\.(gif|png|jpg|jpeg|svg|woff|ttf|eot)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 10240,
                        name: '[name]_[hash:8].[ext]'
                    }
                }]
            },
            // 添加 JS 模块的处理，把 JS 转换为 ES5 代码
            {
                test: /\.js$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            },
            // 添加 Vue 模块的解析打包处理
            {
                test: /\.vue$/,
                use: ['vue-loader']
            }
        ]
    }

}