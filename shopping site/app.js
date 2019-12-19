const http = require('http');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');


const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

//initializing
const app=express();
app.use(bodyParser.urlencoded({extend:false}));

//routing 
app.use('/admin',adminRoutes);
app.use(shopRoutes);

app.use((req,res,next) => {
    console.log("entered 404 error");
    
    res.status(404).sendFile(path.join(__dirname,'views','404.html'));
  
});


//listing to port 3000
app.listen(3000);


