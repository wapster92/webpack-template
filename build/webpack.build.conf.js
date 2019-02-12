const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ImageminPlugin = require('imagemin-webpack-plugin').default
const imageminMozjpeg = require('imagemin-mozjpeg')

const buildWebpackConfig = merge(baseWebpackConfig, {
  // BUILD config
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin('dist', {} ),
    new CopyWebpackPlugin([
      { from: `${baseWebpackConfig.externals.paths.src.assets}/img`, to: `${baseWebpackConfig.externals.paths.assets}img` },
      { from: `${baseWebpackConfig.externals.paths.src.source}/static`, to: '' },
    ]),
    new ImageminPlugin({
      pngquant: ({quality: '50'}),
      svgo: null,
      jpegtran: null,
      plugins: [imageminMozjpeg({quality: '50'})]
    })
  ]
})

module.exports = new Promise((resolve, reject) => {
  resolve(buildWebpackConfig)
})
