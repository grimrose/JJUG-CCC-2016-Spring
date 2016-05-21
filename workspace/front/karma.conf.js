var webpack = require('webpack');

// Karma configuration
// Generated on Tue May 03 2016 19:14:26 GMT+0900 (JST)

module.exports = function(config) {
  'use strict';
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha'],


    // list of files / patterns to load in the browser
    files: [
      './test/**/*Test.ts'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      './test/**/*Test.ts': ['webpack', 'sourcemap']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,

    webpack: {
      resolve: {
        extensions: ['', '.js', '.ts']
      },
      module: {
        loaders: [
          {
            test: /\.ts$/,
            exclude: /node_modules/,
            // @see https://github.com/power-assert-js/webpack-espower-loader/issues/4
            loader: 'webpack-espower-loader!ts-loader'
          },
          // @see http://qiita.com/kuy/items/6aaab9b80a3cc017c103
          { test: /\.json$/, loader: 'json-loader' }
        ],
        noParse: [/.html$/]
      },
      devtool: 'inline-source-map',
      // @see http://qiita.com/kuy/items/6aaab9b80a3cc017c103
      node: { fs: 'empty' }
    },

    webpackMiddleware: {
      noInfo: true
    },

    plugins: [
      'karma-mocha',
      'karma-webpack',
      'karma-sourcemap-loader',
      'karma-phantomjs-launcher'
    ]
  });
};
