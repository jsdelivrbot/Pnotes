var webpack = require('webpack');
var path = require('path');
var HtmlWebPackPlugin = require('html-webpack-plugin');

const VENDOR_LIBS = [
  'react', 'redux', 'lodash', 'react-redux', 'react-dom',
  'faker', 'react-input-range', 'redux-form', 'redux-thunk'
];

module.exports = {
  entry: {
    bundle: './src/index.js',
    vendor: VENDOR_LIBS
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[chunkhash].js' // chunkhash helps the browser cache system recognize file updates
    // chunkhash depends on the content of the file. it will change even if you only change one character
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({ // fi there are any common modules only leave the ones in vendor and delete the rest
      names: ['vendor', 'manifest'] // manifest will be created inside our dist folder to better tell the browser about the updates vendor.js receives

    }),
    new HtmlWebPackPlugin({
      template: 'src/index.html'
    })
  ]

};
