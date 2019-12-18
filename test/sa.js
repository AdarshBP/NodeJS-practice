const http=require('http');
const express=require('express');
const bodyParser=require('body-parser');

//initializing
const app=express();
app.listen(3000);
app.use(bodyParser.urlencoded({extend:false}));

//routing 
/* app.use('/',(req,res,next)=>{
    console.log('this always runs bext next() is written');
    next();
});  */

app.use('/to-do',(req,res,next)=>{
   // console.log('THIS IS THE FORM PAGE');
    res.send('<form action="/product" method="POST"><input type="text" name="todo" /><button type="submit" >ADD</button></form>');
}); 

app.post('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
});

app.use('/',(req,res,next)=>{
    console.log('THIS IS THE HOME PAGE');
    res.send('THIS IS THE HOME PAGE');
});
