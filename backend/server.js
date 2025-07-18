import express from 'express'
const app=express();
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './config/db.js';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/authRoutes.js';
dotenv.config();



app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))


app.use("/api/auth",authRoutes)

const PORT=process.env.PORT || 8000;

app.listen(PORT,()=>{
    console.log(`server is listning on port ${PORT}`);
    connectDB();
    
})