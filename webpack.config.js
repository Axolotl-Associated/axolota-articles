const path = require('path');

module.exports = {
  // entry point of our front-end
  entry: './client/index.js',
  // this is where we want our bundle file to go 
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  devServer: {
    publicPath: '/build/',
    // tells where back-end server is
    proxy: {
      '/api': 'http://localhost:3000'
    },
    contentBase: './client'
  },
  // telling webpack if we're in production or development mode
  mode: process.env.NODE_ENV,
  // telling webpack how to read and use loaders on our files
  module: {
    rules: [
      { 
        //translates ES6 to ES5 javascript
        test: /\.jsx?$/, 
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      //translates sass to css to style
      {
        test: /\.s?css$/i, 
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ]
      }
    ]
  },
  performance: {
    hints: false
  }
}