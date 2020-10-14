const express = require('express');
const { dirname } = require('path');
const path = require('path')

const app = express();

app.get('/', function(req, res){
    // Sending a file
    res.sendFile(path.join(__dirname, 'public', 'files','index.html'))

})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log("Server started on Port:" + PORT)
})