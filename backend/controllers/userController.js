
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs') // to hash our password
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

// desc : Register user
// route : POST /api/users
// access : Public
const registerUser = asyncHandler (async (req, res) => { //asyncHandler is used to handle exception inside of async express routes and passing them to error handlers
    const  {name, email, password } = req.body

    if(!name || !email, !password){
        res.status(400)
        throw new Error('Please add all fields')
    }
    // Check if user exists
    const userExists = await User.findOne({email})

    if(userExists){
        res.status(400)
        throw new Error('User Already exists')
    }

    // Hash password is a defence machanism so hackers get access only to encrypted "hash" created by the password.
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    // Create user
    const user = await User.create({
        name,
        email,
        password: hashedPassword
    })

    if(user) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }
})

// desc : Authenticate a user
// route : POST /api/login
// access : Public
const loginUser = asyncHandler (async (req, res) => {
    const {email, password} = req.body
    // check for user email
    const user = await User.findOne({email})
    // check if user is found and compare password with the crypted password from bcrypt
    if(user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id),
        })
    } else {
        res.status(400)
        throw new Error('Invalid credentials')
    }
})
// desc : Get user data
// route : GET /api/users/me
// access : Private
const getMe = asyncHandler (async (req, res) => {
    const {_id, name, email} = await User.findById(req.user.id)

    res.status(200).json({
        id: _id,
        name,
        email,
    })
})

// Generate JWT token
// this will assign a token with the id thats passed in
// and will expire in 30 days
// we then use this function in both login and create user
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    })
}



module.exports = {
    registerUser,
    loginUser,
    getMe
}