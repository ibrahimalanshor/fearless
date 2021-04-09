export default (to, from, next) => {
	if (to.meta.auth) {
		console.log('require auth');
	}

	next()
}