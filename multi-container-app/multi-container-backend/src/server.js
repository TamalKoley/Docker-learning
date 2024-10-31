import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import Goal from "./models/goal.js"


const app=express();
app.use(cors({origin:'*'}));
app.use(bodyParser.json());

app.get('/goals',async(req,res)=>{
    try{
        const goals= await Goal.find();
        res.status(200).json({
            Goals : goals.map((goal)=>({
                text:goal.text
            })),
        }
        );
    }catch(err){
        console.error(err.message);
        res.status(500).json({ message: 'Failed to load goals.' });
    }
})

app.post('/goals', async (req, res) => {
    const goalText = req.body.text;
  
    if (!goalText || goalText.trim().length === 0) {
      console.log('INVALID INPUT - NO TEXT');
      return res.status(422).json({ message: 'Invalid goal text.' });
    }
  
    const goal = new Goal({
      text: goalText,
    });
  
    try {
      await goal.save();
      res
        .status(201)
        .json({ message: 'Goal saved', goal: { id: goal.id, text: goalText } });
    } catch (err) {
      console.error('ERROR FETCHING GOALS');
      console.error(err.message);
      res.status(500).json({ message: 'Failed to save goal.' });
    }
  });

  mongoose.connect(
    'mongodb://mongodb:27017/course-goals',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() =>{ console.log('MongoDB connected');
            app.listen(80);
        })
    .catch(err => console.error('MongoDB connection error:', err));
