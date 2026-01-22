// a1d32114986f77f94cd9377a9b51f284
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
import axios from "axios";
import readline from "readline";
const rl = readline.createInterface({
    input : process.stdin,
    output:process.stdout
})
rl.question("pleace enter a city Name " , async (city)=>{
   try {
    const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${"a1d32114986f77f94cd9377a9b51f284"}`)
    console.log("tempratuer in ",city , "is " , res.data.main.temp,"C")
 
   } catch (error) {
    console.log(error)
   }
   finally{
    rl.close()
   }
})