export default (to, from, next) => {
	if (to.meta.auth) {
		next({ name: 'Login' })
	} else {
		next()
	}
}