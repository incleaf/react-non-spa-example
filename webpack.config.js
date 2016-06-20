const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');

const DEV_SERVER_PORT = 1111;
const ENTRIES = {
  main: './src/entries/main'
};
const OUTPUT = {
  filename: "[name].bundle.js",
  path: '/'
};

const hotEntries = (entries) => {
  const result = {};
  Object.keys(entries).map((item) => {
    result[item] = [
      'webpack-dev-server/client?http://0.0.0.0:' + DEV_SERVER_PORT,
      'webpack/hot/only-dev-server',
      path.join(__dirname, entries[item])
    ];
  });
  return result;
};

// Production config
const prod = merge(require('./webpack.config.prod'), {
  entry: ENTRIES,
  output: OUTPUT
});
const dev = merge(require('./webpack.config.dev'), {
  entry: hotEntries(ENTRIES),
  output: OUTPUT,
  port: DEV_SERVER_PORT
});

module.exports = { dev, prod };
