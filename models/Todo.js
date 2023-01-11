const mongoose = require('mongoose')
const User = require('./User')

const TodoSchema = new mongoose.Schema({
  description: String,
  subject: String,
  dueDate: String,
  taskDone: {
    type: Boolean,
    default: false,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: User,
  }
}, {timestamps: true})

const Todo = mongoose.model('Todo', TodoSchema)

module.exports = Todo;