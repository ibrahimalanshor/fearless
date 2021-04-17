const { body, validationResult } = require('express-validator')
const { exists } = require('./validator')

const rules = [
	body('email').exists().isEmail().custom(exists),
	body('password').exists()
]

const handle = (req, res, next) => {
	const errors = validationResult(req)

	if (!errors.isEmpty()) {
		return res.status(422).json(errors)
	}

	next()
}

module.exports = [
	rules,
	handle
]