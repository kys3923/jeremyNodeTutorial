const express = require('express');
const router = express.Router();

const { registerTodo, viewAllTodo, viewOneTodo, updateTodo, deleteTodo } = require('../controllers/todo');

router.route('/register').post(registerTodo);
router.route('/viewAll').get(viewAllTodo);
router.route('/view/:id').get(viewOneTodo);
router.route('/update/:id').put(updateTodo)
router.route('/delete/:id').delete(deleteTodo)

module.exports = router;