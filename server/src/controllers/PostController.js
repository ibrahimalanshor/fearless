const { Post } = require('../models')

class PostController {

	async read(req, res) {
		try {
			const posts = await Post.find({})
			
			return res.status(200).json(posts)
		} catch (err) {
			return res.status(400).json(err)
		}
	}

}

module.exports = new PostController