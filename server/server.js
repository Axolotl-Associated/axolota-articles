const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
// const cookieParser = require('cookie-parser');
const userController = require('./controllers/userController');
const db = require('./models/linksWalletModel.js');

require('dotenv').config();

// create instance of server
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// taking in get request and sending back a response to the client
app.get('/', (req, res) => {
  res.send('hello world');
})

// create a post route '/signup'
app.post('/signup', userController.createUser, (req, res) => {
  // respond with status 200
  res.status(200).send('User created.');
});


const testQuery = 'SELECT * FROM users';
db.query(testQuery)
.then((data) => {
  console.log('query working');
})

// bad route error handling

// global error handling


// telling server which port to listen on
// starts the server; binding app to port and listens on port 3000 for connections
app.listen(process.env.PORT, () => console.log('app is a badass mf!'))