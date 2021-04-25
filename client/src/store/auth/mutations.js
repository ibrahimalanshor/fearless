export default {
	login(state, user) {
		state.user = user
		state.login = true
	},
	logout(state) {
		state.user = ''
		state.login = false
	}
}