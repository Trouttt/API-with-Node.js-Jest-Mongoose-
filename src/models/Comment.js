const mongoose = require('mongoose');

const Comment = new mongoose.Schema({
    id_class:mongoose.Schema.ObjectId,
    comment:String,
    date_created:Number
}) 

module.exports = Comment;