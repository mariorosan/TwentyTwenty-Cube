import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import responsive from 'vue-responsive'

Vue.use(responsive)

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
