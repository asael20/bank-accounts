const { Schema, model } = require('mongoose');


const AccountSchema = new Schema({

    number: {
        type: Number,
        required: true,
        unique:true
    },

    balance: {
        type: Number,
        default: 0
    },

    owner:{ type: Schema.Types.ObjectId, ref:'users'},

    status:{
        type: String,
        default: 'A'
    },

    password:{
        type: String,
        required: true
    },

    card: { type: Schema.Types.ObjectId, ref: 'cards' },

    createdAt:{
        type: Date,
        default: new Date()
    }


});


module.exports = model('accounts', AccountSchema);