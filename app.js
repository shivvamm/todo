var express =require("express");
var app=express();

var PORT=3000;

app.set("view engine","ejs");
app.use(express.static("public"));
app.get("/",(req,res)=>{
//res.send("Hello");
res.render("list");
})


app.listen(3000,function(){
    console.log("Listening on Port 3000");
})