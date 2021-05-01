const { Schema } = require('mongoose')
const { mapImage } = require('./getters')
const { date } = require('./virtuals')
const { latest, withUser } = require('./helpers')

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

PostSchema.virtual('date').get(date)

PostSchema.query.latest = latest
PostSchema.query.withUser = withUser

PostSchema.set('toObject', { getters: true, virtuals: true })
PostSchema.set('toJSON', { getters: true, virtuals: true })

module.exports = PostSchema