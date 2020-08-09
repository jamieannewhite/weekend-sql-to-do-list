const express = require('express');
// const { Router } = require('express');
const todoRouter = express.Router();
const pool = require('../modules/pool');

//GET
todoRouter.get('/', (req, res) => {
  let queryText = 'SELECT * FROM "todo" ORDER BY "id";';
  pool.query(queryText).then(result => {
    res.send(result.rows);
  })
  .catch(error => {
    console.log('error getting todo', error);
    res.sendStatus(500);
  });
})
//POST
todoRouter.post('/', (req, res) => {
    let newToDo= req.body;
    console.log('Adding new todo:', newToDo);
    let queryText = `
    INSERT INTO "todo" ("task_name", "task_type", "task_due", "task_notes", "task_status")
    VALUES ($1, $2, $3, $4, $5);`;
    pool.query(queryText, [newToDo.name, newToDo.type, newToDo.due, newToDo.notes, newToDo.status])
    .then(result => {
      res.sendStatus(201);
    })
    .catch(error => {
      console.log(`Error adding new todo`, error); 
      res.sendStatus(500);
    });
}); 


module.exports = todoRouter;