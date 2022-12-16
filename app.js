var express =require("express");
var app=express();

var PORT=3000;

app.get("/",(req,res)=>{
res.send("Hello")
})


app.listen(3000,function(){
    console.log("Listening on Port 3000");
})