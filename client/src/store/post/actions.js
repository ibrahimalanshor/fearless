export default {
	async read({ commit, rootState: { api } }) {
		const posts = await api.get('/post')

		commit('setPost', posts.data)
	},
	async store({ dispatch, rootState: { api } }, data) {
		await api.post('/post', data)

		await dispatch('read')
	}
}