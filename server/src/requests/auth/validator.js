const { User } = require('../../models')

module.exports = {
	exists: (email) => {
		return User.exists({ email }).then(exists => {
			if (!exists) {
				return Promise.reject('User does not exists')
			}
		})
	}
}