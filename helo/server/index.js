const express = require ('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const controller = require('./controller');
const app = express();
require('dotenv').config();

app.use(bodyParser.json())

let { 
    SERVER_PORT, 
    CONNECTION_STRING, 
} = process.env

massive(CONNECTION_STRING).then( db => {
    console.log('Database Connected...')
    app.set('db', db)
    
}).catch(err => console.log('--db err--', err));

app.post('/api/auth/register', controller.registerUser)

app.post('/api/auth/login', controller.loginUser)

app.listen(SERVER_PORT, ()=> { console.log (`Listening on port: ${SERVER_PORT}`)});