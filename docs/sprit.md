#Спрайты svg, png
##PNG
Картинки в формате png ложить в папку, файлы объеденяются автоматически

```
src/assets/sprite/png
```
Использование

```
// scss
.icon {
    display: inline-block;
    @include sprite($file-name);
}

// css
.icon {
  display: inline-block;
  background-image: url(../img/sprite.png);
  background-position: 0 0;
  width: 32px;
  height: 32px;
}

```
**Внимание. Если в папке до этого не было картинок нужно будет перезапустить webpack**

##SVG
Картинки в формате svg ложить в папку, файлы объеденяются автоматически

```
src/assets/sprite/svg
```
Использование, предварительно подключив к pug [миксин](../src/includes/icons.pug)

```pug
// pug
include ./includes/icons.pug
+icon(name-file, mod-class)

// html
<svg class="icon icon--home mod-class">
	<use xlink:href="./assets/img/sprite.svg#sprite-home"></use>
</svg>
```
