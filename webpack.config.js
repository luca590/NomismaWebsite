const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const BUILD_DIR = path.resolve(__dirname, 'dist')
const APP_DIR = path.resolve(__dirname, 'src')

const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

{
	plugins: [ new UglifyJSPlugin() ]
}

module.exports = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    publicPath: '/',
    filename: 'bundle.js'
  },
  node: {
    fs: "empty"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react'],
            plugins: ['babel-plugin-transform-object-rest-spread', 'lodash', 'transform-decorators-legacy', 'transform-class-properties']
          }
        }
      },
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        loader: 'standard-loader',
        exclude: /(node_modules|bower_components)/,
        options: {
          error: false,
          snazzy: true,
          parser: 'babel-eslint'
        }
      },
      {
        test: /\.(jpg|png|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[hash].[ext]'
        }
      },
      {
        test: /\.(scss|css)$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        loader: "file-loader",
        options: {
          name: "assets/fonts/[name].[ext]",
        },
      },
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: 'src/assets', to: 'assets' },
    ]),
  ]
}
