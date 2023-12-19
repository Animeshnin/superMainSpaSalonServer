const ApiError = require('../error/ApiError');

module.exports = function (err, req, res, next) { // ошибка, запрос ответ, функция next для того чтобы передать управление следующему по цепочки middleware
    if(err instanceof  ApiError){
        return res.status(err.status).json({message: err.message})

    }

    return res.status(400).json({message: "Непредвиденная ошибка!"})
}