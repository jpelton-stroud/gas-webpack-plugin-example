const GasPlugin = require('gas-webpack-plugin');
module.exports = {
  mode: 'production',
  context: __dirname,
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /(\.ts)$/,
        loader: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.ts'],
  },
  output: {
    path: __dirname,
    filename: 'dist/Code.js',
  },
  plugins: [
    new GasPlugin({
      autoGlobalExportsFiles: ['**/*.ts'],
    }),
  ],
};
