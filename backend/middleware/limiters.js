const rateLimit = require('express-rate-limit');

// Rate Limiting, middleware?
const postLimiter = rateLimit({
    windowMs: 10 * 60 * 1000, // 10min
    max: 3,
    message: "Too many requests, please try again in 10 mins"
})

const loginLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hrs
    max: 5,
    message: "Too many attemps, please try again in 1 hour"
})

module.exports = {postLimiter, loginLimiter}