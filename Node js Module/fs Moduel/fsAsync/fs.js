const fs = require("fs")
const path = require("path")
const file = "file.txt";
const filePath = path.join(__dirname,file)
// write file 
fs.writeFile(filePath,"hello everyone",'utf-8',(err)=>{
    if(err){
    console.log(err)
    }
    else{
        console.log("File write")
    }
})
// read file 
fs.readFile(filePath,"utf-8",(err,data)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(data)
    }
})
// append data 
fs.appendFile(filePath," \n welcome frome node js",'utf-8',(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("Updated")
    }
})
// delete 
fs.unlink(filePath,(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("deleted")
    }
})