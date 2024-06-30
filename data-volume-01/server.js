const fs=require('fs').promises;
const exists=require('fs').exists;
const path= require('path');

const express=require('express');
const bodyparser=require('body-parser');

app=express();
app.use(bodyparser.urlencoded({extended:false}));
app.use(express.static('public'));
app.use('/feedback',express.static('feedback'));

app.get('/',(req,res)=>{
    const filepath=path.join(__dirname,'pages','feedback.html');
    res.sendFile(filepath);
});

app.get('/exists',(req,res)=>{
    const filepath=path.join(__dirname,'pages','exists.html');
    res.sendFile(filepath);
});

app.post('/create',async(req,res)=>{
    const title=req.body.title;
    const content=req.body.text;

    const actTitle=title.toLowerCase();
    const tempPath= path.join(__dirname,'temp',actTitle+'.txt');
    const finalPath= path.join(__dirname,'feedback',actTitle+'.txt');
console.log("test");
    await fs.writeFile(tempPath,content);
    exists(finalPath,async(exists)=>{
        if(exists){
            res.redirect('/exists');
        }else{
            await fs.copyFile(tempPath,finalPath);
            res.redirect('/');
        }

    });
});

app.listen(process.env.PORT);
