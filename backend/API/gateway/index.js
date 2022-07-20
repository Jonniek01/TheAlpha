

const express = require('express');
const cors = require('cors');
const proxy = require('express-http-proxy');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/', proxy('http://localhost:8081')); // default products
app.use('/customer', proxy('http://localhost:8082'));// customers
app.use('/shopping', proxy('http://localhost:8083'));// shopping
app.use('/images', proxy('http://localhost:8084'));// s3 image server
app.use('/admin', proxy('http://localhost:8085'));// admins

const PORT=8080;

app.listen(PORT, () => {
  console.log(`Gateway is running at Port ${PORT}`);
});

