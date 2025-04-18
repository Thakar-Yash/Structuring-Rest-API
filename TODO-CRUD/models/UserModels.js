const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/TODO')
    .then(()=> console.log("DB Connected..."))
    .catch(err => console.error('Connection failed:', err))

    const schema = mongoose.Schema;
    const userSchema = new schema({
        task: {type: String},
        completed : {type: Boolean, default: false}
        })

const UserTodo = mongoose.model('todo',userSchema);
module.exports = UserTodo