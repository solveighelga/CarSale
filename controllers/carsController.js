const asyncHandler = require('express-async-handler')

const Car = require('../models/carModel')

const User = require('../models/userModel')


// desc : Get cars
// route : GET /api/cars
// access : private
const getCars = asyncHandler(async (req, res) => {
    const cars = await Car.find()
    res.status(200).json(cars)
})

// desc : set car
// route : POST /api/cars
// access : private
const setCar = asyncHandler(async (req, res) => {
    if(!req.body.name){
        res.status(400)
        throw new Error('Please add a text field')
    }
    const user = await User.findById(req.user.id)

    const car = await Car.create({
        user: req.user.id,
        username: user.name,
        name : req.body.name,
        type : req.body.type,
        year : req.body.year,
        color : req.body.color,
        gear : req.body.gear,
        engine : req.body.engine,
        km : req.body.km,
        price : req.body.price,
        photo : req.body.photo,
    })

    res.status(200).json(car)
})

// desc : update car
// route : PUT /api/cars/:id
// access : private
const updateCar = asyncHandler(async (req, res) => {
    const car = await Car.findById(req.params.id)

    if(!car) {
        res.status(400)
        throw new Error('Car not found')
    }
    const updatedCar = await Car.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })

    res.status(200).json(updatedCar)
})

// desc : Delete car
// route : DELETE /api/cars/:id
// access : private
const deleteCar= asyncHandler (async(req, res)=> {
    const car = await Car.findById(req.params.id)

    if(!car){
        res.status(400)
        throw new Error('car not found')

    }
    await car.remove()
    res.status(200).json({id: req.params.id, message: "Success! Car deleted!"})
})

module.exports = {
    getCars,
    setCar,
    updateCar,
    deleteCar
}