

// middleware are functions that happen in the request / response cycle

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500

    res.status(statusCode)

    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack // only use this development mode
    })
}

module.exports = {
    errorHandler
}