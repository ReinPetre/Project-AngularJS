var express = require('express');
var router = express.Router();
let mongoose = require('mongoose');
let Project = mongoose.model('Project');
let Todo = mongoose.model('Todo');
let jwt = require('express-jwt');

let auth = jwt({
    secret: process.env.SECRET,
    userProperty: 'payload'
});

// Get all todos
router.get('/', auth, function (req, res, next) {
    let query = Todo.find()
    query.exec(function (err, todos) {
        if (err) return next(err);
        console.log(todos);
        res.json(todos);
    })
});

// Get todo by id
/* router.get('/:todoid', function (req, res, next) {
    let query = Todo.findById(id);
    query.exec(function (err, todo) {
        if (err) return next(err);
        console.log(todo);
        res.json(todo);
    });
}); */

// Get todos from project by id
router.get('/project/:projectid', auth, function (req, res, next) {
    req.project.populate("todos", function (err, project) {
        if (err) {
            return next(err);
        }
        res.json(project.todos);
    });
});

// Update todo
router.post('/:todoid', auth, function (req, res, next) {
    req.todo.description = req.body.description;
    req.todo.dueDate = req.body.dueDate;
    req.todo.save(function (err, todo) {
        if (err) {
            return next(err);
        }
        console.log(todo);
        res.json(todo);
    });
});


// Add new todo to a project
router.post('/project/:projectid', auth, function (req, res, next) {
    let todo = new Todo({
        description: req.body.description,
        dueDate: req.body.dueDate,
        completed: false
    });
    todo.save(function (err, todo) {
        if (err) {
            return next(err);
        }
        req.project.todos.push(todo)
        req.project.save(function (err, project) {
            if (err) {
                return next(err);
            }
            console.log(todo);
            res.json(todo);
        });
    });
});

// Remove todo from project
router.delete('/:projectid/:todoid', auth, function (req, res, next) {
    let index = req.project.todos.indexOf(req.todo._id)
    //console.log(index);
    req.project.todos.splice(index, 1);
    req.project.save(function (err, project) {
        if(err)
        {
            return next(err);
        }
    });
    //console.log(req.project.todos);
    req.todo.remove(function(err){
        if(err)
        {
            return next(err);
        }
        res.json(req.todo);
    });
});

// Get project by id
router.param('projectid', function (req, res, next, id) {
    let query = Project.findById(id);
    query.exec(function (err, project) {
        if (err) {
            return next(err);
        }
        if (!project) {
            return next(new Error('not found ' + id));
        }
        req.project = project;
        return next();
    });
});

// Get todo by id
router.param('todoid', function (req, res, next, id) {
    let query = Todo.findById(id);
    query.exec(function (err, todo) {
        if (err) {
            return next(err);
        }
        if (!todo) {
            return next(new Error('not found ' + id));
        }
        req.todo = todo;
        return next();
    });
});

module.exports = router;