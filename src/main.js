import Vue from 'vue'
import App from './App.vue'

import router from "./router"
import store from "./store"
import toast from "./components/content/toast"

Vue.config.productionTip = false
Vue.prototype.EventBus=new Vue();
Vue.use(toast)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
