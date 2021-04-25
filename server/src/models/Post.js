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
}, { timestamps: true })

function mapImage(images) {
	return images.map(image => asset(image, 'post_img'))
}

PostSchema.virtual('date').get(function () {
	return 'two day ago'
})

PostSchema.set('toObject', { getters: true, virtuals: true })
PostSchema.set('toJSON', { getters: true, virtuals: true })

const Post = model('post', PostSchema)

module.exports = Post