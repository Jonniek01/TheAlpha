const express = require("express");
const cors = require('cors');
require('dotenv').config()


const app = express()
app.use(express.json())
app.use(cors());



const PORT = 8083

app.get('/',(req,res)=>{
    res.send("Shopping microservice")
})

app.listen(PORT, () => {
    console.log(`Shopping microservice running at port ${PORT}`)
})