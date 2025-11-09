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
    windowMs:15 * 60 *1000,//15 mins
    max:100,
    message:"Too many request,try again later"
})
)

mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log(`MongoDb Connected`))
.catch((err)=>console.log(err))


const PORT=process.env.PORT || 3000;
app.listen(PORT)