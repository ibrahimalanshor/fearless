const { Router } = require('express')
const router = Router()
const { PostController } = require('../controllers')
const { PostRequest } = require('../requests')
const { auth } = require('../middleware')

router.get('/', PostController.read)
router.post('/', PostRequest.create, PostController.create)
router.delete('/:id', auth, PostController.delete)

module.exports = router