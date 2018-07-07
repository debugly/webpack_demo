const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: {
    app: ['./src/index.js',
      'webpack-dev-server/client?http://localhost:8080/'
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  ///copy html
  plugins: [new HtmlWebpackPlugin({
    template: 'src/templete-index.html',
    title: 'Matt Reach'
  }), new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    overlay: true,
    stats: "errors-only",
    inline: true,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }
    ]
  }

};
