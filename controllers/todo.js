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
    res.json({
      success: false,
      message: 'error at connecting to DB'
    })
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
  let todoId = req.params.id

  try {
    const todo = await Todo.findById(todoId)

    res.json({
      success: true,
      todo
    })
  } catch (e) {
    console.log(e)
  }
}
exports.updateTodo = async (req, res) => {

  // What is the todo id
  const id = req.params.id;
  
  // What is updating information
  const { description, dueDate, subject, taskDone } = req.body;

  // update updating informtion in DB
  try {
    const requestUpdate = await Todo.findByIdAndUpdate(id, {
      description,
      dueDate,
      subject,
      taskDone: taskDone,
    })

    requestUpdate.save();
    // response to front the result
    res.json({
      success: true,
      requestUpdate
    })

  } catch (e) {
    console.log(e)
    res.json({
      success: false,
      message: 'error found updating DB'
    })
  }


}
exports.deleteTodo = async (req, res) => {
  console.log(req.params)
}