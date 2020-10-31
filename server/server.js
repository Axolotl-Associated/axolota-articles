const express = require('express');

// create instance of server
const app = express();

const PORT = 3000;


// taking in get request and sending back a response to the client
app.get('/', (req, res) => {
  res.send('hello world');
})

// telling server which port to listen on
// starts the server; binding app to port and listens on port 3000 for connections
app.listen(PORT, () => console.log('app is a badass mf!'))