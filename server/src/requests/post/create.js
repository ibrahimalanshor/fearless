const { body, validationResult } = require('express-validator')
const { auth } = require('../../middleware')
const { existsUser, image } = require('./validator')
const multer = require('./upload')

const rules = [
	body('content').exists().isString().isLength({ min: 30 }),
	body('image'),
	body('user').exists().custom(existsUser)
]

const handle = (req, res, next) => {
	const errors = validationResult(req)

	if (!errors.isEmpty()) {
		return res.status(401).json(errors)
	}

	next()
}

const upload = (req, res, next) => {
	multer(req, res, err => {

		if (err) {
			return res.status(422).json(err.message)
		}
	
		next()
	})
}

module.exports = [
	auth,
	upload,
	rules,
	handle
]