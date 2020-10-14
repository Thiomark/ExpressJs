const express = require('express');
const router = express.Router();
const accounts = require('../../Acounts')


// Getting all accounts 
router.get('/', (req, res) => {
    // if we want to return JSON file
    res.send(accounts)
})



// getting asingle account based on the ID
router.get('/:id', (req, res) => {
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

router.post('/', (req, res) => {
    // res.send(req.body)
    const newAccount = {
        id: Math.random() * 10,
        name: req.body.name,
        email: req.body.email,
        username: req.body.username
    };

    if(!newAccount.email || !newAccount.name || !newAccount.username){
        return res.status(400).json({message: "Please include a name, email and the username"});
    }

    accounts.push(newAccount)
    res.json(accounts);
})

module.exports = router