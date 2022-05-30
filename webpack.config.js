const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  //source map for detecting which file is generating error
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
  mode: 'development',
};