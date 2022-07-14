const express = require("express");
const cors = require('cors');
require('dotenv').config()


const app = express()
app.use(express.json())
app.use(cors());



const PORT = process.env.PORT

app.get('/',(req,res)=>{
    res.send("Customers microservices")
})

