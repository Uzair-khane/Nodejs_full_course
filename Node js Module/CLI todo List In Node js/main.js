let readline = require("readline")
const rl = readline.createInterface({
  input:process.stdin,
  output:process.stdout
})
const todos = []
function show(){
    console.log("=== TODO CLI === ")
    console.log(" \n1: Add Task ")
    console.log(" \n2: View Task ")
    console.log(" \n3:Exit")
    rl.question("Pleace chose option ", (option)=>{
      if(option === "1"){
         rl.question("Add a task " ,(task)=>{
          todos.push(task)
          console.log(task)
          show()
         })
      }
      else if(option==='2'){
      todos.forEach((el,index) => {
        console.log(index+1, el)
        
      });
      show()
      }
      else if(option === "3"){
      console.log("Good Bye")
      }
      else{
        console.log("pleace chose valid number")
      }
    })
          }
          show()
