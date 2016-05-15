'use strict';

var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    'font-awesome-webpack!./font-awesome.config.js',
    './src/app.ts'
  ],
  output: {
    path: './build/assets/',
    publicPath: '/assets/',
    filename: 'js/[name].js'
  },
  devtool: 'inline-source-map',
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js'],
    modulesDirectories: ['node_modules', 'src']
  },
  module: {
    loaders: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      { test: /\.ts$/, loader: 'ts-loader' },

      // css
      { test: /\.css$/, loader: 'style!css?sourceMap' },

      // font-awesome
      { test: /\.less$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader') },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=10000&minetype=application/font-woff' },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' }
    ]
  },
  devServer: {
    contentBase: 'build',
    hot: true,
    port: 3000,
    stats: {colors: true},
    proxy: {
      '/api/*': {
        target: 'http://0.0.0.0:8080/',
        rewrite: function(req) {
          req.url = req.url.replace(/^\/api/, '');
        }
      }
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('style.css', { allChunks: true })
  ]
};
