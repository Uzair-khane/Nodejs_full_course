const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.use(express.urlencoded({extended:false}))
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

// form 
app.get('/form',(req,res)=>{
    res.render("form")
})
app.post("/submit",(req,res)=>{
 const name = req.body.myname;
 const message = `hello ${name} you login succsesfully`
 res.send(message)
})
app.listen("3000",()=>{
    console.log("server start")
})