import Vue from 'vue'
import VueProgressBar from 'vue-progressbar'

import App from './App.vue'

import router from './routes'
import store from './store'

import './assets/css/app.css'

const options = {
	color: '#3B82F6',
	failedColor: '#EF4444',
	thickness: '5px',
	transition: {
		speed: '0.2s',
		opacity: '0.6s',
		termination: 300
	},
	autoRevert: true,
	inverse: false
}

Vue.use(VueProgressBar, options)

Vue.config.productionTip = false

new Vue({
	router,
	store,
  render: h => h(App),
}).$mount('#app')
