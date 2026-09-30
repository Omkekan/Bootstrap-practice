const express = require('express');
const app = express();
const path = require('path');

const publicPath=path.join(__dirname,"/public");
app.use(express.static(publicPath));

app.get("/", (req, res, next)=>{
    res.send("simple get request");
    //res.sendFile(__dirname+"/portfolio.html")
});

app.get("/home", (req, res, next)=>{
    res.sendFile(__dirname+"/portfolio.html")
    //res.send("simple get request for home");
});
app.get("/geter", (req, res, next)=>{

    res.send("simple get request for home");
});
app.get("/about", (req, res, next)=>{

    res.send("simple get request for home");
});

app.listen(5050, ()=>{
console.log("server get started");

})