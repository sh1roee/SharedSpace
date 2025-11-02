import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
//import something from './routers/'

const app = express();
app.use(express.json());
dotenv.config();
await mongoose.connect(process.env.ConnectionString, {});


app.listen(3000, () => { 
    console.log('Sever connected at port 3000');
})
