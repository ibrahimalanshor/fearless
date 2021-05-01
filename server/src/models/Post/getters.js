const { asset } = require('../../helpers')

module.exports = {
	mapImage: images => {
		return images.map(image => asset(image, 'post_img'))
	}
}