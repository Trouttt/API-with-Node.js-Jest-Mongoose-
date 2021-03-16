const mongoose = require("mongoose");
const classModel = require('../../models/Class');
const Classs = mongoose.model('Class', classModel);

class SearchAllClassService{
    async execute(){
        try{
            const classes = await Classs.find();

            return classes;
        }catch(err){
            return json({err});
        }
        
    }
}

module.exports = SearchAllClassService;