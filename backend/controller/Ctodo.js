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

        if(todo){
            return res.json(todo);
        }else{
            return res.json({message: 'Todo not found'});
        }

        // res.json(todo);
    }catch(error){
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}

exports.patchTodo = async(req, res)=>{
    try{
        const {id} = req.params;
        const {title, done} = req.body;
        const updateTodo = await Todo.update(
            {title, done},
            {where: {id}}
        );

        if(updateTodo){
            return res.json({done: 'true'});
        }else{
            return res.json({message: 'Todo not found'});
        }

        // res.json(updateTodo);
    }catch(error){
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}

exports.deleteTodo = async(req, res)=>{
    try{
        const {id} = req.params;
        const delTodo = await Todo.destroy({
            where: {id}
        });
        console.log(delTodo);

        if(delTodo){
            return res.json({message: 'Todo deleted successfully'});
        }else{
            return res.json({message: 'Todo not found'});
        }
    }catch(error){
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}



