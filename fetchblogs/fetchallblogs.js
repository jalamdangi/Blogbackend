var express=require('express');
var app=express();
var Blogs=require('../models/Blogs');


const allblogs=app.get('/allblogs',(req,res)=>{
    const fetchbytags=async ()=>{
        try {
            const tag=req.params.tag;
            const result=await Blogs.find({status:true});
            if(!result){res.json({message:"No Post Yet"})}
            res.json(result);
        } catch (error) {
            res.sendStatus(400).json({message:"Something went wrong"});
        }
    }
    fetchbytags();
})
module.exports=allblogs