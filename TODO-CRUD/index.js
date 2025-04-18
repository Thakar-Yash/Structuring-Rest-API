const express = require('express')
const app = express()
const ejs = require('ejs')
const cors = require('cors');
const dotenv = require('dotenv')
const UserRoutes = require('./routes/UserRoutes')

dotenv.config();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use(express.static('public'))

app.use('/api/todos', UserRoutes);

app.set('view engine','ejs')

app.get('/',(req,res)=>{
    res.render('todo')
})

app.listen(5000, () => {
    console.log('Server running on port 5000...');
});
