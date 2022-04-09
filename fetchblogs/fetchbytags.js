var express=require('express');
var app=express();
var Blogs=require('../models/Blogs');


const fetchbytags=app.get('/fetchbytags/:tag',(req,res)=>{
    const fetchbytags=async ()=>{
        try { 
            const tag=req.params.tag;
            const result=await Blogs.find({tags:{$elemMatch:{$eq:tag}}});
            res.json(result)
        } catch (error) {
<<<<<<< HEAD
            
=======
            console.log("this is the error "+error)
>>>>>>> 3b0df5dd21ac78cce00a63ccea76fbb8b4e76497
        }
    }
    fetchbytags();
})
module.exports=fetchbytags