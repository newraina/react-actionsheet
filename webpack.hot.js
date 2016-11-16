
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const path = require('path')

module.exports = {
  cache: true,

  devtool: 'source-map',

  entry: ['webpack-hot-middleware/client?reload=true', './example/index.js'],

  output: {
    path: path.resolve('example'),
    publicPath: '/example/',
    filename: 'app.js'
  },

  externals: {
    'react-dom': 'ReactDOM',
    react: 'React'
  },

  module: {
    rules: [{
      test: /\.js/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      loaders: ['style-loader', 'css-loader', 'postcss-loader'],
    }]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: './example/index.html',
      hash: true
    }),
    new webpack.LoaderOptionsPlugin({
      test: /\.css$/,
      options: {
        postcss: [
          require('postcss-cssnext')({browsers: ['chrome >= 35', 'ios >= 7']})
        ]
      }
    })
  ]
}
