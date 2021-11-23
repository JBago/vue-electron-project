import Vue from 'vue'
import Axios from 'axios'
import VueAxios from 'vue-axios'

import 'bulma-pro/bulma.sass'

import './assets/style/main.sass'
import './assets/style/animations.sass'
import './assets/fontawesome/css/fontawesome-all.css'

import App from './App'
import router from './router'
import store from './store/store'

Vue.config.productionTip = false
Vue.config.devtools = true

Vue.use(require('vue-electron'))
Vue.use(VueAxios, Axios)

Vue.mixin({
  computed: {
    devices: function() {
      return store.state.devices;
    },
    selectedItem: function() {
      return store.state.selectedItem;
    }
  },
  methods: {
    fetchData: function() {
      return Vue.axios({
        method: "GET",
        url: "https://output.jsbin.com/fotokir.json"
      })
        .then(function(response) {
          store.dispatch("fillDevices", response.data);
          console.log(store.state.devices);
        })
        .catch(function(error) {
          console.log("error", error);
        });
    },
    setSelected: function(selected){
        store.commit("setSelected", selected);
    },
    setNext: function(){
      store.dispatch("setNext");
    },
    setPrevious: function(){
      store.dispatch("setPrevious");
    }
  }
});

/* eslint-disable no-new */
new Vue({
  components: {
    App,
  },
  router,
  store,
  template: '<App/>',
}).$mount('#app')

/* Enable webpack hot reloading */
if (module.hot) {
  module.hot.accept()
}
