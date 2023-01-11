const User = require('../models/User');
const Todo = require('../models/Todo');

exports.registerTodo = async (req, res) => {

  const { subject, dueDate, description, user } = req.body;
  console.log(req.body)

  try {
    let foundUser = await User.findById({_id: req.body.author})
    const todo = new Todo(req.body);
    await todo.save();
    foundUser.todos.push(todo);
    await foundUser.save();

    console.log(foundUser)

    res.json({
      success: true,
      todo
    })

  } catch (e) {
    console.log(e)
  }



}
exports.viewAllTodo = async (req, res) => {
  try {
    const todo = await Todo.find()

    res.json({
      success: true,
      todo
    })
  } catch (e) {
    console.log(e)
  }
}

exports.viewOneTodo = async (req, res) => {
  console.log(req.params)
}
exports.updateTodo = async (req, res) => {
  console.log(req.params)
}
exports.deleteTodo = async (req, res) => {
  console.log(req.params)
}