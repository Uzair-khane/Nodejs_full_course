const express = require("express");
const app = express();
app.set("view engine", "ejs");
// simple only render ejs file  
app.get("/",(req,res)=>{
    res.render("home")
})
// pass data to ejs file 
app.get("/about",(req,res)=>{
    res.render("home",{
        name:"uzair khan",
        age : 10
    })
})
// pass array in apply loop on this 
app.get("/profile",(req,res)=>{
    res.render("profile",{
        users:["uzair ",22,"cs student "]
    })
})


app.listen("3000",()=>{
    console.log("server start")
})