//打包html
const HtmlWebpackPlugin = require('html-webpack-plugin');
//打包分析器
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
//拷贝public目录下的静态资源
const CopyPlugin = require('copy-webpack-plugin');

const config = {
    entry: './src/index.js',
    resolve: {
        extensions: ['.js','.jsx']
    },
    devServer: {
        contentBase: './public',
        hot: true
    },
    module: {
        rules: [
            {
                test: /(.js|.jsx)$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.css$/i,
                use: ['style-loader',
                {
                    loader: 'css-loader',
                    options: {
                    modules: {
                        mode: 'local',
                        localIdentName: '[hash:base64:5]'
                        // 生成 哈希随机 样式名 (防止 css 命名冲突)
                    }
                    }
                }]
                //css-loader ： css 这个模块
                //style-loader: CSS内容插到html的style 标签内
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            filename: 'index.html'
        }),
        new BundleAnalyzerPlugin(),
        new CopyPlugin({
            patterns: [
              { from: './public/1.jpg', to: './' },
            ],
          }),
    ]
}
module.exports = config