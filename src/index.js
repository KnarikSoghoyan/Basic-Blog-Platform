import express from "express";

import {} from "dotenv/config"
// import dotenv from 'dotenv'
// dotenv.config()

const { port } = process.env;

const app = express();

import userRouter from './routers/users-router.js';

app.use(express.json())

app.use('/users', userRouter)


app.listen(port,()=> {
    console.log(`Server started at port ${port}`)
})