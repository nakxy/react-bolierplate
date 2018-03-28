var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'eval-source-map',
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  entry: {
    bundle:[
      'webpack-hot-middleware/client?reload=true',
      path.join(__dirname, 'app/index.js')
      ], 
      vendor:['react','react-dom','react-router','lodash']
    },
  output: {
    path: path.join(__dirname, '/dist/'),
    publicPath: '/',
    filename: '[name].js',
    chunkFilename:'[name].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.tpl.html',
      inject: 'body',
      filename: 'index.html'
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
      filename: '[name].js'
    }),
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel'
    }, {
      test: /\.json?$/,
      loader: 'json'
    },
    {
      test: /\.less$/,
      loader: "style!css!less?cleancss=true&yuicompress=true"
    }, {
      test: /\.(png|jpg|svg)$/,
      loader: 'file-loader',
      options: {
        publicPath: 'app/logos'
      } 
    },{
    test: /\.woff(2)?(\?[a-z0-9]+)?$/,
    loader: "url-loader?limit=10000&mimetype=application/font-woff"
  }, {
    test: /\.(ttf|eot|svg)(\?[a-z0-9]+)?$/,
    loader: "file-loader"
  }]
  },
  devServer: {
    historyApiFallback: true,
  },
};
