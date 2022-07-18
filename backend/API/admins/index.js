const express = require('express');
const cors = require('cors');
require('dotenv').config();
const {admins} = require('./routes/admins');


const app = express();
app.use(express.json());
app.use(cors());


const PORT = 8085;

app.use('/', admins);

app.listen(PORT, () => {
  console.log(`Admin microservice running at port ${PORT}`);
});
