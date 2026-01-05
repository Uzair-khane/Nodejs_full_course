const fs = require("fs")
const readline = require("readline")
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
function create(){
    rl.question("Create a file name " , (filename)=>{
    rl.question("write in a file " ,(content)=>{
        fs.writeFile(`${filename}.txt`,content,(err)=>{
        if(err){
            console.log(err.message)
            
        }
        else{
            console.log(`your file ${filename}.txt created succsesfully`)
        }
        })
rl.close()
    })
    })
}
create()