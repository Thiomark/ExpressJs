const express = require('express');
const path = require('path')
const accounts = require('./Acounts')
const logger = require('./middleware/loggger')

const app = express();


// Init middleware
app.use(logger)

// Getting all accounts 
app.get('/api/accounts', (req, res) => {
    // if we want to return JSON file
    res.send(accounts)
})



// getting asingle account based on the ID
app.get('/api/accounts/:id', (req, res) => {
    const found = accounts.some(function(person){
        return person.id === parseInt(req.params.id)
    })

    // Take if the requested Id exist or not and return a status 400 if t does not exist
    if (found){
        //res.send(req.params.id)
        res.json(accounts.filter(function(person){
            // We have to parse it becasue it is tring
            return person.id === parseInt(req.params.id);
        }))
    }
    else{
        res.status(400).json({message: `There is no account with an id of ${req.params.id}`})
    }

    
})

// The static website
app.use(express.static(path.join(__dirname, "public")))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log("Server started on Port:" + PORT)
})