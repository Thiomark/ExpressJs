const logger = (req, res, next) =>{
    console.log(`Middleware ran at: ${Date.now()}`)

    // Should always have next()
    next()
}

module.exports = logger;