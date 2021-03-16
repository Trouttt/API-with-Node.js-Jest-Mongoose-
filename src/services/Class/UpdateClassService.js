const { json } = require("express");
const mongoose = require("mongoose");
const classModel = require('../../models/Class');
const Classs = mongoose.model('Class', classModel);

class UpdateClassService{
    async execute({
        id,
        name, 
        description, 
        video, 
        data_init,
        data_end, 
        data_created, 
        data_updated, 
        total_comments
        }){
        try{
            if(  name == '' ||
            description == '' ||
            video == '' ||
            data_init == '' || 
            data_end == '' || 
            data_created == '' ||
            data_updated == '' ||
            total_comments == ''
        ){
            return res.sendStatus(400);
        }
        
        const updatedClass = await Classs.findByIdAndUpdate({_id: id}, {
            name,
            description,
            video,
            data_init,
            data_end,
            data_created,
            data_updated,
            total_comments
        });
        
        
        return updatedClass;

        }catch(err){
            return json({err});
        }
      
    }
}

module.exports = UpdateClassService;