var express=require('express')
var app= express();
var answer=require('../models/answer');
const Users = require('../models/model');
const fetchanswer=app.get('/fetchanswer/:questionid',(req,res)=>{
    const fetch= async ()=>{
        try {
            
            const question_id=req.params.questionid
            const result = await answer.find({question_id:question_id})
            const user= result.map((item)=>{return item.user_id})
            const comUser= await Users.find({_id:user});
            res.json({user:comUser,answer:result});
        } catch (error) {
            console.log("this is the error "+error)
        }
    }
    fetch();
});
module.exports=fetchanswer;