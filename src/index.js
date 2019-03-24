
import 'normalize.css';
import './assets/scss/index.scss';
import './assets/js/common';

import Vue from 'vue/dist/vue.esm';
import $ from 'jquery'

new Vue({
  el: '#app',
  data: {
    message: 'Привет, Мир!'
  }
});

$('h1').on('click', function () {
  $(this).css({
    color: 'red'
  })
});





