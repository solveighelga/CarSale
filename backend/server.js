const express = require ('express')
const dotenv = require ('dotenv').config()
const port = process.env.PORT || 5000

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/cars', require('./routes/carRoutes'))

app.listen(port, () => console.log(`Server started on port ${port}`))