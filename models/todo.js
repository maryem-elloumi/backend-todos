const mongoose = require ('mongoose');

const Todo = mongoose.model('Todo' , {
    text : {
        type:String
    },
    date:{
        type:String,
    },
    status:{
        type:Boolean,
        //par defaut
        default : false
    }
    






})


module.exports = Todo;