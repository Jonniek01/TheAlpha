const express = require('express');
const cors = require('cors');
require('dotenv').config();
const {customers} = require('./routes/customers');


const app = express();
app.use(express.json());
app.use(cors());


const PORT = 8082;

app.use('/', customers);


app.listen(PORT, () => {
  console.log(`Customers microservices running at port ${PORT}`);
});
