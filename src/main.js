/* eslint-disable */
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import fb from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created () {
    fb.initializeApp({
      apiKey: 'AIzaSyCq3ubq_ox2WcXT65PKOkNE5DwFoOslpug',
      authDomain: 'test-65df7.firebaseapp.com',
      projectId: 'test-65df7',
      storageBucket: 'test-65df7.appspot.com',
      messagingSenderId: '814567410903',
      appId: '1:814567410903:web:94f85c087758d3110fb492'
    })
  }
})
