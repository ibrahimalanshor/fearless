const { Router } = require('express')
const router = Router()
const { PostController } = require('../controllers')

router.get('/', PostController.read)

module.exports = router