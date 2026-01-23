const express = require("express");
const app = express();
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.post("/about",(req,res)=>{
    res.send(req.body)
})
app.listen('3000',()=>{
    console.log("server is starting")
})