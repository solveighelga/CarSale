
const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config({path: '.env'});
const cors = require('cors')
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT || 5001


connectDB()

const app = express()


app.use(cors())
/*
app.use(cors({
    origin: 'www.carsales.com',
    methods: ["GET", "POST", "DELETE", "PUT"]
}))
*/
app.use(express.json())
app.use(express.urlencoded({extended : false}))

app.use('/api/cars', require('./routes/carRoutes'))
app.use('/api/users', require('./routes/userRoutes'))

app.use(errorHandler)

app.listen(port, () => console.log((`Server started on port ${port}`)))