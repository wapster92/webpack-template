const webpack =  require('webpack')
const merge = require('webpack-merge')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const baseWebpackConfig = require('./webpack.base.conf')
const ImageminWebpWebpackPlugin = require("imagemin-webp-webpack-plugin");

const devWebpackConfig = merge(baseWebpackConfig, {
  // DEV config
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    publicPath: '/',
    contentBase: baseWebpackConfig.externals.paths.dist,
    port: 8081,
    overlay: {
      warnings: true,
      errors: true
    }
  },
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: '[file].map'
    }),
    new CopyWebpackPlugin([
      { from: `${baseWebpackConfig.externals.paths.src.assets}/img`, to: `${baseWebpackConfig.externals.paths.assets}img` },
      { from: `${baseWebpackConfig.externals.paths.src.source}/static`, to: '' },
      { from: `${baseWebpackConfig.externals.paths.src.assets}/fonts`, to: `${baseWebpackConfig.externals.paths.assets}fonts` },
      { from: `${baseWebpackConfig.externals.paths.src.source}/images`, to: `${baseWebpackConfig.externals.paths.dist}/images` },
    ]),
    new ImageminWebpWebpackPlugin({
      config: [{
        test: /\.(jpe?g|png)/,
        options: {
          quality: 90
        }
      }],
      overrideExtension: false,
      detailedLogs: false,
      strict: true
    })
  ]
})

module.exports = new Promise((resolve, reject) => {
  resolve(devWebpackConfig)
})
