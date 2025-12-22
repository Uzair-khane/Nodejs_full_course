 const fs = require("fs");
 const path = require("path")
 const file = "text.txt";
 const filePath = path.join(__dirname ,file)
//  write in a file 
const writeFile = fs.writeFileSync(filePath,"welcome from Node js","utf-8")
console.log("File successfully write");
// read in a file 
const read = fs.readFileSync(filePath,"utf-8")
console.log(read)
// append data in a file 
const append = fs.appendFileSync(filePath," \n hello everyone ");
console.log("Data append")
// rename file 
const newName = fs.renameSync(filePath,"NewFile.txt")
console.log("File rename")
// delte file 
const delte=fs.unlinkSync("text.pdf")