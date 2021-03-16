const { json } = require("express");
const mongoose = require("mongoose");
const commentModel = require('../../models/Comment');
const Comment = mongoose.model('Comment', commentModel);
const classModel = require('../../models/Class');
const Classs = mongoose.model('Class', classModel);

class CreateComponentService{
    async execute({id_class, comment, date_created}){
        try{
            if( id_class == '' ||
            comment == '' ||
            date_created == '' 
        ){
            return res.sendStatus(400);
        }
       
        const newComment = new Comment({
            id_class,
            comment,
            date_created,
        });
        const commentCreated = await newComment.save();
        
        return commentCreated;

        }catch(err){
            return json({err})
        }
      
    }
}

module.exports = CreateComponentService;