import express from "express";
const app = express();

const port = 4000;

app.use(express.json())

app.get('/', (req, res) => {
    res.send("Hello world")
})

app.post('/', (req, res) => {
    res.status(201).end('POST request to homepage')
})

app.listen(port, () => {
    console.log(`Server started at port 4000`)
})