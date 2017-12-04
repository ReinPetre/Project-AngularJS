let mongoose = require('mongoose');

let ProjectSchema = new mongoose.Schema({
    projectName: {
        type: String
    },
    todos: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Todo'
    }]
});

mongoose.model('Project', ProjectSchema);