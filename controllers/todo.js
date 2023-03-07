const Todo = require ('../models/todo');


const create = async (req,res)=>{
    try{
        let todo = new Todo (req.body);
        todo.date = new Date();
       let result =  await  todo.save();

       res.send (result);


    }catch(error){
        res.send(error);
    }
}

const all = async (req,res)=>{
      try{
        let result = await Todo.find();
        res.send(result);

      }catch(error){
        res.send(error);
      }
}

const del = async (req,res)=>{
    

    try{

        let id = req.params.id;
        let result = await Todo.findByIdAndDelete({_id : id });
        res.send(result);

    }catch(error){
        res.send(error);
    }
}

const completed = async (req,res)=>{
    
    try{
       let id = req.params.id;
       let result = await Todo.finByIdAndUpdate({_id:id},{status : true});
       res.send(result);

    }catch(error){
        res.send(error);

    }
}


module.exports = {
    create,
    all,
    del,
    completed
}