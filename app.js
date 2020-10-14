const express = require('express');
const path = require('path')
const logger = require('./middleware/loggger')

const app = express();

// body parsr middlware
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// Init middleware
app.use(logger)

// The static website
app.use(express.static(path.join(__dirname, "public")))

// Acounts api route
app.use('/api/accounts', require('./routes/api/accounts'))

// Creating an account


const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log("Server started on Port:" + PORT)
})