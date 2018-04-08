const express = require('express');
const bodyParser = require('body-parser');

const {mongoose} = require('./db/mongoose');
const {User} = require('./models/user');
const {Vendor} = require('./models/vendor');

var app = express();

app.post('/users', (req, res) => {
    console.log('Create a user')
});

app.listen(3000, () =>{
    console.log('Listening on port 3000');
});