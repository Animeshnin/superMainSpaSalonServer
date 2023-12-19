const uuid = require('uuid')
const path = require('path')
const {Device, DeviceInfo} = require('../moduls/moduls')
const ApiError = require('../error/ApiError')
const {where} = require("sequelize");
class DeviceControllers {
    async create(req, res, next){

        try {
            let {name, price, typeId, info} = req.body // извлекаем данные из тела запроса
            const {img} = req.files // извлекаем информацию
            let fileName = uuid.v4() + ".jpg" // создаем уникальное имя для картинки
            img.mv(path.resolve(__dirname, '..', 'static', fileName)) // перемещаем файлы в указуанную директорию

            if (info){
                info = JSON.parse(info)
                info.forEach(i =>
                    DeviceInfo.create({
                        title: i.title,
                        description: i.description,
                        deviceId: device.id
                    }))
            }

            const device = await Device.create({name, price, typeId, img: fileName}) // создание новой записи

            return res.json(device)
        } catch (err) {
            next(ApiError.badRequest(err.message))
        }

    }

    async getAll(req, res){
        const {typeId} = req.query
        let devices
            devices = await  Device.findAll()


        return res.json(devices)
    }
    async getOne(req, res){
        const {id} = req.params
        const device = await Device.findOne(
            {
                where: {id},
                include: [{model: DeviceInfo, as: 'info'}]
            }
        )
        return res.json(device)
    }
}

module.exports =  new DeviceControllers()