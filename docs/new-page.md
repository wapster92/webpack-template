#Добавление страницы

Чтобы добавить страницы нужно довить в конфигурацию ```build/webpack.base.conf.js``` код:

```js
plugins: [
    ...
    new HtmlWebpackPlugin({
      hash: false,
      filename: './index.html',
      template: `${PATHS.src.source}/index.pug`,
      inject: false,
      minify: false
    }),
    new HtmlWebpackPlugin({
      hash: false,
      filename: './custom-page.html',
      template: `${PATHS.src.source}/custom-page.pug`,
      inject: false,
      minify: false
    })
    
  ]
```

предварительно создав файл ```custom-page.pug```