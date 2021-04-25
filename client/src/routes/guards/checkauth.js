import store from '@/store'

export default (to, from, next) => {
	const login = store.state.auth.login

	if (login) {
		const exp = store.getters['auth/decoded'].exp * 1000
		const now = Date.now()

		if (exp < now) {
			store.commit('auth/logout')
		}
	}

	next()
}