const mongoose=require('mongoose');
require('dotenv').config()
const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.mongo_URI);
        console.log("databse connected")
    }catch(err){
        console.log("Database connection failed",err)
    }
}
module.exports=connectDB;