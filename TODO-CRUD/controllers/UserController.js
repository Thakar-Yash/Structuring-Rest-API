const UserTodo = require('../models/UserModels');

const dispTodo = async(req,res) =>{
    try{
        const todos = await UserTodo.find()
        res.json(todos);
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: "Failed to fetch todos" });
    }
}

const addTodo = async(req,res) =>{
    try {
        const { task } = req.body;
        const newTodo = new UserTodo({ task });
        await newTodo.save()
        res.status(201).json({ message: "Task Added", todo: newTodo });
    } catch(err) {
        console.log(err);
        res.status(500).json({ error: "Failed to add todo" });
    }
}

const updateTodo = async(req,res) =>{
    try{
        const {id} = req.params;
        const {task} = req.body;
        await UserTodo.findByIdAndUpdate(id, {task});
        res.send('Task Updated...')
    } catch(err) {
        console.log(err)
        res.status(500).json({ message: 'Error updating task' });
    }
}

const deleteTodo = async(req,res) => {
    try{
        const {id} = req.params;
        await UserTodo.findByIdAndDelete(id);
        res.send('Task Deleted....')
    } catch(err) {
        res.status(500).json({ message: 'Error deleting task' });
    } 
}

module.exports = { addTodo, dispTodo, updateTodo, deleteTodo }