

const express = require('express')
const router = express.Router()

const {registerUser, loginUser, getMe} = require('../controllers/userController')

const {protect} = require('../middleware/authMiddleware')

const {loginLimiter} = require('../middleware/limiters')

router.post('/', registerUser)
router.post('/login', loginLimiter, loginUser)
router.get('/me', protect, getMe)


module.exports = router