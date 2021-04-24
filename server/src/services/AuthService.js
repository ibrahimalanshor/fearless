const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { User } = require('../models')

class AuthService {

	async login({ email, password }) {
		const user = await User.findOne({ email })
		const match = await bcrypt.compare(password, user.password)

		if (match) {
			const appToken = process.env.APP_TOKEN
			const payload = {
				user: {
					id: user.id,
					name: user.name,
					email: user.email,
				}
			}

			const token = jwt.sign(payload, appToken, { expiresIn: '1h' })

			return token
		} else {
			throw 'Password incorrect'
		}
	}

}

module.exports = new AuthService