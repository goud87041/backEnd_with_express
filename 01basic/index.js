require("dotenv").config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/hello",(req,res)=>{
    res.send("<h1 >hello express world</h1>")
})

app.get("/greeting",(req,res)=>{
    res.send("well come sir")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
