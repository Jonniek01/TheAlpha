const express = require("express");
const cors = require('cors');
require('dotenv').config()


const app = express()
app.use(express.json())
app.use(cors());



const PORT = 8085

app.get('/',(req,res)=>{
    res.send("Admin microservice")
})

app.listen(PORT, () => {
    console.log(`Admin microservice running at port ${PORT}`)
})