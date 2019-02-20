#Добавление страницы

Чтобы добавить страницы нужно довить в конфигурацию ```build/webpack.base.conf.js``` код:

```js
plugins: [
    ...
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
      filename: './custom-page.html',
      template: `${PATHS.src.source}/custom-page.pug`,
      inject: true,
      chunks: ['index'],
      minify: false
    })
    
  ]
```

предварительно создав файл ```custom-page.pug```

Аналогично для html

```js
plugins: [
    ...
    new HtmlWebpackPlugin({
      hash: false,
      filename: './index2.html',
      template: `${PATHS.src.source}/index2.html`,
      inject: true,
      chunks: ['index'],
      minify: false
    }),
    new HtmlWebpackPlugin({
      hash: false,
      filename: './custom-page2.html',
      template: `${PATHS.src.source}/custom-page2.html`,
      inject: true,
      chunks: ['index'],
      minify: false
    })
    
  ]
```
```js
inject: true,
chunks: ['index']
```

Эта опция подключает нужные стили и js код к старнице. В строке передается ключ из 
```js
entry: {
    index: `${PATHS.src.source}/index.js`
},
```
Без них не будет происходить быстрой перезагрузки страницы в dev режиме.