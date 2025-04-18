const express=require('express');
const router=express.Router();
const user=require('../model/user');
const comments=require('../model/comments');

router.get('/users',async(req,res)=>{
            
    const users= await user.findMany({}).populate('comments')
    for(let i=0;i<users.length();i++){
        const id=users[i]._id;
        const max_comments=users[i].comments.length();
        const min_comments=users[i].comments.length();
        const avg_comments=users[i].comments.length()/users.length;
    }
    for(let i=0;i<6;i++){
    res.json({max_comments,min_comments,avg_comments});
    }
})

router.get('/users/:userid/posts',async(req,res)=>{
   let{id}= req.params.userid;
    const user= await user.findById(id).populate('comments')
    if(!user){
        return res.status(404).json({message:'user not found'})
    }
    const posts= await comments.findMany({}).populate('comments')
    res.json(posts)
    //we want to count no of commemts in each post

})

router.get('posts/:postid/comments',async(req,res)=>{
    let{id}= req.params.postid;
    const post= await comments.findById(id).populate('comments')
    if(!post){
        return res.status(404).json({message:'post not found'})
    }
    const comments= await comments.findMany({}).populate('comments')
    res.json(comments)
    //we want to count no of commemts in each post
})
module.exports=router;