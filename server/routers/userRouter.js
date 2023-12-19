
const Router = require('express')
const router = new Router()
const userControllers  = require('../controllers/userControllers')
const authMiddleware = require('../middleware/authMiddleware')

// Создание экземпляра маршрута позволяет группировать связанные маршруты и middleware в один объект.

router.post('/registration', userControllers.registration)
router.post('/login', userControllers.login)
router.get('/auth', authMiddleware, userControllers.check)



module.exports = router // благодаря этой команды другие файлы могут импортировать и использовать данный маршрут