const { Router } = require('express')
const router = Router()
const { AuthController } = require('../controllers')

router.post('/login', AuthController.login)
router.post('/register', AuthController.register)

module.exports = router