const express = require('express');
const { dirname } = require('path');
const path = require('path')
const accounts = require('./Acounts')

const app = express();

app.get('/api/accounts', (req, res) => {
    // if we want to return JSON file
    res.send(accounts)
})

// Setting a static folder

// app.use use is a method we use when we want to include a middleware

// This is setting our public folder as the static folder

// The reason we do this is that we do create many res.sendFile()

app.use(express.static(path.join(__dirname, "public")))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log("Server started on Port:" + PORT)
})