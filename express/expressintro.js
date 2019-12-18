const http=require('http');
const express=require('express');
const app=express();
//app.listen does the creation of server and server listen(..)
app.listen(3000);


app.use((req,res,next) =>{
    console.log('in the middleware 1');
    next();
});

app.use((req,res,next) =>{
    console.log('in the middleware 2');
    res.send('<h1>hello server</h1>');
});

   
   


