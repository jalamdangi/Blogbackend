var express=require('express')
var app= express();
var comment=require('../models/comment')
const fetchcomments=app.get('/fetchcomments/:blogid',(req,res)=>{
    const fetch= async ()=>{
        try {
            
            const blog_id=req.params.blogid
            const result = await comment.find({blog_id:blog_id})
            res.json(result);
        } catch (error) {
            console.log("this is the error "+error)
        }
    }
    fetch();
});
module.exports=fetchcomments;