const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');// 让插件为你生成一个HTML文件

module.exports = {
  entry: './src/main.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')//用于将相对路径转为绝对路径
  },
  plugins: [
      new HtmlWebpackPlugin({
          filename:'index.html',
          template:'./src/index.html'
      })
  ],
  module:{
  	rules:[
  		{
  			test:/\.txt$/,
  			use:'raw-loader'
  		},
        {
            test:/\.jsx?$/,
            use:['babel-loader'],
            exclude:/node_modules/,
        },
        {
            test:/\.js$/,
            use:['babel-loader'],
            exclude:/node_modules/
        },
        {
            test:/\.scss$/,
            use:['style-loader','css-loader','sass-loader']
        }
  	]
  },
    devServer: {//webpack-dev-server插件用来在本地运行一个服务器并运行项目
        contentBase:'./dist'
    },
    mode:'development'
};