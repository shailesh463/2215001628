const mongoose=require('mongoose');
const schema=mongoose.Schema({
    USERNAME:{
        type:String,
        required:true
    },
    COMMENTS:{
        tpye:mongoose.Schema.Types.ObjectId,
        ref:'Comment'
    }
})

const user=mongoose.model('User',schema);
module.exports=user;