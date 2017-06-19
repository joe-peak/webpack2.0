const webpack = require("webpack");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
  context: `${__dirname}/src`,
  entry: {
    app: './index.js'
    //多个入口文件，多个出口文件
    /*home: './home.js',
    event: './event.js',
    contact:'./contact.js'*/
  },
  output: {
    path: `${__dirname}/dist/assets`,
    filename: 'bundle.js',
    publicPath: '/assets'//静态资源实际路径为`${__dirname}/src/assets`
  },
  devServer: {
    //配置本地服务器地址
    contentBase: `${__dirname}`
  },
  module: {
    /* loaders: [
    {
         test: /\.js$/,
         use: [{ loader: 'babel-loader' }],
         exclude: /node_modules/
       }
   ]*/
    rules: [
      {
        test: /\.css$/,
        //use: new ExtractTextPlugin.extract('css-loader')
        use: ['css-loader', 'style-loader']
      },
      {
        test: /.js$/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }]
      }]

  }
}
//plugins:[new ExtractTextPlugin('styles.css')]
/*module.exports = {
  context: `${__dirname}/src`,
  entry: {
    //app:'./app/index.js' ,//单个处理文件入口
    app:['./home.js','./event.js','./contact.js'],//多个处理文件入口
    
    //多个入口文件，多个出口文件
    //home: './home.js',
    //event: './event.js',
    //contact:'./contact.js'
  },
  output: {
    path: `${__dirname}/dist`,
    filename:'[name].bundle.js'
  }
}*/