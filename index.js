require('dotenv').config()

const express = require('express')

const app = express()
const port = 4000

app.get('/', (req,res)=>{
     res.send("Hello World");
})

app.get('/anmol',(req,res)=>{
    res.send("Hello Buoiii");
})

app.get('/shubh',(req,res)=>{
    res.send("<h1>Hello Shubh</h1>")
})

app.get('/chai',(req,res)=>{
    res.send("<h2>Chai aur Backend</h2>")
})

app.get('/chunnu',(req,res)=>{
    res.send("Chunnulalllllll")
})

app.listen(process.env.PORT,()=>{
    console.log(`listening on http://localhost:${port}`);
})
