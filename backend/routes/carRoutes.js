const express = require('express')
const router = express.Router()
const { getCars, setCar, updateCar, deleteCar } = require('../controllers/carControllers')

router.route('/').get(getCars).post(setCar)
//router.get('/', getCars)
//router.post('/', setCar)

router.route('/:id').put(updateCar).delete(deleteCar)
//router.put('/:id', updateCar)
//router.delete('/:id', deleteCar)

module.exports = router
