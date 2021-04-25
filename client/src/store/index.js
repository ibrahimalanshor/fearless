import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

import auth from './auth'
import post from './post'
import state from './state'
import mutations from './mutations'

export default new Vuex.Store({
	plugins: [createPersistedState()],
	modules: {
		auth,
		post
	},
	state,
	mutations
})