const express = require('express');
const { addTodo, dispTodo, updateTodo, deleteTodo } = require('../controllers/UserController')
const router = express.Router();

router.get('/',dispTodo)
router.post('/',addTodo)
router.put('/:id',updateTodo)
router.delete('/:id',deleteTodo)

module.exports = router;