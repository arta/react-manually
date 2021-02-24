var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  // configuration object here:
  template: __dirname + '/app/index.html',
  filename: 'index.html', // single ouptut file, a build; will live in /build
  inject: 'body' // where will the build's <script> tag be (head or body)
});

module.exports = {
  mode: 'development',
  entry: __dirname + '/app/index.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  output: {
    filename: 'transformed.js',
    path: __dirname + '/build'
  },
  plugins: [HTMLWebpackPluginConfig]
};
