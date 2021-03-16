const mongoose = require('mongoose');
const commentModel = require('../models/Comment');
const Comment = mongoose.model('Comment', commentModel);

const SearchAllByIdService = require('../services/Comment/SearchAllByIdCommentService');
const CreateCommentService = require('../services/Comment/CreateCommentService');
const DeleteCommentService = require('../services/Comment/DeleteCommentService');

var express = require('express');
var router = express.Router();

router.get("/classes/comments", async (req,res) => {
    try{
        const {id_class} = req.body;
        const comments = new SearchAllByIdService();

        const allComment = await comments.execute({id_class});
      
        return res.json(allComment);
    }catch(err){
        return res.json({err});
    }
})

router.post("/classes/comments", async (req,res) =>{
    try{
        const { id_class,
            comment,
            date_created,
        } = req.body

        const comments = new CreateCommentService();
        const newComment = await comments.execute({id_class, comment, date_created});
    
        console.log(newComment);
        return res.json(newComment);
    }catch(err){
        return res.json({err});
    };
})


router.delete('/classes/comments/:id', async (req,res) => {
    
    try{
        const comments = new DeleteCommentService();
        const dropComment = await comments.execute({id: req.params.id});
        return res.json({dropComment});
    }catch(err){
        return res.json({err});
    }
})

module.exports = router;