const { User } = require('../../models')

module.exports = {
	exists: email => {
		return User.exists({ email }).then(exists => {
			if (!exists) {
				return Promise.reject('User does not exists')
			}
		})
	},
	uniqueUsername: username => {
		return User.exists({ username }).then(exists => {
			if (exists) {
				return Promise.reject('Username exists')
			}
		})
	},
	uniqueEmail: email => {
		return User.exists({ email }).then(exists => {
			if (exists) {
				return Promise.reject('Email exists')
			}
		})
	},
	confirmed: (password, { req }) => {
		if (password !== req.body.password_confirmation) {
			throw new Error('Password confirmation does not match')
		}

		return true
	}
}