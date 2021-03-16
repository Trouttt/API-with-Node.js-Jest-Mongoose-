const { json } = require("express");
const mongoose = require("mongoose");
const classModel = require('../../models/Class');
const Classs = mongoose.model('Class', classModel);

class SearchByIdClassService{
    async execute({id}){
        try{
            const uniqueClass = await Classs.findById({_id:id});

            return uniqueClass;
        }catch(err){
            return json({err})
        }
      
    }
}

module.exports = SearchByIdClassService;