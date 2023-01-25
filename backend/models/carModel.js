
const mongoose = require('mongoose')


const carSchema = mongoose.Schema({
    user : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    name: {
        type : String, 
        required: [true , 'Please add a car name']
    },
    type: {
        type : String, 
        required: [true , 'Please add car type']
    },
    year: {
        type : Number, 
        required: [true , 'Please add a car manufacturing year']
    },
    color: {
        type : String, 
        required: [true , 'Please state the color of the car']
    },
    gear: {
        type : String, 
        required: [true , 'Please car gear']
    },
    engine: {
        type : String, 
        required: [true , 'Please add car engine type']
    },
    km: {
        type : Number, 
        required: [true , 'Please state how many km driven']
    },
    price: {
        type : Number, 
        required: [true , 'Please add your desired price']
    },
    photo: {
        type : String, 
        required: [true , 'Please add a photo of the car']
    }
}, {
    timestamps: true
}
)

module.exports = mongoose.model('Car', carSchema)