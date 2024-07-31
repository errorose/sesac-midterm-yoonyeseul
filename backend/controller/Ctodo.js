const {Todo} = require('../models/index');

exports.postTodo = async(req, res)=>{
    try{
        console.log(req.body);
        const {title, done} = req.body;
        const addTodo = await Todo.create({
            title, done
        });

        res.json(addTodo);
    }catch(error){
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}

exports.getTodoList = async(req, res)=>{
    try{
        console.log(req.body);
        const listTodo = await Todo.findAll();
        res.json(listTodo);

    }catch(error){
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}

exports.getTodo = async(req, res)=>{
    try{
        const {id} = req.params;
        const todo = await Todo.findOne({
            where: {id},
        });

        res.json(todo);
    }catch(error){
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}



