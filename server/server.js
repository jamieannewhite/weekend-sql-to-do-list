// Require express
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const todoRouter = require('./routes/todo.router')

const PORT = 5000;
//const toDoRouter = require('./routes/todo.router')


// express static file serving - public is the folder name
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('server/public'));

//ROUTES
app.use('/todo', todoRouter)



// Start up our server
app.listen(PORT, () => {
  console.log('listening on PORT', PORT);
});