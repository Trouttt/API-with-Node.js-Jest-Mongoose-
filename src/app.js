const express = require('express');
const app = express();
const mongoConnect = require('./database/connection');

const mongoose = require("mongoose");
const classModel = require('./models/Class');
const Classs = mongoose.model('Class', classModel);

mongoose.set('useFindAndModify', false);


const SearchAllClassService = require('./services/Class/SearchAllClassService');
const SearchByIdClassService = require('./services/Class/SearchByIdClassService');
const CreateClassService = require('./services/Class/CreateClassService');
const UpdateClassService = require('./services/Class/UpdateClassService');
const DeleteClassService = require('./services/Class/DeleteClassService');

const commentRouter = require('./routes/comment.routes');

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use('/', commentRouter);

app.get('/', (req,res)=> {
    return res.sendStatus(200); //server
})


app.get("/classes", async(req,res) => {
    try{
        const classes =  new SearchAllClassService();

        const classesFinded = await classes.execute();
        
        return res.json(classesFinded);
    }catch(err){
        return res.json({err});
    }
})

app.get('/classes/:id', async (req,res) => {
    try{
        
        const classes = new SearchByIdClassService();
        
        const uniqueClass = await classes.execute({id: req.params.id});
        return res.json(uniqueClass);
    }catch(err){
        return res.json({err});
    }
})

app.post("/classes", async (req,res) =>{

    try{
        const { name,
            description,
            video,
            data_init,
            data_end,
            data_created,
            data_updated,
            total_comments
        } = req.body;
        
        const classes = new CreateClassService();

        const newClass = await classes.execute({
            name,
            description,
            video,
            data_init,
            data_end,
            data_created,
            data_updated,
            total_comments
        });

        return res.json(newClass);
    }catch(err){
        return res.json({err});
    };
})

app.put('/classes', async (req,res) => {
    try{
        const {id, 
            name,
            description,
            video,
            data_init,
            data_end,
            data_created,
            data_updated,
            total_comments
        } = req.body;

        const classes = new UpdateClassService();

        const updateClass = await classes.execute({
            id,
            name,
            description,
            video,
            data_init,
            data_end,
            data_created,
            data_updated,
            total_comments
        });

        return res.json(updateClass);
    }catch(err){
        return res.json({err});
    }
})


app.delete('/classes/:id', async (req,res) => {
    try{
       
        const classes = new DeleteClassService();
        const dropClass = await classes.execute({id: req.params.id});
        return res.json({dropClass});
    }catch(err){
        return res.json({err});
    }
})




module.exports = app;