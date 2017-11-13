var express = require('express');
var router = express.Router();

// bring database connection in
const knex = require('../db/knex');

/* This router is mounted on http://localhost:3000/todo  */
router.get('/', function(req, res, next) {

// Get all todos from the database
  knex('todo')
    .select()
    .then(todos => {
        res.render('all', { todos: todos });
    })
});

module.exports = router;