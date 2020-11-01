const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
// const cookieParser = require('cookie-parser');
const db = require('./models/linksWalletModel');
require('dotenv').config();

// create instance of server
const app = express();


// taking in get request and sending back a response to the client
app.get('/', (req, res) => {
  res.send('hello world');
})

const testQuery = 'SELECT * FROM users';
db.query(testQuery)
.then((data) => {
  console.log('query working');
})
// telling server which port to listen on
// starts the server; binding app to port and listens on port 3000 for connections
app.listen(process.env.PORT, () => console.log('app is a badass mf!'))