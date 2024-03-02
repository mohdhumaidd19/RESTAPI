const express=require("express");
const app=express();//server app creating 
//http methods
const dotenv=require("dotenv");
dotenv.config();

const userRouter = require("./routes/userRoutes");
const noteRouter = require("./routes/noteRoutes");
const { default: mongoose } = require("mongoose");
const cors=require("cors");

app.use(express.json())//req ki body ko json mein convert kar dega

app.use("/user",userRouter);
app.use("/note",noteRouter);
app.use(cors());//responses ke andar kuch headers add krdega
app.get("/",(req,res)=>{
    res.send("NOTES api from cheezy code");
});
const PORT=process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URL).then(()=>{
    app.listen(PORT,()=>{
        console.log("server started on port "+PORT);
    });
})
.catch((error)=>{
    console.log(error);
})

//routers ka use-> url's ko seggregate krne ke liye 
