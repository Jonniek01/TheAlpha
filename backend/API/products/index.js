const express = require('express');
const cors = require('cors');
require('dotenv').config();
const {categories} = require('./routes/categories');
const {products} = require('./routes/products');


const app = express();
app.use(express.json());
app.use(cors());


const PORT = 8081;

app.use('/', products);
app.use('/categories', categories);


app.listen(PORT, () => {
  console.log(`Products microservice running at port ${PORT}`);
});
