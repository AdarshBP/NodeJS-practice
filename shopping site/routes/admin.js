const express = require('express');

const router = express.Router();

//routes
router.get('/to-do',(req,res,next)=>{
    // console.log('THIS IS THE FORM PAGE');
     res.send('<form action="/product" method="POST"><input type="text" name="todo" /><button type="submit" >ADD</button></form>');
 }); 
 
 router.post('/product',(req,res,next)=>{
     console.log(req.body);
     res.redirect('/');
 });

 //export the routes
 module.exports = router;