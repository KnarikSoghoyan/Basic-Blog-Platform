import express from "express";

import {} from "dotenv/config"
const { port } = process.env;

const app = express();

import userRouter from './routers/users-router.js';
import authRouter from './routers/auth-router.js';

app.use(express.json())

app.use('/users', userRouter)
app.use('/auth', authRouter)

app.listen(port,()=> {
    console.log(`Server started at port ${port}`)
})