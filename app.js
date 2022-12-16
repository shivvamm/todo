var express =require("express");
var mongoose=require()
var bodyParser = require("body-parser");
var app=express();
var PORT=3000;

app.set("view engine","ejs");


app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
var i1=[];
var i;
app.get("/",(req,res)=>{
//res.send("Hello");
res.render("list",{newListItems:i1});
})

app.post("/",(req,res)=>{
    i=req.body.n;
    i1.push(i);
    //console.log(i);
    //res.render("list",{newListItem:i})
    res.redirect("/");
})

app.listen(3000,function(){
    console.log("Listening on Port 3000");
})