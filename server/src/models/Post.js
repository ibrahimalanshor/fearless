const { Schema, model } = require('mongoose')
const dayjs = require('dayjs')
const relativeTime = require('dayjs/plugin/relativeTime')

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
}, { timestamps: true, id: false })

function mapImage(images) {
	return images.map(image => asset(image, 'post_img'))
}

PostSchema.virtual('date').get(function () {
	dayjs.extend(relativeTime)

	return dayjs(this.createdAt).fromNow()
})

PostSchema.query.latest = function () {
	return this.sort({ createdAt: -1 })
}

PostSchema.query.withUser = function (field) {
	return this.populate('user', field)
}

PostSchema.set('toObject', { getters: true, virtuals: true })
PostSchema.set('toJSON', { getters: true, virtuals: true })

const Post = model('post', PostSchema)

module.exports = Post