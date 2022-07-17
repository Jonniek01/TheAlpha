/* eslint-disable new-cap */
const express = require('express');

const {
} = require('../controllers/customers.js');
const categories = express.Router();

/* CUSTOMERS SIGN UP*/
categories.post('/signup',
    signUp);

/*    id int NOT NULL PRIMARY KEY,
     name VARCHAR (50) NOT NULL,
     email VARCHAR(50) NOT NULL,
     password VARCHAR(50) NOT NULL,
     phone VARCHAR(50) NOT NULL,
     location VARCHAR(50) NOT NULL,
     */

/* Log in*/
categories.post('/login',
    login);
/*
     email VARCHAR(50) NOT NULL,
     password VARCHAR(50) NOT NULL,

*/


module.exports = {categories};
