const { Schema, model } = require('mongoose');

const UserSchema = new Schema({

    idNumber: {
        type: Number,
        required: true,
        unique: true
    },

    name: {
        type: String,
        required:true
    },

    surname: {
        type: String,
        required:true
    },

    email: {
        type: String,
        required: true
    }, 

    phone: {
        type:String,
        required: true
    }

});


module.exports = model('users', UserSchema);