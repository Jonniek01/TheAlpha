/* eslint-disable new-cap */
const express = require('express');

const {
} = require('../controllers/customers.js');
const customers = express.Router();

/* CUSTOMERS SIGN UP*/
customers.post('/signup',
    signUp);

/*    id int NOT NULL PRIMARY KEY,
     name VARCHAR (50) NOT NULL,
     email VARCHAR(50) NOT NULL,
     password VARCHAR(50) NOT NULL,
     phone VARCHAR(50) NOT NULL,
     location VARCHAR(50) NOT NULL,
     */

/* Log in*/
customers.post('/login',
    login);
/* email VARCHAR(50) NOT NULL,
     password VARCHAR(50) NOT NULL,
*/

/* Log in*/
// Require to be logged in
customers.post('/logout',
    logout);
/*
     email VARCHAR(50) NOT NULL,
     password VARCHAR(50) NOT NULL,

*/
/* update account*/

// Require to be logged in
customers.post('/update',
    logout);
/*
     email VARCHAR(50) NOT NULL,
     password VARCHAR(50) NOT NULL,

*/


module.exports = {customers};
