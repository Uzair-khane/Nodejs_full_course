const apiData = [
    {
        id:1,
        username:"Uzair Khan",
        email:"testing@gmai.com",
        password:123,
     },
        {
        id:2,
        username:"Uzair Khan",
        email:"testing@gmai.com",
        password:123,
     },
        {
        id:3,
        username:"Uzair Khan",
        email:"testing@gmai.com",
        password:123,
     },
        {
        id:4,
        username:"Uzair Khan",
        email:"testing@gmai.com",
        password:123,
     }
]
const http = require("http")
const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/api/users") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(apiData));
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Route not found" }));
  }
});
const Port = 5000;
server.listen(Port,()=>{
    console.log(`server is running it port ${Port}`)
})