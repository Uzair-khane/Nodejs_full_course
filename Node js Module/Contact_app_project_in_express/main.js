import express from "express";
import mongoose from "mongoose"
import contactRoutes from "./routes/contactRoutes.js";

const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/contact").then(() => {
    console.log("database connected succefully")
})

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }))
app.use(express.static("public"))

app.use("/", contactRoutes)
app.listen(3000, () => {
    console.log("server is starting")
})