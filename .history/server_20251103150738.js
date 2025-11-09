import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from "cors"
import helmet from "helmet"
import rateLimit from "express-rate-limit";


dotenv.config();
const app=express()

app.use(cors())
app.use(express.json());
app.use(helmet());



app.use(rateLimit({
    windowMs:15 ""
}))