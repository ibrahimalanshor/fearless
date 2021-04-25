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

	async create(req, res) {
		try {
			const data = {
				...req.body,
				images: req.files.map(file => file.filename)
			}

			const post = await Post.create(data)

			return res.status(200).json(post)
		} catch (err) {
			return res.status(400).json(err)
		}
	}

}

module.exports = new PostController