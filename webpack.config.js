const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js'
  },
  module: {
    // loaders: [
    //   { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
    //   { test:   /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
    //   { test: /\.scss$/, loaders: [ 'style-loader', 'css-loader', 'sass-loader' ] }
    // ]
    rules: [
      {
        test: '/\jsx?$/',
        loader: 'babel-loader',
        include: path.resolve(__dirname, '../src')
      }
      // {
      //   test: /\.scss$/,
      //   use: [
      //     {
      //
      //     }'style-loader', 'css-loader', 'sass-loader' ]
      // }
    ]
  },
  plugins: [HtmlWebpackPluginConfig]
}