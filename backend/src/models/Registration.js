const mongoose = require('mongoose');

const RegistrationSchema = new mongoose.Schema({
    RegistrationResult:Boolean,
    RegistrationDate:String,
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    event:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Event"
    }}, {
        toJSON:{
            virtuals: true,
        }
    });

module.exports=mongoose.model('Registration',RegistrationSchema);