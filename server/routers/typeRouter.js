
const Router = require('express')
const router = new Router()
const typeControllers = require('../controllers/typeControllers')
const checkRole = require('../middleware/checkRoleMiddleware')

// Создание экземпляра маршрута позволяет группировать связанные маршруты и middleware в один объект.

router.post('/',  typeControllers.create)
router.get('/', typeControllers.getAll)



module.exports = router // благодаря этой команды другие файлы могут импортировать и использовать данный маршрут