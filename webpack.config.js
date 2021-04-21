const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
   entry: './src/main.jsx',
   output: {
      path: path.join(__dirname, '/dist'),
      filename: 'bundle.js'
   },
   devServer: {
      port: 8080
   },
   module: {
      rules: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
         },
         {
            test: /\.s[ac]ss$/i,
            use: [ 'style-loader', 'css-loader', 'sass-loader'],
        }
      ]
   },
   
   plugins:[
       new HtmlWebpackPlugin({
            template: './dist/index.html'
       }) 
   ],
   resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.scss'],
  },
}