import Vue from 'vue'
import App from './App.vue'

import router from "./router"
import store from "./store"

import toast from "./components/content/toast"

import fastClick from "fastclick"
//解决移动端300毫秒点击延迟
fastClick.attach(document.body);

//图片懒加载
import imgLazyLoad from "vue-lazyload"
Vue.use(imgLazyLoad,{
 
  loading:require("./assets/img/lazyload/spiritCR7.jpg"),
  error:require("./assets/img/lazyload/error.jpg"),
})

Vue.config.productionTip = false
Vue.prototype.EventBus=new Vue();
Vue.use(toast)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
