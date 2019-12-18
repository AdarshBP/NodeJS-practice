const http=require('http');
const express=require('express');

const bodyParser=require('body-parser');
const adminRoutes=require('./routes/admin');
const shopRoutes=require('./routes/shop');

//initializing
const app=express();
app.listen(3000);
app.use(bodyParser.urlencoded({extend:false}));

//routing 
app.use(adminRoutes);
app.use(shopRoutes);




