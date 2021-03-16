const mongoose = require('mongoose');

const Class = new mongoose.Schema({
    name:String,
    description:String,
    video:String,
    data_init:Number,
    data_end:Number,
    data_created:Number,
    data_updated:Number,
    total_comments:Number
}) 

module.exports = Class;