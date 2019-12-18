const http=require('http');
const express=require('express');

const bodyParser=require('body-parser');
const adminRoutes=require('./routes/admin');
const shopRoutes=require('./routes/shop');

//initializing
const app=express();
app.use(bodyParser.urlencoded({extend:false}));

//routing 
app.use(adminRoutes);
app.use(shopRoutes);
app.use((req,res,next) => {
    res.status(404).send('<h1> oops!! page not found , try typing the proper URL </h1>');
});


//listing to port 3000
app.listen(3000);


