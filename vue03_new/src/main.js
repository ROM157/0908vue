import Vue from 'vue'
import App from './App.vue'
import router from './router'
//引入轮播组件
import 'swiper/dist/css/swiper.css';

Vue.config.productionTip = false

new Vue({
    router,
  render: h => h(App),
}).$mount('#app')
