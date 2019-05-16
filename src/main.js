import Vue from 'vue'
import iView from 'iview'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/my-theme/index.less'
// import locale from 'iview/dist/locale/en-US'
import locale from 'iview/dist/locale/th-TH'

Vue.use(iView, { locale })

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
