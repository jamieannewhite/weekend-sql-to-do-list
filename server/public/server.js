// Require express
const express = require('express');

// call express
const app = express();
const port = 5000;

// express static file serving - public is the folder name
app.use(express.static('server/public'));

// Start up our server
app.listen(port, () => {
  console.log('listening on port', port);
});