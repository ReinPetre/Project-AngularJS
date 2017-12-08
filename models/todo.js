let mongoose = require('mongoose');

let TodoSchema = new mongoose.Schema({
    description: {
        type: String
    },
    dueDate: {
        type: Date
    },
    completed: {
        type: Boolean
    }
});

mongoose.model('Todo', TodoSchema);