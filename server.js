const express=require("express");
const dotenv=require("dotenv").config();
const mongoose=require("mongoose")
mongoose.connect(process.env.DATABASE_URL,{
    useNewUrlParser:true
})
const db=mongoose.connection;
db.on("error",error=>console.error(error))
db.once("open",()=>console.log("connected to mongoose"))
const app=express();
const routerFolder=require("./router/index")
app.use("/",routerFolder);

app.set("view engine","ejs");
// app.get("/",(req,res)=>{
//     res.render("files");
// })
app.listen(3000,()=>{

    console.log("running nicely");
})
