const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        required: false
    }
});

const yourSchemaName = new mongoose.Schema({
    text: String,
    status: Boolean
  });

module.exports = mongoose.model('ToDo', yourSchemaName);



