const express = require('express');
const cors = require('cors');
require('dotenv').config();
const {orders} = require('./routes/orders');
const {items} = require('./routes/items');


const app = express();
app.use(express.json());
app.use(cors());


const PORT = 8083;
app.use('/items', items);

app.use('/orders', orders);


app.listen(PORT, () => {
  console.log(`Shopping microservice running at port ${PORT}`);
});
