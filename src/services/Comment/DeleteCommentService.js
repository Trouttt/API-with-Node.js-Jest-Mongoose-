const { json } = require("express");
const mongoose = require("mongoose");
const commentModel = require('../../models/Comment');
const Comment = mongoose.model('Comment', commentModel);

class DeleteCommentService{
    async execute({id}){
        try{
            const userRemoved = await Comment.findByIdAndDelete({_id: id});
        
            return userRemoved;
        }catch(err){
            return json({err})
        }
      
    }
}

module.exports = DeleteCommentService;