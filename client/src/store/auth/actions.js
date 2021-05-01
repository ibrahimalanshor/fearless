export default {
	async login({ commit, rootState: { api } }, body) {
		const user = await api.post('/auth/login', body)

		const token = user.data

		commit('login', token)
		commit('addToken', token, { root: true })
	},
	async register({ rootState: { api } }, body) {
		await api.post('/auth/register', body)
	}
}