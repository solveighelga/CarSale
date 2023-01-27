const rateLimit = require('express-rate-limit');

// Rate Limiting, middleware?
const postLimiter = rateLimit({
    windowMs: 720 * 60 * 1000, // 12 hrs
    max: 3,
    message: "Too many posts, please try again in 12 hours"
})

const loginLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hrs
    max: 5,
    message: "Too many attemps, please try again in 1 hour"
})

module.exports = {postLimiter, loginLimiter}