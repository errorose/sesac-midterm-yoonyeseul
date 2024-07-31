const express = require('express');
const app = express();
const PORT = 8080;
const todoRouter = require('./routes/todo');
const {sequelize} = require('./models/index');

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/todos', todoRouter);


sequelize
    .sync({force: false})
    .then(()=>{
        app.listen(PORT, ()=>{
            console.log('Database connection succeeded!');
            console.log(`Server is running! ${PORT}...`);
        });
    })
    .catch((err)=>{
        console.error(err);
    })