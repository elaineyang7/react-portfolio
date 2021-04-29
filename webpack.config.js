const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: './src/index.js',
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
          use: [ 
            'style-loader', 
            'css-loader', 
            'sass-loader'
          ],
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            'file-loader'
          ]
        }
      ]
   },
   
   plugins:[
       new HtmlWebpackPlugin({
            template: './dist/index.html',
            favicon: 'public/favicon.ico'
       }) 
   ],
   resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.scss'],
  },
}