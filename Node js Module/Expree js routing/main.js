let express = require("express");
let app = express();
app.get('/',(req,res)=>{
    res.send("Home page ")
})
// app.get("/about", (req, res) => {
//     res.send(`
// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <title>About</title>
//   <script src="https://cdn.tailwindcss.com" defer></script>
// </head>
// <body class="bg-gray-100 flex items-center justify-center min-h-screen">

//   <div class="max-w-sm bg-white rounded-2xl shadow-lg p-6">
//     <img 
//       src="https://via.placeholder.com/300"
//       alt="card image"
//       class="rounded-xl mb-4"
//     >

//     <h2 class="text-xl font-bold text-gray-800 mb-2">
//       Tailwind Card
//     </h2>

//     <p class="text-gray-600 mb-4">
//       Yeh ek simple card hai jo Tailwind CSS se design kiya gaya hai.
//     </p>

//     <button class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
//       Read More
//     </button>
//   </div>

// </body>
// </html>
// `);
// });

// nested route 

app.get('/contact/user',(req,res)=>{
    res.send("user page")
})

// route parameters 

app.get('/user/:id',(req,res)=>{
    res.send("user id " + req.params.id)
})
// query parameters 
app.get('/server',(req,res)=>{
 res.send(req.query)
})
app.listen("3000",()=>{
    console.log("server start");
})