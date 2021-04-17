import store from '@/store'

export default (to, from, next) => {
	if (to.meta.guest && store.state.auth.login) {
		next({ name: 'Home' })
	} else {
		next()
	}
}