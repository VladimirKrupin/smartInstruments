import 'core-js/stable'
import Vue from 'vue'
import App from './App'
import router from './router'
import CoreuiVue from '@coreui/vue'
import { iconsSet as icons } from './assets/icons/icons.js'
import store from './store'

import {firestorePlugin} from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'

import Auth from "./plugins/Auth";

Vue.use(firestorePlugin)

firebase.initializeApp({
  projectId: 'moneybox-521ab',
  databaseURL: 'https://moneybox-521ab.firebaseio.com',
  apiKey: 'AIzaSyD1HZ2k9R1t92qFw49Fn1OtRnnGaOs2Oak'
})

Vue.config.performance = true

Vue.use(CoreuiVue)

Vue.prototype.$log = console.log.bind(console)

Vue.use(Auth);

require('./config/guards');

new Vue({
  el: '#app',
  router,
  store,
  icons,
  template: '<App/>',
  components: {
    App
  }
})

export const db = firebase.firestore()

