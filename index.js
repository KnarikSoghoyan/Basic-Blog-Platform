import express from "express";
const port = 4000

const app = express();

import userRouter from './users-router.js'

app.use(express.json())

app.use('/users', userRouter)


app.listen(port,()=> {
    console.log(`Server started at port 4000`)
})