
const express = require('express')
const router = express.Router()

const {getCars, setCar, updateCar, deleteCar} = require('../controllers/carsController')

const { protect } = require('../middleware/authMiddleware')

const {postLimiter} = require('../middleware/limiters')

router.get('/', getCars)

router.post('/',protect, postLimiter, setCar)

router.put('/:id',protect, updateCar )

router.delete('/:id',protect, deleteCar )

module.exports = router