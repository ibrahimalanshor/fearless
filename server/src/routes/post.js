const { Router } = require('express')
const router = Router()
const { PostController } = require('../controllers')

router.get('/', PostController.get)

module.exports = router