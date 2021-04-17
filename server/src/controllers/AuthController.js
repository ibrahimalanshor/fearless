class AuthController {

	login(req, res) {
		return res.status(200).json('Login')
	}

	register(req, res) {
		return res.status(200).json('Register')
	}

}

module.exports = new AuthController