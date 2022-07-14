const express = require("express");
const cors = require('cors');
require('dotenv').config()


const app = express()
app.use(express.json())
app.use(cors());



const PORT = 8084

app.get('/',(req,res)=>{
    res.send("S3 image server microservice")
})

app.listen(PORT, () => {
    console.log(`S3 image server microservice running at port ${PORT}`)
})