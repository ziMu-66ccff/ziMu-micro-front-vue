const { Configuration } = require('webpack');
const path = require('path');

/**
 * @type {Configuration} //配置智能提示
 */

const config = {
  entry: './src/index.ts',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'lib'),
    library: 'zimuvue',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  mode: 'none',
  externals: {
    vue: 'vue',
    wujie: 'wujie',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'swc-loader',
      },
    ],
  },
};

module.exports = config;
