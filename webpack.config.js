const path = require('path');

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
  resolve: {
    fallback: {
      stream: require.resolve('stream-browserify'),
      buffer: require.resolve('buffer'),
    },
  },
};
