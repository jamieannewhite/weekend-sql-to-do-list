// Require express
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
//#red 
// const koalaRouter = require('./routes/koala.router')
//#
const PORT = 5000;
//const toDoTRouter = require('./routes/koala.router')


// express static file serving - public is the folder name
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('server/public'));

//ROUTES
//#red 
// app.use('/koalas', koalaRouter)
//#

// Start up our server
app.listen(PORT, () => {
  console.log('listening on PORT', PORT);
});