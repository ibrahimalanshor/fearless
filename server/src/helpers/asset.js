const path = require('path')

module.exports = (filename, folder) => {
	const url = `${process.env.APP_URL}/public`

	return `${url}/${folder}/${filename}`
}