const path = require('path');
const webpack = require('webpack');
const os = require('node:os');

// https://github.com/ryanclark/karma-webpack/issues/498
const output = {
  path: path.join(os.tmpdir(), '_karma_webpack_') + Math.floor(Math.random() * 1000000),
};

module.exports = function(config) {
  config.set({
    frameworks: [ 'mocha', 'webpack' ],
    files: [
      'test/**/*.js',
    ],
    preprocessors: {
      'test/**/*.js': [ 'webpack' ]
    },
    webpack: {
      mode: 'development',
      output,
      plugins: [
        // Work around for Buffer is undefined:
        // https://github.com/webpack/changelog-v5/issues/10
        new webpack.ProvidePlugin({
          Buffer: ['buffer', 'Buffer'],
        }),
        new webpack.ProvidePlugin({
          process: 'process/browser.js',
        }),
      ],
      resolve: {
        fallback: {
          stream: require.resolve('stream-browserify'),
          buffer: require.resolve('buffer'),
        },
      }
    },
    plugins: [
      'karma-webpack',
      'karma-mocha',
      'karma-chrome-launcher',
      'karma-firefox-launcher'
    ],
    colors: true,
    logLevel: 'info',
    autoWatch: false,
    browsers: [ 'ChromeHeadless', 'FirefoxHeadless' ]
  });
};
