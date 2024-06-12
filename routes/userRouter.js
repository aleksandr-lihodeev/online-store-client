const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController.js')
const AuthMiddleware = require('../middleware/AuthMiddleware.js')

router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.get('/auth', AuthMiddleware, userController.check)

module.exports = router