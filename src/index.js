import connectDB from "./db/index.js";
import dotenv from "dotenv";
import express from "express";
const app=express();
dotenv.config({
  path:'./env'
})



connectDB()
.then(()=>{
  app.listen(process.env.PORT||8000,()=>{
    console.log(`Server is running at port:${process.env.PORT}`);
  })
})
.catch((err)=>{
  console.log("MONGODB CONNECTION FAILED!!",err);
})
export default app

/*
import express from "express";
const app=express();
(async ()=>{
    try{
      await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
      app.on("error",(error)=>{
        console.log("ERROR:",error);
        throw error
      })
      app.listen(process.env.PORT,()=>{
        console.log(`App is listening on PORT:${process.env.PORT}`)
      })
    }
    catch(error)
    {
        console.log("ERROR:",error)
        throw error
    }
})()
*/