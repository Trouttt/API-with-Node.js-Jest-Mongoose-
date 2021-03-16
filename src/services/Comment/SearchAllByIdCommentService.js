const { json } = require("express");
const mongoose = require("mongoose");
const commentModel = require('../../models/Comment');
const Comment = mongoose.model('Comment', commentModel);

class SearchByIdCommentService{
    async execute({id_class}){
        try{
            const Comments = await Comment.find({id_class});
            
            return Comments;
        }catch(err){
            return json({err})
        }
      
    }
}

module.exports = SearchByIdCommentService;