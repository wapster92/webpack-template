
import 'normalize.css';
import './assets/scss/index.scss';
import './assets/js/common';

import Vue from 'vue/dist/vue.esm';
import App from './assets/components/App.vue'
import globalComponent from './assets/components/globalComp.vue'

Vue.component('app-glob', globalComponent)

new Vue({
  el: '#app',
  render: function(h) {
    return h(App)
  }
});






