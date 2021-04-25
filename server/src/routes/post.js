const { Router } = require('express')
const router = Router()
const { PostController } = require('../controllers')
const { PostRequest } = require('../requests')

router.get('/', PostController.read)
router.post('/', PostRequest.create, PostController.create)

module.exports = router