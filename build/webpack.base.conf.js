const path = require('path')
//const glob = require('glob')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const spriteSmithPlugin = require('webpack-spritesmith')
const SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin')


const PATHS = {
  src: {
    source: path.join(__dirname, '../src'),
    assets: path.join(__dirname, '../src/assets'),
  },
  dist: path.join(__dirname, '../dist'),
  assets: 'assets/'
}

module.exports = {
  // BASE config
  externals: {
    paths: PATHS
  },
  entry: {
    index: `${PATHS.src.source}/index.js`
  },
  output: {
    filename: `${PATHS.assets}js/[name].js`,
    path: PATHS.dist,
    publicPath: ''
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }, /* {
      test: /\.(png|jpg|jpeg|gif|svg)$/,
      loader: 'file-loader',
      options: {
        name: '[name].[ext]'
      }
    },  */{
      test: /\.(scss|sass)$/,
      use: [
        'style-loader',
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: { sourceMap: true ,url: false}
        }, {
          loader: 'postcss-loader',
          options: { sourceMap: true, config: { path: `${PATHS.src.source}/config/postcss.config.js` } }
        }, {
          loader: 'sass-loader',
          options: { 
            sourceMap: true,
            implementation: require('dart-sass') 
          }
        }
      ]
    },
    {
      test: /\.css$/,
      use: [
        'style-loader',
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: { sourceMap: true , url: false}
        }, {
          loader: 'postcss-loader',
          options: { sourceMap: true, config: { path: `${PATHS.src.source}/config/postcss.config.js` } }
        }
      ]
    },
    {
      test: /\.pug$/,
      include: PATHS.src.source,
      use: [
        {
          loader: 'html-loader',
          options: {
            minimize: false,
            attrs: false,
            collapseWhitespace: false,
            conservativeCollapse: false
          }
        },
        // {
        //   loader: 'pug-html-loader',
        //   options: {
        //     pretty: true
        //   }
        // },
        {
          loader: 'pug-bem-plain-loader',
          options: {
            pretty: true
          }
        }
      ]
    },
    {
      test: /\.html$/,
      include: PATHS.src.source,
      use: [
        {
          loader: 'html-loader',
          options: {
            minimize: false,
            attrs: false,
            collapseWhitespace: false,
            conservativeCollapse: false
          }
        }
      ]
    }]
  },
  resolve: {
    modules: ["node_modules", "spritesmith-generated"]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `${PATHS.assets}css/[name].css`,
    }),
    new HtmlWebpackPlugin({
      hash: false,
      filename: './index.html',
      template: `${PATHS.src.source}/index.pug`,
      inject: true,
      chunks: ['index'],
      minify: false
    }),
    new HtmlWebpackPlugin({
      hash: false,
      filename: './index2.html',
      template: `${PATHS.src.source}/index2.html`,
      inject: true,
      chunks: ['index'],
      minify: false
    }),
    new spriteSmithPlugin({
      src: {
          cwd: `${PATHS.src.assets}/sprite/png`,
          glob: '*.png'
      },
      target: {
          image: `${PATHS.src.assets}/img/sprite.png`,
          css: `${PATHS.src.assets}/scss/utils/sprite.sass`
      },
      apiOptions: {
          cssImageRef: `../img/sprite.png`
      }
    }),
    new SVGSpritemapPlugin(`${PATHS.src.assets}/sprite/**/*.svg`, {
      output: {filename: '/assets/img/sprite.svg'},
      sprite: {
        
      }
    })
  ]
}
