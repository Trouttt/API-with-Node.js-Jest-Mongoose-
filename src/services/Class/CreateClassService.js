const { json } = require("express");
const mongoose = require("mongoose");
const classModel = require('../../models/Class');
const Classs = mongoose.model('Class', classModel);

class CreateClassService{
    async execute({
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
                return statusCode = 400;
            }

            const newClass = new Classs({
                name,
                description,
                video,
                data_init,
                data_end,
                data_created,
                data_updated,
                total_comments
            });
            
            
            const classCreated = await newClass.save();

            return classCreated;
            }catch(err){
                return json({err});
            }
      
    }
}

module.exports = CreateClassService;