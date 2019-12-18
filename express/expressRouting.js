const http=require('http');
const express=require('express');
const app=express();
app.listen(3000);

/* app.use('/',(req,res,next)=>{
    console.log('this always runs bext next() is written');
    next();
}); */


app.use('/contact',(req,res,next)=>{
    console.log('THIS IS THE CONTACT US PAGE');
    res.send('THIS IS THE CONTACT US PAGE');
}); 

app.use('/info',(req,res,next)=>{
    console.log('THIS IS THE INFO PAGE');
    res.send('THIS IS THE INFO PAGE');
});

app.use('/',(req,res,next)=>{
    console.log('THIS IS THE HOME PAGE');
    res.send('THIS IS THE HOME PAGE');
});



