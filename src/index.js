import express from "express";

import { } from "dotenv/config"
const { PORT } = process.env;

import { connectToMongoDB } from './storages/mongoose.js';

connectToMongoDB()

const app = express();

import authRouter from './routers/user-router.js';
import postRouter from './routers/posts-router.js';

app.use(express.json())

app.use('/auth', authRouter)
app.use('/posts', postRouter)

app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`)
})