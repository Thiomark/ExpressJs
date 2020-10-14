const express = require('express');
const path = require('path')
const accounts = require('./Acounts')
const logger = require('./middleware/loggger')

const app = express();


// Init middleware
app.use(logger)

app.get('/api/accounts', (req, res) => {
    // if we want to return JSON file
    res.send(accounts)
})


// The static website
app.use(express.static(path.join(__dirname, "public")))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log("Server started on Port:" + PORT)
})