const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
	try {
		const token = req.headers.authorization
		
		if (token) {
			const appToken = process.env.APP_TOKEN

			jwt.verify(token, appToken, (err, user) => {
				if (err) {
					throw err
				}

				req.user = user
			})

			next()
		} else {
			throw 'Unauthorized'
		}
	} catch (err) {
		return res.status(401).json(err)
	}
}