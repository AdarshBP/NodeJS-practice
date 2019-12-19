const express = require('express');
const path=require('path');
const router = express.Router();

//routes
router.get('/add-product',(req,res,next)=>{
    // console.log('THIS IS THE FORM PAGE');
    //res.send('<form action="/admin/add-product" method="POST"><input type="text" name="todo" /><button type="submit" >ADD</button></form>');
    res.sendFile(path.join(__dirname,'..','views','add-product.html'));
}); 
 
 router.post('/add-product',(req,res,next)=>{
     console.log(req.body);
     res.redirect('/');
 });

 //export the routes
 module.exports = router;