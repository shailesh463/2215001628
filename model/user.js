const mongoose=require('mongoose');
const comments = require('./comments');
const schema=mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    comments:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Comment',
    }
})

const user=mongoose.model('User',schema);
module.exports=user;