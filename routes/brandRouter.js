const Router = require('express')
const router = new Router()
const brandController = require('../controllers/brandController.js')
const CheckRoleMiddleware = require("../middleware/CheckRoleMiddleware");

router.post('/',CheckRoleMiddleware('ADMIN'), brandController.create)
router.get('/', brandController.getAll)

module.exports = router