import webpack from 'webpack'
import path from 'path'

export default {
    devtool: 'inline-source-map',

    entry: [
        path.resolve(__dirname, 'src/index.js')
    ],
    target: 'web',
    output: {
        path: path.resolve(__dirname, 'src'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        rules: [
          {
            enforce: 'pre',
            test: /\.js$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader'
          },
          {
            test: /\.css$/,
            loader: "style!css!postcss",
          }
        ]
      }
}