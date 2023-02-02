
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

// desc : Register user
// route : POST /api/users
// access : Public
const registerUser = asyncHandler (async (req, res) => {
    const  {name, email, password } = req.body

    
    let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})')
   
    if(!name || !email, !password){
        res.status(400)
        throw new Error('Please add all fields')
    }
    const checkEmail = await User.findOne({email})

    if (checkEmail){
        res.status(400)
        throw new Error('Email already exists')
    }

    if(!strongPassword.test(password)){
        res.status(400)
        throw new Error('Password not strong enough. Needs to include one uppercase letter, one lowercase letter, one digit, one special character, one number and at least eight character long examle: aBc.12345 ')

    }
 
    // Hash password
    const salt = await bcrypt.genSalt(10)
    // salted password (abc12345) = $2a$10$F3QU08qICAdE9PuPVQ/CE.
    
    const hashedPassword = await bcrypt.hash(password, salt)
    // hashed & salted pw (abc12345) = $2a$10$F3QU08qICAdE9PuPVQ/CE.KO2PB.u5RjdtvvlZUvKgrKe6b5Yhsa2

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
    // check if user is found and compare password with the crypted passord from bcrypt
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
    const {_id, name, email} = await User.findById(req.user.id) // req.user = whoever user has authenticated

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