import express from 'express';

import {connectToDatabase} from './helper.js'

const app=express();

app.get('/',(req,res)=>{
    res.send('<H2>Hello World</H2>');
});

await connectToDatabase();

app.listen(3001);