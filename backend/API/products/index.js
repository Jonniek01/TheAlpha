const express = require("express");
const cors = require('cors');
require('dotenv').config()


const app = express()
app.use(express.json())
app.use(cors());



const PORT = 8081

app.get('/',(req,res)=>{
    res.send("Products microservice")
})

app.listen(PORT, () => {
    console.log(`Products microservice running at port ${PORT}`)
})