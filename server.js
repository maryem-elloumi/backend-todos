const express = require('express');
const cors = require('cors');
require('./config/connect');

const todolist  = require('./routes/todo');

const app = express();
app.use(express.json());
app.use(cors());
app.use('/todo' , todolist);


app.listen(3000, ()=>{
    console.log("server work !!");
});