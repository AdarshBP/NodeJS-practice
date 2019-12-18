const http=require('http');


const server=http.createServer((req,res)=>{
    const url=req.url;
    if(url==='/')
    {
        res.write('<html>');
        res.write('<head>this is home page</head>');
        res.write('<body>hello</body>');
        res.write('</html>');
    }
    else if (url=='/contact')
    {
        res.write('<html>');
        res.write('<head>this is contact page</head>');
        res.write('<body>hello</body>');
        res.write('</html>');
    }
});
server.listen(3000);