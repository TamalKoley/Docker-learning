import express from 'express';
import bodyParser from 'body-parser';

const app=express();

let userGoal='learn Docker!';

app.use(bodyParser.urlencoded({
    extended: false
}
))

app.use(express.static('public'));


app.get('/',(req,res)=>{
    res.send(`
    <html>
      <head>
        <link rel="stylesheet" href="style.css">
      </head>
      <body>
        <section>
          <h2>My Course Goal</h2>
          <h3>${userGoal}</h3>
        </section>
        <form action="/store-goal" method="POST">
          <div class="form-control">
            <label>Course Goal</label>
            <input type="text" name="goal">
          </div>
          <button>Set Course Goal</button>
        </form>
      </body>
    </html>
    `
    );
});

app.post('/store-goal',(req,res)=>{
    const setGoal=req.body.goal;
    console.log(setGoal);
    userGoal=setGoal;
    res.redirect('/');
})


app.listen(3002);