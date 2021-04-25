const { User } = require('../../models')

module.exports = {
	existsUser: _id => {
		return User.exists({ _id }).then(exists => {
			if (!exists) {
				return Promise.reject('User does not exists')
			}
		})
	},
	image: (file, { req }) => {
		if (!req.files.length) {
			return Promise.reject('Image required')
		}

		return true
	}
}