const express=require('express');
const router=express.Router();
const courseModel=require('../models/courseModel');
router.get('/',async(req,res)=>{
    try{
        const courses= await courseModel.find();
        res.json(courses)
    }catch(err){
        res.status(500).send(err);
    }
})
router.post('/add',async(req,res)=>{
    try{
        const course= new courseModel(req.body);
        await course.save();
        res.status(201).send("Successfull")
    }catch(err){
        res.status(500).send(err);
    }
})
router.put('/update/:id',async(req,res)=>{
    try{
        const {id}=req.params;
        const course= await courseModel.findByIdAndUpdate(id,req.body);
        res.json({message:"updated"})
    }catch(err){
        res.status(500).send(err);
    }
})
router.delete('/delete/:id',async(req,res)=>{
    try{
        const {id}=req.params;
        const course= await courseModel.findByIdAndDelete(id,req.body);
       res.json({message:"deleted"})
    }catch(err){
        res.status(500).send(err);
    }
})
module.exports=router;