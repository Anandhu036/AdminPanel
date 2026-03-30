const express=require('express');
const cors=require('cors');
const app = express();
require('dotenv').config();
const courseRoute=require("./routes/courseRoute")
const connectDB=require("./db")
app.use(express.json());
app.use(cors());
app.use("/courses",courseRoute);
connectDB();
app.listen(process.env.PORT,()=>console.log("Server is running"));
