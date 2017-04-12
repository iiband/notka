var webpack = require('webpack');
const path = require('path');

const config = {
  entry: './index.jsx',

  output: {
    path: __dirname + '/target/webapp',
    filename: 'bundle.js',
    publicPath: '/'
  },

  resolve: {
    extensions: [".js", ".json", ".jsx", ".css", ".scss"],
  },

  plugins: process.env.NODE_ENV === 'production' ? [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ] : [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
    
  ],

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [ 'style-loader', 'css-loader', 'sass-loader' ]
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.png$/,
        use: { loader: 'url-loader', options: { limit: 100000 } },
      },
      {
        test: /\.jpg$/,
        use: [ 'file-loader' ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/, 
        loader: 'babel-loader?presets[]=es2015&presets[]=react&compact=false'
      },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
    ]
  },

  devServer: {
    port: 3000
  }  
}

module.exports = config;
