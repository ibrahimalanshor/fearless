const { Post } = require('../models')

class PostRepository {

	async getWithUser() {
		const posts = await Post.find({}).populate('user', 'photo name')

		return posts
	}

}

module.exports = new PostRepository