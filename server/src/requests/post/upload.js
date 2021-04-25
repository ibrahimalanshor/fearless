const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, path.join(__dirname, '../../../public/post_img'))
	},
	filename: (req, { fieldname, originalname }, cb) => {
		const extension = path.extname(originalname)
		const date = Date.now()

		const filename = `${fieldname}-${date}${extension}`

		cb(null, filename)
	}
})

const fileFilter = (req, { mimetype }, cb) => {
	const supported = ['image/png', 'image/jpg']

	if (supported.includes(mimetype)) {
		cb(null, true)
	} else {
		cb(new Error('Image not supported'))
	}

}

module.exports = multer({ storage, fileFilter }).array('image', 10)