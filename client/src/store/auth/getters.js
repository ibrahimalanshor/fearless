import jwt_decode from 'jwt-decode'

export default {
	decoded: state => {
		const decoded = jwt_decode(state.user)

		return decoded
	},
	user: (state, getters) => {
		return getters.decoded.user
	}
}