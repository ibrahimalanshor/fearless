const { Schema, model } = require('mongoose')
const { asset } = require('../helpers')

const PostSchema = new Schema({
	content: String,
	images: {
		type: [String],
		get: mapImage
	},
	user: {
		type: Schema.Types.ObjectId,
		ref: 'user'
	}
})

function mapImage(images) {
	return images.map(image => asset(image, 'post_img'))
}

PostSchema.set('toObject', { getters: true })
PostSchema.set('toJSON', { getters: true })

const Post = model('post', PostSchema)

module.exports = Post