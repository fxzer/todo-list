import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import VueParticles from 'vue-particles'
Vue.use(VueParticles)

new Vue({
    render: h => h(App)
}).$mount('#app')