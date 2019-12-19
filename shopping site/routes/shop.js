const express=require('express');
const router = express.Router();
const path=require('path');
//routing
router.get('/',(req,res,next)=>{
    console.log('THIS IS THE HOME PAGE');
   // res.send('THIS IS THE HOME PAGE');
   res.sendFile(path.join(__dirname,'..','views','shop.html')); 
});


//exporting 

module.exports = router;
