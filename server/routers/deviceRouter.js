
const Router = require('express')
const router = new Router()
const deviceControllers = require('../controllers/deviceControllers')

// Создание экземпляра маршрута позволяет группировать связанные маршруты и middleware в один объект.

router.post('/', deviceControllers.create)
router.get('/', deviceControllers.getAll)
router.get('/:id', deviceControllers.getOne)
module.exports = router // благодаря этой команды другие файлы могут импортировать и использовать данный маршрут