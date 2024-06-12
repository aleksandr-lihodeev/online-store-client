const Router = require('express')
const router = new Router()
const typeController = require('../controllers/typeController.js')
const CheckRoleMiddleware = require('../middleware/CheckRoleMiddleware.js')

router.post('/', CheckRoleMiddleware('ADMIN'), typeController.create)
router.get('/', typeController.getAll)

module.exports = router