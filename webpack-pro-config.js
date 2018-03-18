/**
 * Created by jianghe on 2017/12/25.
 * 部署模式配置文件
 */

var webpack = require('webpack');

module.exports = {
    entry: {
        index: './src/cookie.js'
    },
    output: {
        path: __dirname + '/dist',
        filename: 'cookie.min.js'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            mangle: {
                except: ['cookie', 'module', 'exports']
            }
        })
    ],
}
