


const mongoose = require('mongoose')


const userSchema = mongoose.Schema ({
    name : {
        type: String,
        required: [true, 'Please add a name']
    },
    email : {
        type: String,
        required: [true, 'Please add an email'],
        unique: true // This is unique because we dont want to have to email addresses
    },
    password : {
        type: String,
        required: [true, 'Please add a password']
    },
},
{
    timestamps: true // Timestamps save the current time of the document created and also when it was updated in form of a Date
})

module.exports = mongoose.model('User', userSchema)