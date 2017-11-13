const express = require('express');
const router = express.Router();

// bring database connection in
const knex = require('../db/knex');


function validTodo(todo) {
    return typeof todo.title == 'string' && 
        todo.title.trim() != '' && 
        typeof todo.priority == 'number';
}

/* This router is mounted on http://localhost:3000/todo  */
router.route('/')
    .get((req, res) => {

        // Get all todos from the database
        knex('todo')
            .select()
            .then(todos => {
                res.render('all', { todos: todos });
            })
    })
    .post((req, res) => {
        console.log(req.body);
        if (validTodo(req.body)) {

            const todo = {
                title: req.body.title,
                description: req.body.description,
                priority: req.body.priority
            };

            // insert into database
            knex('todo')
                .insert(todo, 'id')
                .then(todo => {
                    const id = ids[0];
                    res.redirect(`/todo/${id}`);
                })
        } else {

            // respond with an error
            res.status(500);
            res.render('error', { message: 'Invalid todo'});

        }
    })





router.get('/new', (req, res) => {
    res.render('new');
});



module.exports = router;