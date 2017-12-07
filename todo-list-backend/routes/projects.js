var express = require('express');
var router = express.Router();
let mongoose = require('mongoose');
let Project = mongoose.model('Project');
let User = mongoose.model('User');
let Todo = mongoose.model('Todo');
let jwt = require('express-jwt');

let auth = jwt({
    secret: process.env.SECRET,
    userProperty: 'payload'
});


// Get all projects
router.get('/', auth, function (req, res, next) {
    let query = Project.find()
    query.exec(function (err, projects) {
        if (err) return next(err);
        console.log(projects);
        res.json(projects);
    })
});

// Get project by id
router.get('/:projectid', auth, function (req, res) {
    req.project.populate('todos', function (err, project) {
        if (err) {
            return next(err);
        }
        console.log(project);
        res.json(project);
    });
});

// Update project
router.post('/:projectid', auth, function (req, res, next) {
    req.project.projectName = req.body.projectName;
    req.project.save(function (err, project) {
        if (err) {
            return next(err);
        }
        console.log(project);
        res.json(project);
    });
});

// Get projects from user by id
router.get('/user/:userid', auth, function (req, res, next) {
    req.user.populate("projects", function (err, user) {
        if (err) {
            return next(err);
        }
        res.json(user.projects);
    });
});

// Add new project
router.post('/user/:userid', auth, function (req, res, next) {
    let project = new Project({
        projectName: req.body.projectName
    });
    project.save(function (err, project) {
        if (err) {
            return next(err);
        }
        req.user.projects.push(project)
        req.user.save(function (err, user) {
            if (err) {
                return next(err);
            }
            res.json(project);
        });
    });
});


// Remove project with todos
router.delete('/:userid/:projectid', auth, function (req, res, next) {
    Todo.remove({
        _id: {
            $in: req.project.todos
        }
    }, function (err) {
        if (err) {
            return next(err);
        }
        let index = req.user.projects.indexOf(req.project._id)
        //console.log(index);
        req.user.projects.splice(index, 1);
        req.user.save(function (err, user) {
            if (err) {
                return next(err);
            }
        });
        //console.log(req.user.projects);
        req.project.remove(function (err) {
            if (err) {
                return next(err);
            }
            res.json(req.project);
        });
    });
});


// Get user by id
router.param('userid', function (req, res, next, id) {
    let query = User.findById(id);
    query.exec(function (err, user) {
        if (err) {
            return next(err);
        }
        if (!user) {
            return next(new Error('not found ' + id));
        }
        req.user = user;
        return next();
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

module.exports = router;