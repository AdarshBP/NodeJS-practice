const http=require('http');

const server=http.createServer((req,res)=>{
    console.log('hi server');
    //console.log(req);
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head>mt first application</head>');
    res.write('<body>hello</body>');
    res.write('</html>');
})

server.listen(3000);