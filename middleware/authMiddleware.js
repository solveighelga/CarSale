const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')


const protect = asyncHandler(async (req, res ,next) => {
    let token
    // checking for the authorization header, making sure it is a Bearer token
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try {
            // get token from header (signing this token to this variable)
            token = req.headers.authorization.split(' ')[1] // the split will turn it into an array

            // Verify token
            const decoded = jwt.verify(token, process.env.JWT_SECRET)

            // Get user from token but skip the password
            req.user = await User.findById(decoded.id).select('-password')

            // if something goes wrong we send a 401, not authorized
            next()
        } catch (error){
            console.log(error)
            res.status(401)
            throw new Error('Not authorized')
        }
    }

    // If there is no token at all, not authorized
    if(!token) {
        res.status(401)
        throw new Error('Not authorized, no token')
    }
} )


module.exports = { protect } 