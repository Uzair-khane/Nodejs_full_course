const path = require("path")
// first i create a path using join and then store in a filepath varible 
let filePath = path.join("folder","file.txt")
console.log(filePath)
// this will show the absolute path 
console.log(path.resolve(filePath))
// this will show the Base name of the path which is file.txt 
console.log(path.basename(filePath))
// this will show the dir name which is folder 
console.log(path.dirname(filePath))
// this will show the file extension which is .txt 
console.log(path.extname(filePath))
// this will breaks the path into Object 
console.log(path.parse(filePath))
// this check ther path is the path is absolute or not it return true or false value 
console.log(path.isAbsolute(filePath))