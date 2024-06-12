const Router = require('express')
const router = new Router()
const deviceController = require('../controllers/deviceController.js')
const CheckRoleMiddleware = require("../middleware/CheckRoleMiddleware");

router.post('/',CheckRoleMiddleware('ADMIN'), deviceController.create)
router.get('/', deviceController.getAll)
router.get('/:id', deviceController.getOne)

module.exports = router