const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/main.js',  //带上当前路径 
  output: {
    path: path.resolve(__dirname, './build'),
    publicPath: '/build',
    filename: "build.js"
  },

  module: {
    loaders:[
      {test:/\.scss$/, loader: "style-loader!css-loader!sass-loader"},
      {test:/\.css$/, loader: "style-loader!css-loader"},
      {test:/\.js$/, loader: "babel-loader", exclude: /node_modules/},
    	{test:/\.vue$/, loader: "vue-loader"},
      {test: /\.(jpg|png|gif|svg)/, loader: "file-loader"}
    ]
  },

  plugins: [
  	new webpack.BannerPlugin('this is for comment on the top header of file')
  ]
}