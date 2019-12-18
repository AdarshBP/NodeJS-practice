const express=require('express');
const router = express.Router();

//routing
router.get('/',(req,res,next)=>{
    console.log('THIS IS THE HOME PAGE');
    res.send('THIS IS THE HOME PAGE');
});


//exporting 

module.exports = router;
