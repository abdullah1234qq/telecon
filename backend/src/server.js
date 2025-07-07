
import express from 'express';
import { ENV } from './config/env.js';
import { connectDB } from './config/db.js';
import { clerkMiddleware } from '@clerk/express';
import cors from 'cors';
const app = express()
app.use(cors())
app.use(express.json())
app.use(clerkMiddleware())
connectDB()
app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.listen(ENV.PORT, () => console.log("Server is Running", ENV.PORT))
// teckdevme1
// UKbjsGLIcQ2dt7SG