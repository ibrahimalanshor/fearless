const { Schema, model } = require('mongoose')

const PostSchema = new Schema({
	content: String,
	image: [],
	user: {
		type: Schema.Types.ObjectId,
		ref: 'user'
	}
})

const Post = model('post', PostSchema)

module.exports = Post