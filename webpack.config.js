const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'production',
  entry: {
    bech32Converter: './src/index.js',
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'lib'),
    library: 'bech32Converter',
    libraryTarget: 'umd',
  },
  plugins: [
    // Work around for Buffer is undefined:
    // https://github.com/webpack/changelog-v5/issues/10
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
    }),
  ],
  resolve: {
    fallback: {
      stream: require.resolve('stream-browserify/'),
      buffer: require.resolve('buffer/'),
    },
  },
};
