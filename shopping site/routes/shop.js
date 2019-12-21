const express=require('express');
const path=require('path');
const rootdir = require("../util/path");

const router = express.Router();

//routing
router.get('/',(req,res,next)=>{
    console.log('THIS IS THE HOME PAGE');
   // res.send('THIS IS THE HOME PAGE');
   res.sendFile(path.join(rootdir,'views','shop.html')); 
});

//exporting 

module.exports = router;
