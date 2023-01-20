// @desc Get Cars
// @route GET /api/cars
// @acess Public

const getCars = (req, res) => {
    if(!req.body.text) { //if it is not there then
        res.status(400) //.json({message: 'Please add a text field'})
        throw new Error('Please add a text field')
    }

    res.status(200).json({message: 'Get cars'})
}

// @desc Set Car
// @route POST /api/car
// @acess Public

const setCar = (req, res) => {
    res.status(200).json({message: 'Set car'})
}

// @desc Update Car
// @route PUT /api/cars/:id
// @acess Public

const updateCar = (req, res) => {
    res.status(200).json({message: `Update car ${req.params.id}`})
}

// @desc Delete Car
// @route DELETE /api/cars/:id
// @acess Public

const deleteCar = (req, res) => {
    res.status(200).json({message: `Delete car ${req.params.id}`})
}

//to be able to use it we need to export it
module.exports = {
    getCars,
    setCar,
    updateCar,
    deleteCar
} 