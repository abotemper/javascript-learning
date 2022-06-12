const path = require('path');

const { webpack } = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist/assets'),
        filename: 'bundle.js'
    },
    module:{
        rules:[{
            test: /\.js$/,
            exclude: /node_modules/, 
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }]
    },
    plugins:[
        new HtmlWebpackPlugin({template: './dist/index.html',}),
    ],
    mode:"development",

    devServer: {
        // 项目构建后路径
        static: {
            directory: path.join(__dirname, "dist")
          },
        // 启动gzip压缩
        compress: true,
        // 端口号
        // 自动打开浏览器
        open: true,
        hot:true
      },
    

      

};
