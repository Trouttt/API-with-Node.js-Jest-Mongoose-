const { json } = require("express");
const mongoose = require("mongoose");
const classModel = require('../../models/Class');
const Classs = mongoose.model('Class', classModel);

class DeleteClassService{
    async execute({id}){
        try{

            const userRemoved = await Classs.findByIdAndDelete({_id: id});
        
            return userRemoved;
        }catch(err){
            return json({err})
        }
      
    }
}

module.exports = DeleteClassService;