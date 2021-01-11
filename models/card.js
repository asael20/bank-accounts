const { Schema, model } = require('mongoose');

const CardSchema = new Schema({
    
    type:{
        type: String,
        required: true,
        unique: true
        
    },

    description: {
        type: String,
        required:true
    },

    image: {
        type:String,
        required:true
    }


})

module.exports = model('cards', CardSchema);