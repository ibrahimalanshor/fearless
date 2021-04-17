const { body, validationResult } = require('express-validator')
const { uniqueUsername, uniqueEmail, confirmed } = require('./validator');

const rules = [
	body('name').exists().isString(),
	body('username').exists().isString().custom(uniqueUsername),
	body('email').exists().isEmail().custom(uniqueEmail),
	body('password').exists().isLength({ min: 8 }).custom(confirmed),
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