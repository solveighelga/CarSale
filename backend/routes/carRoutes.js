
const express = require('express')
const router = express.Router()

const {getCars, setCar, updateCar, deleteCar} = require('../controllers/carsController')

const { protect } = require('../middleware/authMiddleware')

router.get('/', getCars)

router.post('/',protect, setCar)

router.put('/:id',protect, updateCar )

router.delete('/:id',protect, deleteCar )

module.exports = router