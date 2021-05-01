const { Post } = require('../models')

class PostRepository {

	async getWithUser() {
		const posts = await Post.find({}).withUser('photo name username').latest()

		return posts
	}

}

module.exports = new PostRepository