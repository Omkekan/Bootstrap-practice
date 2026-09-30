const http = require('http');
const fs=require('fs');
const server =http.createServer((req,res)=>{
    if(req.url=="/"){
        res.writeHead(200, {"content-type":"text/html"});

        res.end();

    }else if(req.url=="/home"){
        //res.write("this is home");
        let myreader= fs.createReadStream(__dirname+"/form.html","utf-8");
        myreader.pipe(res);
    }
    else if(req.url=="/about"){
        let myreader= fs.createReadStream(__dirname+"/portfolio.html","utf-8");
        myreader.pipe(res);
    }
    else if(req.url=="/gallery"){
        let myreader= fs.createReadStream(__dirname+"/assignment1.html","utf-8");
        myreader.pipe(res);
    }
});

server.listen(4444,()=>{
    console.log("server started")
})