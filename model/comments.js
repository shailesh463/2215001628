const mongoose=require('mongoose');
const commentSchema=new mongoose.Schema({
comments:[
    {
        type:String,
        required:true
    }
],
    timestamps:{
        type:Date,
        default:Date.now
    }
});

const comments=mongoose.model('Comment',commentSchema);
module.exports=comments;