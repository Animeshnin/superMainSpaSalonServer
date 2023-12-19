require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const modules = require('./moduls/moduls')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const router = require('./routers/index')
const errorHandler = require('./middleware/errorHandlingMiddleware')
const path = require('path')

const PORT = process.env.PORT || 5000

const app = express()
// CORS обеспечивает безопасность безопасность выполнения запроса клиента на сервер
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/api', router)



// Обработка ошибок, последний middleware
app.use(errorHandler)





const start = async () => {
    try {

        await sequelize.authenticate() //) пытается установить соединение с базой данных.
        await sequelize.sync() //  синхронизирует определения моделей с таблицами в базе данных. Он создает таблицы
        app.listen(PORT, () => console.log(`Server start on port ${PORT}`))
    } catch (e){
        console.log(e)
    }
}

start()