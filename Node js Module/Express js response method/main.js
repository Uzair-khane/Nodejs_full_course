const express = require("express");
const app = express();
const port = 3000;
app.get("/",(req,res)=>{
    res.send({
        name : "uzair khan",
        age : 23,
        })
})
// json method 
app.get("/about",(req,res)=>{
    res.json({
        name:"uzair khan ",
        father_name : "abdur rahim"
    })
})
// redirect 
app.get('/contact',(req,res)=>{
 res.redirect("https://google.com")
})
// render 
app.set("view engine","ejs")
app.get('/main',(req,res)=>{
res.render("index")
})
// downloads 
app.get("/file",(req,res)=>{
    res.download('./file/lecture.pptx')
})
app.get("/user",(req,res)=>{
    res.set("fullname","uzair khan")
    console.log(res.get("fullname"))
    res.send("header set succsefully")
})

app.listen(port,()=>{
console.log("server start it port " ,port)
})