const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: {
            import: './src/index.js',
            dependOn: 'shared',
          },
          another: {
            import: './src/another-module.js',
            dependOn: 'shared',
          },
          shared: 'lodash',
        },
    devServer: {
        contentBase: './dist',
        inline: false
        },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
          title: 'Caching',
        }),
      ],
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        publicPath: '/',
    },
    optimization: {
        splitChunks: {
          chunks: 'all',
        },
      },
};
//// npm install --save-dev clean-webpack-plugin