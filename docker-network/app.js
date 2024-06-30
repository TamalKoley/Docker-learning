import express from "express";
import axios from "axios";
import bodyparser from "body-parser";
import mongoose from "mongoose";
import {Favourite} from "./models/favourite.js";


const app=express();

app.use(bodyparser.json());
app.get('/favourite', async (req, res) => {
    const favorites = await Favourite.find();
    res.status(200).json({
      favorites: favorites,
    });
  });

app.post('/favourite',async(req,res)=>{
    const type= req.body.type;
    const name=req.body.name;
    const fav= new Favourite({
        type: type,
        name:name
    })
    try{
        await fav.save();
        res.send("<h3>saved!</h3>")
    }catch(err){
        res.send('error while saving favourite')
    }
})
app.get('/',async(req,res)=>{
    try{
        const response= await axios.get('https://swapi.dev/api/films');
        
        const moviearr=response.data.results;
        const movieNames=[];
        moviearr.map(item =>{
            movieNames.push(item.title)
            
        })
        //console.log(movieNames);
         
        res.send({movies:movieNames})
        //res.send("<h2>Server Created</h2>");
    }catch(err){
        res.send('error while fetching movie details . . .');
    }
        
})

app.post('/movieDetails',async(req,res)=>{
    const movieName=req.body.movie;
    console.log(movieName)
    try{
        const response= await axios.get('https://swapi.dev/api/films');
        const moviearr=response.data.results;
        const details=moviearr.filter((item)=>{
            return item.title===movieName
        })
        res.send(details)
        
    }catch(err){
        res.send('error while fetching movie details . . .')
    }
})


// mongoose.connect('mongodb://172.17.0.2:27017/swfavourites',{useNewUrlParser: true},
//      (err)=>{
//         if(err){
//         console.log(err);
//         }
//     else{
//         app.listen(2300);
//     }
// }
// );


mongoose.connect('mongodb://172.17.0.2:27017/myapp');
app.listen(2300);
