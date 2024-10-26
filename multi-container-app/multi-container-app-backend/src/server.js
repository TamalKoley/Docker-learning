import express from "express";
import cors from "cors";

import bodyParser from "body-parser";
import { GoalsSchema } from "../models/GoalsSchema.js";
import mongoose from "mongoose";

const app=express();
app.use(bodyParser.json());
app.use(cors({origin:'*'}));

app.get('/goals',async(req,res)=>{
    try{
    const goals= await GoalsSchema.find();
    res.status(200).json({goal : goals})
    }catch(err){
        res.send({
            message : 'there was a error while fetching goals'
        })
    }

})
app.post('/goals',async(req,res)=>{
    const goaltext =req.body.text;
    const goal= new GoalsSchema({
        text: goaltext
    })
    try{
        await goal.save();
        res.send({
            message: 'Goal saved successfully',
            id: goal.id,
            text: goal.text
        })
    }catch(err){
        res.json({
            message: 'there was a error while saving the goal'
        })
    }
})

mongoose.connect('mongodb://mongodb:27017/myapp')
app.listen(1500);