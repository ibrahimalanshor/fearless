import axios from 'axios'

export default {
	async read({ commit }) {
		const posts = await axios.get('/post')

		commit('setPost', posts.data)
	}
}