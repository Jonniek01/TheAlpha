const express = require("express");
const cors = require('cors');
require('dotenv').config()


const app = express()
app.use(express.json())
app.use(cors());



const PORT = 8082

app.get('/',(req,res)=>{
    res.send("Customers microservices")
})

app.listen(PORT, () => {
    console.log(`Customers microservices running at port ${PORT}`)
})