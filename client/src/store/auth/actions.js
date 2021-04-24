import axios from 'axios'

export default {
	async login({ commit }, body) {
		const user = await axios.post('/auth/login', body)

		commit('login', user)
	}
}