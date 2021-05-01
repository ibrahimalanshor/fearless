export default {
	flash(state, msg) {
		state.flash = {
			exists: true,
			msg,
			count: 1
		}
	},
	resetFlash(state) {
		if (state.flash.exists) {
			if (state.flash.count > 1) {
				state.flash.count = 0
				state.flash.exists = false
			} else {
				state.flash.count++
			}
		}
	},
	addToken: (state, token) => {
		state.api.defaults.headers.common['authorization'] = token
	}
}