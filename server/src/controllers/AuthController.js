const { User } = require('../models')

class AuthController {

	login(req, res) {
		return res.status(200).json('Login')
	}

	async register(req, res) {
		try {
			const user = await User.create(req.body)

			return res.status(200).json(req.body)
		} catch (err) {
			return res.status(400).json(err)
		}
	}

}

module.exports = new AuthController