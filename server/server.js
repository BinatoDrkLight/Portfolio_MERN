import express from 'express';
import cors from 'cors';
import connectDB from './configs/db.js';
import 'dotenv/config';
import contactRouter from './routes/contactRoute.js';
import connectCloudinary from './configs/cloudinary.js';

const app = express();
const port = process.env.PORT || 4000;

await connectDB()
await connectCloudinary()

//Allow multiple origins
const allowedOrigins = ['http://localhost:5173', 'https://portfoliomern-one.vercel.app', 'https://bineshadhikari.com.np']

//Middleware configuration 
app.use(express.json());
app.use(cors({origin: allowedOrigins, credentials: true}));

app.get('/', (req, res) => res.send("Api is working"));
app.use('/api/contact', contactRouter)

app.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`)
})