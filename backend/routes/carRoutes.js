
const express = require('express')
const router = express.Router()

const {getCars, setCar, updateCar, deleteCar} = require('../controllers/carsController')


router.get('/', getCars)

router.post('/', setCar)

router.put('/:id', updateCar )

router.delete('/:id', deleteCar )

module.exports = router