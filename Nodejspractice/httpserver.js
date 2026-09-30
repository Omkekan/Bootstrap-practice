const http = require('http');
const server =http.createServer((req,res)=>{
    if(req.url=="/"){
        res.write("this is simple server");
        res.end();

    }else if(req.url=="/home"){
        res.write("this is home");
        res.end();
    }
    else if(req.url=="/about"){
        res.write("this is about");
        res.end();
    }
    else if(req.url=="/gallery"){
        res.write("this is gallery");
        res.end();
    }
    else if(req.url=="/contact"){
        res.write("this is contact");
        res.end();
    }
    else if(req.url=="/service"){
        res.write("this is service");
        res.end();
    }

});

server.listen(4444,()=>{
    console.log("server started")
})